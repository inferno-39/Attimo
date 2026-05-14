import type { CatalogCategoryId } from "@/types/product";

export const CATALOG_CATEGORY_OPTIONS: { value: CatalogCategoryId | "all"; label: string }[] = [
  { value: "all", label: "Все" },
  { value: "rings", label: "Кольца" },
  { value: "earrings", label: "Серьги" },
  { value: "pendants", label: "Кулоны" },
  { value: "bracelets", label: "Браслеты" },
  { value: "necklaces", label: "Колье" },
  { value: "sets", label: "Комплекты" },
];

export const PRICE_PRESETS = [
  { value: "all", label: "Цена" },
  { value: "to-150", label: "до 150 000" },
  { value: "150-200", label: "150 000 — 200 000" },
  { value: "200-plus", label: "от 200 000" },
] as const;

export type PricePresetId = (typeof PRICE_PRESETS)[number]["value"];

export const SORT_OPTIONS = [
  { value: "featured", label: "По умолчанию" },
  { value: "price-asc", label: "Цена · по возрастанию" },
  { value: "price-desc", label: "Цена · по убыванию" },
  { value: "name-asc", label: "Название А—Я" },
] as const;

export type CatalogSortId = (typeof SORT_OPTIONS)[number]["value"];

export const COLLECTION_LABELS: Record<string, string> = {
  neve: "Neve Luce",
  silenzio: "Silenzio",
  memoria: "Memoria Cordis",
  luna: "Luna Tratta",
  aurora: "Aurora Quieta",
  velo: "Velo Mano",
};
