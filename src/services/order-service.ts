import { prisma } from "@/lib/prisma";
import { AppError } from "@/server/http";
import { requireDatabase } from "@/lib/db";

export type OrderLineInput = { productId: string; quantity: number };

export async function listOrdersForUser(userId: string) {
  requireDatabase();
  return prisma.order.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
    include: {
      items: {
        include: {
          product: { select: { id: true, title: true, slug: true } },
        },
      },
    },
  });
}

export async function createOrder(userId: string | null, lines: OrderLineInput[]) {
  requireDatabase();
  const resolvedLines: { productId: string; quantity: number; price: number }[] = [];

  for (const line of lines) {
    const product = await prisma.product.findFirst({
      where: { OR: [{ id: line.productId }, { slug: line.productId }] },
    });
    if (!product) throw new AppError(`Изделие не найдено: ${line.productId}`, 404);
    resolvedLines.push({
      productId: product.id,
      quantity: line.quantity,
      price: product.price,
    });
  }

  const totalPrice = resolvedLines.reduce((s, l) => s + l.price * l.quantity, 0);

  return prisma.$transaction(async (tx) => {
    const order = await tx.order.create({
      data: {
        userId,
        totalPrice,
        status: "PENDING",
        items: {
          create: resolvedLines.map((l) => ({
            productId: l.productId,
            quantity: l.quantity,
            price: l.price,
          })),
        },
      },
      include: {
        items: { include: { product: { select: { id: true, title: true, slug: true } } } },
      },
    });
    return order;
  });
}
