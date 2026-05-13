import type { Metadata } from "next";
import { CollectionSection } from "@/components/sections/collection-section";
import { listProducts } from "@/services/product-service";

export const metadata: Metadata = {
  title: "Каталог",
  description: "Курируемая подборка авторских ювелирных изделий Attimo.",
};

export default async function CatalogPage() {
  const products = await listProducts(false);

  return (
    <>
      <div className="border-b border-line/60 bg-ivory/20">
        <div className="mx-auto max-w-[1200px] px-6 sm:px-8 lg:px-12 py-16 lg:py-20">
          <p className="font-sans text-caption-wide uppercase tracking-[0.26em] text-ash">Изделия</p>
          <h1 className="mt-4 font-serif text-display-xl text-graphite text-balance">Каталог</h1>
          <p className="mt-6 max-w-2xl font-sans text-[15px] leading-relaxed text-stone">
            Каждый объект — малая серия. Материалы конфликтуют только с халатностью, не с временем носки:
            финиш живёт через годы бережной жизни.
          </p>
        </div>
      </div>
      <CollectionSection
        eyebrow="Полный выпуск доступного ассортимента"
        title="Присутствие металла без лишней славы"
        products={products}
        showCta={false}
      />
    </>
  );
}
