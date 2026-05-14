import { prisma } from "@/lib/prisma";
import { AppError } from "@/server/http";
import { requireDatabase } from "@/lib/db";
import { prismaProductToDto, type ProductWithRelations } from "@/lib/product-mapper";
import { productInclude } from "@/lib/prisma-includes";
import type { Product } from "@/types/product";

export async function listWishlist(userId: string): Promise<Product[]> {
  requireDatabase();
  const rows = await prisma.wishlistItem.findMany({
    where: { userId },
    include: { product: { include: productInclude } },
    orderBy: { createdAt: "desc" },
  });
  return rows.map((w) => prismaProductToDto(w.product as ProductWithRelations));
}

export async function addToWishlist(userId: string, productId: string): Promise<void> {
  requireDatabase();
  const product = await prisma.product.findUnique({ where: { id: productId } });
  if (!product) {
    const bySlug = await prisma.product.findUnique({ where: { slug: productId } });
    if (!bySlug) throw new AppError("Изделие не найдено", 404);
    await prisma.wishlistItem.upsert({
      where: { userId_productId: { userId, productId: bySlug.id } },
      create: { userId, productId: bySlug.id },
      update: {},
    });
    return;
  }
  await prisma.wishlistItem.upsert({
    where: { userId_productId: { userId, productId: product.id } },
    create: { userId, productId: product.id },
    update: {},
  });
}

export async function removeFromWishlist(userId: string, productId: string): Promise<void> {
  requireDatabase();
  const product = await prisma.product.findFirst({
    where: { OR: [{ id: productId }, { slug: productId }] },
  });
  if (!product) throw new AppError("Изделие не найдено", 404);
  await prisma.wishlistItem.deleteMany({ where: { userId, productId: product.id } });
}
