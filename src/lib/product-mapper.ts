import type { Category, Collection, Product as PrismaProduct, ProductImage } from "@prisma/client";
import type { CatalogCategoryId, Product, ProductAvailability } from "@/types/product";

function stockToAvailability(stock: number): ProductAvailability {
  if (stock >= 4) return "in-stock";
  if (stock > 0) return "limited";
  return "made-to-order";
}

function categorySlugToCatalogId(slug: string | undefined): CatalogCategoryId | undefined {
  if (!slug) return undefined;
  const allowed: CatalogCategoryId[] = [
    "rings",
    "earrings",
    "pendants",
    "bracelets",
    "necklaces",
    "sets",
  ];
  return allowed.includes(slug as CatalogCategoryId) ? (slug as CatalogCategoryId) : undefined;
}

export type ProductWithRelations = PrismaProduct & {
  images: ProductImage[];
  category: Category | null;
  collection: Collection | null;
};

export function prismaProductToDto(p: ProductWithRelations): Product {
  return {
    id: p.id,
    slug: p.slug,
    name: p.title,
    subtitle: p.shortDescription ?? undefined,
    description: p.fullDescription,
    priceRub: Math.round(p.price / 100),
    material: p.material ?? undefined,
    featured: p.featured,
    images: p.images.map((img) => ({
      url: img.url,
      alt: img.alt ?? p.title,
      sortOrder: img.sortOrder,
    })),
    catalogCategory: categorySlugToCatalogId(p.category?.slug),
    collectionId: p.collection?.slug ?? undefined,
    emotionalLead: p.emotionalLead ?? undefined,
    storyQuote: p.storyQuote ?? undefined,
    storyBody: p.storyBody ?? undefined,
    craftsmanshipTitle: p.craftsmanshipTitle ?? undefined,
    craftsmanshipBody: p.craftsmanshipBody ?? undefined,
    craftsmanshipImageUrl: p.craftsmanshipImageUrl ?? undefined,
    sizes: p.sizes ?? undefined,
    availability: stockToAvailability(p.stock),
    careInstructions: p.careInstructions ?? undefined,
    leadTime: p.leadTime ?? undefined,
  };
}
