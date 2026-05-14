import type { Product, ProductAvailability } from "@/types/product";

export type EditorialResolved = {
  emotionalLead: string;
  storyQuote: string;
  storyBody: string;
  craftsmanshipTitle: string;
  craftsmanshipBody: string;
  craftsmanshipImageUrl: string;
  sizes: string;
  availability: ProductAvailability;
  careInstructions: string;
  leadTime: string;
};

const DEFAULT_QUOTE =
  "This piece was inspired by quiet late-evening moments and memories that stay forever.";

const DEFAULT_CRAFT_TITLE = "Руки и металл";
const DEFAULT_CRAFT_BODY =
  "Каждое изделие проходит через руки мастера: огранка, посадка, финиш без спешки конвейера. Мы сохраняем темп, в котором украшение остаётся авторским объектом, а не SKU.";

export function editorialDefaults(product: Product): EditorialResolved {
  const lead =
    product.emotionalLead ??
    (product.description.length > 140 ? `${product.description.slice(0, 137)}…` : product.description);

  const availability: ProductAvailability = product.availability ?? "made-to-order";

  return {
    emotionalLead: lead,
    storyQuote: product.storyQuote ?? DEFAULT_QUOTE,
    storyBody: product.storyBody ?? product.description,
    craftsmanshipTitle: product.craftsmanshipTitle ?? DEFAULT_CRAFT_TITLE,
    craftsmanshipBody: product.craftsmanshipBody ?? DEFAULT_CRAFT_BODY,
    craftsmanshipImageUrl:
      product.craftsmanshipImageUrl ??
      "https://images.unsplash.com/photo-1515564615256-cef770033f9f?auto=format&fit=crop&w=1600&q=85",
    sizes: product.sizes ?? "Индивидуальная посадка после слепка в ателье",
    availability,
    careInstructions:
      product.careInstructions ??
      "Храните отдельно в футляре. Избегайте контакта с парфюмом и хлором. Полировка матового золота — раз в год в нашей мастерской.",
    leadTime: product.leadTime ?? "8–14 недель с момента подтверждения заказа",
  };
}

export function availabilityLabel(a: ProductAvailability): string {
  switch (a) {
    case "in-stock":
      return "В ателье";
    case "limited":
      return "Ограниченный выпуск";
    default:
      return "Под заказ";
  }
}
