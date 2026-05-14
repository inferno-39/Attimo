import type { CatalogCategoryId, Product } from "@/types/product";
import type { CatalogSortId } from "@/constants/catalog-filters";
import type { PricePresetId } from "@/constants/catalog-filters";
import { COLLECTION_LABELS } from "@/constants/catalog-filters";

export type CatalogFilters = {
  category: CatalogCategoryId | "all";
  material: string;
  collection: string;
  price: PricePresetId;
};

const defaultFilters: CatalogFilters = {
  category: "all",
  material: "all",
  collection: "all",
  price: "all",
};

export function getDefaultCatalogFilters(): CatalogFilters {
  return { ...defaultFilters };
}

function inferCategory(p: Product): CatalogCategoryId | undefined {
  if (p.catalogCategory) return p.catalogCategory;
  const head = p.subtitle?.split("·")[0]?.trim().toLowerCase() ?? "";
  if (head.includes("компань") || head.includes("пара")) return "sets";
  if (head.includes("серьг")) return "earrings";
  if (head.includes("кулон") || head.includes("медальон")) return "pendants";
  if (head.includes("браслет") || head.includes("цеп")) return "bracelets";
  if (head.includes("колье")) return "necklaces";
  if (head.includes("кольц")) return "rings";
  return undefined;
}

function inferCollectionId(p: Product): string | undefined {
  if (p.collectionId) return p.collectionId;
  const part = p.slug.split("-")[0];
  if (part && COLLECTION_LABELS[part]) return part;
  return undefined;
}

function priceMatches(priceRub: number, preset: PricePresetId): boolean {
  if (preset === "all") return true;
  if (preset === "to-150") return priceRub < 150_000;
  if (preset === "150-200") return priceRub >= 150_000 && priceRub <= 200_000;
  if (preset === "200-plus") return priceRub > 200_000;
  return true;
}

export function filterProducts(products: Product[], filters: CatalogFilters): Product[] {
  return products.filter((p) => {
    const cat = inferCategory(p);
    if (filters.category !== "all" && cat !== filters.category) return false;

    if (filters.material !== "all") {
      const m = p.material ?? "";
      if (m !== filters.material) return false;
    }

    if (filters.collection !== "all") {
      const cid = inferCollectionId(p);
      if (cid !== filters.collection) return false;
    }

    if (!priceMatches(p.priceRub, filters.price)) return false;
    return true;
  });
}

export function sortProducts(products: Product[], sort: CatalogSortId): Product[] {
  const copy = [...products];
  switch (sort) {
    case "price-asc":
      return copy.sort((a, b) => a.priceRub - b.priceRub);
    case "price-desc":
      return copy.sort((a, b) => b.priceRub - a.priceRub);
    case "name-asc":
      return copy.sort((a, b) => a.name.localeCompare(b.name, "ru"));
    case "featured":
    default:
      return copy.sort((a, b) => {
        if (a.featured === b.featured) return 0;
        return a.featured ? -1 : 1;
      });
  }
}

export function uniqueMaterials(products: Product[]): string[] {
  const set = new Set<string>();
  for (const p of products) {
    if (p.material) set.add(p.material);
  }
  return [...set].sort((a, b) => a.localeCompare(b, "ru"));
}

export function uniqueCollections(products: Product[]): { id: string; label: string }[] {
  const map = new Map<string, string>();
  for (const p of products) {
    const id = inferCollectionId(p);
    if (id && COLLECTION_LABELS[id]) map.set(id, COLLECTION_LABELS[id]);
  }
  return [...map.entries()].map(([id, label]) => ({ id, label }));
}
