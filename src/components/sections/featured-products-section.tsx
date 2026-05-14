"use client";

import { AnimatedSection } from "@/components/common/animated-section";
import { Container } from "@/components/layout/container";
import { SectionTitle } from "@/components/ui/section-title";
import { ProductCard } from "@/components/product/product-card";
import type { Product } from "@/types/product";
import { cn } from "@/utils/cn";

type FeaturedProductsSectionProps = {
  products: Product[];
};

export function FeaturedProductsSection({ products }: FeaturedProductsSectionProps) {
  const slice = products.slice(0, 4);

  return (
    <AnimatedSection className="border-b border-line/50 bg-ivory/20">
      <Container size="wide" className="py-section md:py-30">
        <div className="flex flex-col gap-12 border-b border-line/40 pb-14 md:flex-row md:items-end md:justify-between md:gap-16">
          <SectionTitle
            eyebrow="Изделия"
            title="Выбор без шума витрины"
            description="Минимум позиций в открытом доступе — максимум внимания к фактуре и посадке на коже."
            className="max-w-xl"
          />
        </div>
        <div className="mt-12 grid gap-x-6 gap-y-14 sm:mt-16 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-18 lg:grid-cols-4 lg:gap-y-22">
          {slice.map((p, idx) => (
            <div
              key={p.id}
              className={cn(idx === 0 && "sm:col-span-2 lg:col-span-2")}
            >
              <ProductCard product={p} index={idx} variant={idx === 0 ? "featured" : "default"} imagePriority={idx === 0} />
            </div>
          ))}
        </div>
      </Container>
    </AnimatedSection>
  );
}
