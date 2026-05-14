export type ProductImage = {
  url: string;
  alt: string;
  sortOrder?: number;
};

/** Для фильтров каталога; при отсутствии — выводится из subtitle в `lib/catalog-query`. */
export type CatalogCategoryId =
  | "rings"
  | "earrings"
  | "pendants"
  | "bracelets"
  | "necklaces"
  | "sets";

export type ProductAvailability = "in-stock" | "made-to-order" | "limited";

export type Product = {
  id: string;
  slug: string;
  name: string;
  subtitle?: string;
  description: string;
  priceRub: number;
  material?: string;
  featured?: boolean;
  images: ProductImage[];
  catalogCategory?: CatalogCategoryId;
  /** Короткий id линии: neve, silenzio, memoria… */
  collectionId?: string;
  /** Короткий эмоциональный лид для hero (1–2 строки) */
  emotionalLead?: string;
  /** Редакционная цитата (например EN) для блока истории */
  storyQuote?: string;
  /** Развёрнутый storytelling под цитатой */
  storyBody?: string;
  /** Секция мастерства: заголовок */
  craftsmanshipTitle?: string;
  /** Секция мастерства: текст */
  craftsmanshipBody?: string;
  /** Изображение для блока мастерства */
  craftsmanshipImageUrl?: string;
  /** Размеры / посадка */
  sizes?: string;
  /** Наличие */
  availability?: ProductAvailability;
  /** Уход */
  careInstructions?: string;
  /** Срок изготовления / доставки ателье */
  leadTime?: string;
};
