import { mockProducts } from "@/constants/mock-products";
import type { Product } from "@/types/product";

async function fetchFromDb(): Promise<Product[]> {
  try {
    const { prisma } = await import("@/lib/prisma");
    if (!process.env.DATABASE_URL) return mockProducts;

    const rows = await prisma.product.findMany({
      include: { images: { orderBy: { sortOrder: "asc" } } },
      orderBy: { updatedAt: "desc" },
    });

    if (rows.length === 0) return mockProducts;

    return rows.map((p) => ({
      id: p.id,
      slug: p.slug,
      name: p.name,
      subtitle: p.subtitle ?? undefined,
      description: p.description,
      priceRub: Math.round(p.priceCents / 100),
      material: p.material ?? undefined,
      featured: p.isFeatured,
      images: p.images.map((img) => ({
        url: img.url,
        alt: img.alt ?? p.name,
        sortOrder: img.sortOrder,
      })),
    }));
  } catch {
    return mockProducts;
  }
}

export async function listProducts(featuredOnly = false): Promise<Product[]> {
  const all = await fetchFromDb();
  return featuredOnly ? all.filter((p) => p.featured) : all;
}

/** URL-сегмент [id]: совпадает со `slug` или с внутренним `id` (например из Prisma). */
export async function getProductById(id: string): Promise<Product | undefined> {
  const all = await fetchFromDb();
  return all.find((p) => p.slug === id || p.id === id);
}

/** Для блока «Рекомендуем» на странице товара: приоритет — та же коллекция, затем остальные. */
export async function listRelatedProducts(excludeSlug: string, limit = 3): Promise<Product[]> {
  const all = await listProducts(false);
  const current = all.find((p) => p.slug === excludeSlug || p.id === excludeSlug);
  const rest = all.filter((p) => p.slug !== excludeSlug && p.id !== excludeSlug);
  if (!current?.collectionId) return rest.slice(0, limit);

  const same = rest.filter((p) => p.collectionId === current.collectionId);
  const other = rest.filter((p) => p.collectionId !== current.collectionId);
  return [...same, ...other].slice(0, limit);
}
