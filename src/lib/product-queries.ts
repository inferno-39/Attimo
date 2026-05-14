import type { Prisma } from "@prisma/client";
import type { CatalogSortId } from "@/constants/catalog-filters";
import type { ProductsQuery } from "@/server/validation";

export function buildProductWhere(q: ProductsQuery): Prisma.ProductWhereInput {
  const where: Prisma.ProductWhereInput = {};

  if (q.featured === "true") {
    where.isFeatured = true;
  } else if (q.featured === "false") {
    where.isFeatured = false;
  }

  if (q.category && q.category !== "all") {
    where.category = { slug: q.category };
  }

  if (q.collection && q.collection !== "all") {
    where.collection = { slug: q.collection };
  }

  if (q.material && q.material !== "all") {
    where.material = q.material;
  }

  return where;
}

export function buildProductOrderBy(sort?: CatalogSortId): Prisma.ProductOrderByWithRelationInput[] {
  switch (sort) {
    case "price-asc":
      return [{ priceCents: "asc" }];
    case "price-desc":
      return [{ priceCents: "desc" }];
    case "name-asc":
      return [{ title: "asc" }];
    case "featured":
    default:
      return [{ isFeatured: "desc" }, { updatedAt: "desc" }];
  }
}
