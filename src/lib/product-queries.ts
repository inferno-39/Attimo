import type { Prisma } from "@prisma/client";
import type { CatalogSortId } from "@/constants/catalog-filters";
import type { ProductsQuery } from "@/server/validation";

export function buildProductWhere(q: ProductsQuery): Prisma.ProductWhereInput {
  const where: Prisma.ProductWhereInput = {};

  if (q.featured === "true") {
    where.featured = true;
  } else if (q.featured === "false") {
    where.featured = false;
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
      return [{ price: "asc" }];
    case "price-desc":
      return [{ price: "desc" }];
    case "name-asc":
      return [{ title: "asc" }];
    case "featured":
    default:
      return [{ featured: "desc" }, { updatedAt: "desc" }];
  }
}
