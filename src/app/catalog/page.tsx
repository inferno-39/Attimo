import type { Metadata } from "next";
import { CatalogHero, CatalogExperience } from "@/components/catalog";
import { listProducts } from "@/services/product-service";

export const metadata: Metadata = {
  title: "Каталог",
  description: "Курируемая подборка авторских ювелирных изделий Attimo.",
};

export default async function CatalogPage() {
  const products = await listProducts(false);

  return (
    <>
      <CatalogHero />
      <CatalogExperience products={products} />
    </>
  );
}
