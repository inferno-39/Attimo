/**
 * Тонкий слой повторяемых запросов к каталогу (Prisma).
 * Сервисы остаются основной точкой входа для бизнес-логики.
 */
import type { Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { productInclude } from "@/lib/prisma-includes";

const catalogInclude = productInclude;

export type ProductWithCatalogRelations = Prisma.ProductGetPayload<{ include: typeof catalogInclude }>;

export async function findProductBySlugOrId(slugOrId: string): Promise<ProductWithCatalogRelations | null> {
  return prisma.product.findFirst({
    where: { OR: [{ slug: slugOrId }, { id: slugOrId }] },
    include: catalogInclude,
  });
}

export async function findManyProducts(args: {
  where?: Prisma.ProductWhereInput;
  orderBy?: Prisma.ProductOrderByWithRelationInput | Prisma.ProductOrderByWithRelationInput[];
}): Promise<ProductWithCatalogRelations[]> {
  const order = args.orderBy ?? { updatedAt: "desc" };
  return prisma.product.findMany({
    where: args.where,
    orderBy: order,
    include: catalogInclude,
  });
}
