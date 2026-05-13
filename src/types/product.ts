export type ProductImage = {
  url: string;
  alt: string;
  sortOrder?: number;
};

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
};
