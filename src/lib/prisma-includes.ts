/** Единый include для карточки изделия (каталог, PDP, wishlist). */
export const productInclude = {
  images: { orderBy: { sortOrder: "asc" as const } },
  category: true,
  collection: true,
} as const;
