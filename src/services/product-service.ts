import { mockProducts } from "@/constants/mock-products";
import type { CatalogSortId } from "@/constants/catalog-filters";
import { filterProducts, getDefaultCatalogFilters, sortProducts, type CatalogFilters } from "@/lib/catalog-query";
import { prismaProductToDto, type ProductWithRelations } from "@/lib/product-mapper";
import { buildProductOrderBy, buildProductWhere } from "@/lib/product-queries";
import { productInclude } from "@/lib/prisma-includes";
import type { Product } from "@/types/product";
import type { ProductsQuery } from "@/server/validation";

async function queryDbAll(): Promise<Product[]> {
  const { prisma } = await import("@/lib/prisma");
  const rows = await prisma.product.findMany({
    include: productInclude,
    orderBy: { updatedAt: "desc" },
  });
  return rows.map((r) => prismaProductToDto(r as ProductWithRelations));
}

/** Список из БД или mock, если БД недоступна / пуста. */
async function fetchCatalog(): Promise<Product[]> {
  if (!process.env.DATABASE_URL) return mockProducts;
  try {
    const list = await queryDbAll();
    return list.length > 0 ? list : mockProducts;
  } catch {
    return mockProducts;
  }
}

export async function listProducts(featuredOnly = false): Promise<Product[]> {
  const all = await fetchCatalog();
  return featuredOnly ? all.filter((p) => p.featured) : all;
}

export async function getProductById(id: string): Promise<Product | undefined> {
  if (!process.env.DATABASE_URL) {
    const all = await fetchCatalog();
    return all.find((p) => p.slug === id || p.id === id);
  }
  try {
    const { prisma } = await import("@/lib/prisma");
    const row = await prisma.product.findFirst({
      where: { OR: [{ slug: id }, { id }] },
      include: productInclude,
    });
    if (!row) {
      return mockProducts.find((p) => p.slug === id || p.id === id);
    }
    return prismaProductToDto(row as ProductWithRelations);
  } catch {
    return (await fetchCatalog()).find((p) => p.slug === id || p.id === id);
  }
}

/** URL-сегмент [id]: совпадает со `slug` или с внутренним `id`. */
export async function listRelatedProducts(excludeSlug: string, limit = 3): Promise<Product[]> {
  const all = await listProducts(false);
  const current = all.find((p) => p.slug === excludeSlug || p.id === excludeSlug);
  const rest = all.filter((p) => p.slug !== excludeSlug && p.id !== excludeSlug);
  if (!current?.collectionId) return rest.slice(0, limit);

  const same = rest.filter((p) => p.collectionId === current.collectionId);
  const other = rest.filter((p) => p.collectionId !== current.collectionId);
  return [...same, ...other].slice(0, limit);
}

function toCatalogFilters(q: ProductsQuery): CatalogFilters {
  const d = getDefaultCatalogFilters();
  return {
    ...d,
    category: (q.category as CatalogFilters["category"]) ?? "all",
    material: q.material ?? "all",
    collection: q.collection ?? "all",
  };
}

/** Для HTTP API: фильтры + сортировка (Prisma при наличии БД, иначе клиентская фильтрация mock). */
export async function queryProductsApi(q: ProductsQuery): Promise<Product[]> {
  const sort = (q.sort ?? "featured") as CatalogSortId;

  if (!process.env.DATABASE_URL) {
    const base = await fetchCatalog();
    let list = filterProducts(base, toCatalogFilters(q));
    if (q.featured === "true") list = list.filter((p) => p.featured);
    if (q.featured === "false") list = list.filter((p) => !p.featured);
    return sortProducts(list, sort);
  }

  try {
    const { prisma } = await import("@/lib/prisma");
    const where = buildProductWhere(q);
    const rows = await prisma.product.findMany({
      where,
      include: productInclude,
      orderBy: buildProductOrderBy(sort),
    });
    if (rows.length === 0) {
      let list = filterProducts(mockProducts, toCatalogFilters(q));
      if (q.featured === "true") list = list.filter((p) => p.featured);
      if (q.featured === "false") list = list.filter((p) => !p.featured);
      return sortProducts(list, sort);
    }
    return rows.map((r) => prismaProductToDto(r as ProductWithRelations));
  } catch {
    const base = await fetchCatalog();
    let list = filterProducts(base, toCatalogFilters(q));
    if (q.featured === "true") list = list.filter((p) => p.featured);
    if (q.featured === "false") list = list.filter((p) => !p.featured);
    return sortProducts(list, sort);
  }
}
