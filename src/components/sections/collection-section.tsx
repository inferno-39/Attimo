"use client";

import { Container } from "@/components/layout/container";
import { ProductCard } from "@/components/product/product-card";
import { FadeIn } from "@/components/common/fade-in";
import type { Product } from "@/types/product";
import { Button } from "@/components/ui/button";

type CollectionSectionProps = {
  products: Product[];
  title?: string;
  eyebrow?: string;
  showCta?: boolean;
};

export function CollectionSection({
  products,
  title = "Сезонное избранное",
  eyebrow = "Курируемые линии",
  showCta = true,
}: CollectionSectionProps) {
  const slice = products.slice(0, 4);

  return (
    <section className="border-b border-line/60 bg-ivory/25">
      <Container className="py-22">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 pb-14 border-b border-line/60">
          <div className="max-w-xl space-y-4">
            <FadeIn>
              <p className="font-sans text-caption-wide uppercase tracking-[0.26em] text-ash">{eyebrow}</p>
            </FadeIn>
            <FadeIn delay={0.06}>
              <h2 className="font-serif text-display-lg text-graphite">{title}</h2>
            </FadeIn>
            <FadeIn delay={0.12}>
              <p className="font-sans text-[15px] leading-relaxed text-stone">
                Представление не торопливое — как примерка второй кожи. Мало позиций в открытом доступе;
                узкие выпуски остаются внутренним календарём ателье.
              </p>
            </FadeIn>
          </div>
          {showCta ? (
            <FadeIn delay={0.16}>
              <Button href="/catalog" variant="ghost" className="px-10 border border-graphite">
                Открыть полный каталог
              </Button>
            </FadeIn>
          ) : null}
        </div>
        <div className="grid gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-4 pt-16">
          {slice.map((p, idx) => (
            <ProductCard key={p.id} product={p} index={idx} />
          ))}
        </div>
        {!showCta ? (
          <div className="mt-14 text-center">
            <FadeIn>
              <Button href="/contact" variant="link" className="normal-case text-[13px] tracking-normal">
                Записаться на приватный просмотр
              </Button>
            </FadeIn>
          </div>
        ) : null}
      </Container>
    </section>
  );
}
