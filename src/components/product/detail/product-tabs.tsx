"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { Product } from "@/types/product";
import type { EditorialResolved } from "@/lib/product-editorial";
import { ProductDetails } from "@/components/product/detail/product-details";
import { Button } from "@/components/ui/button";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { EASE_LUXURY, MOTION_DURATION } from "@/lib/motion";
import { cn } from "@/utils/cn";

const tabs = [
  { id: "piece" as const, label: "Изделие" },
  { id: "care" as const, label: "Уход" },
  { id: "atelier" as const, label: "Ателье" },
];

type ProductTabsProps = {
  product: Product;
  editorial: EditorialResolved;
  className?: string;
};

export function ProductTabs({ product, editorial, className }: ProductTabsProps) {
  const [tab, setTab] = useState<(typeof tabs)[number]["id"]>("piece");
  const reduce = usePrefersReducedMotion();

  return (
    <div className={cn("space-y-10", className)}>
      <div
        className="flex flex-wrap gap-2 border-b border-line/60 pb-3 sm:pb-4"
        role="tablist"
        aria-label="Информация о товаре"
      >
        {tabs.map((t) => (
          <button
            key={t.id}
            type="button"
            role="tab"
            aria-selected={tab === t.id}
            id={`tab-${t.id}`}
            aria-controls={`panel-${t.id}`}
            onClick={() => setTab(t.id)}
            className={cn(
              "min-h-[44px] rounded-full border px-5 py-2.5 font-sans text-[10px] uppercase tracking-[0.22em] transition-colors duration-480 touch-manipulation sm:min-h-0 sm:py-2",
              tab === t.id
                ? "border-graphite bg-graphite text-canvas"
                : "border-transparent text-ash hover:border-line hover:text-graphite",
            )}
          >
            {t.label}
          </button>
        ))}
      </div>

      <motion.div
        key={tab}
        role="tabpanel"
        id={`panel-${tab}`}
        aria-labelledby={`tab-${tab}`}
        initial={reduce ? false : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduce ? 0.01 : MOTION_DURATION.sm, ease: EASE_LUXURY }}
      >
        {tab === "piece" ? (
          <div className="grid gap-10 lg:grid-cols-[1fr_minmax(0,1fr)] lg:gap-16">
            <ProductDetails product={product} editorial={editorial} />
            <div className="space-y-4 lg:border-l lg:border-line/50 lg:pl-12">
              <p className="font-sans text-caption-wide uppercase tracking-[0.22em] text-ash">Описание</p>
              <p className="font-sans text-body-readable leading-[1.8] text-stone text-pretty">{product.description}</p>
            </div>
          </div>
        ) : null}

        {tab === "care" ? (
          <div className="max-w-2xl space-y-6">
            <p className="font-sans text-caption-wide uppercase tracking-[0.22em] text-ash">Рекомендации по уходу</p>
            <p className="font-sans text-body-readable leading-[1.85] text-stone text-pretty">{editorial.careInstructions}</p>
            <p className="font-sans text-[13px] text-ash leading-relaxed">
              Деликатная чистка и полировка выполняются в нашей мастерской, чтобы сохранить авторский финиш поверхности.
            </p>
          </div>
        ) : null}

        {tab === "atelier" ? (
          <div className="max-w-2xl space-y-6">
            <p className="font-sans text-caption-wide uppercase tracking-[0.22em] text-ash">Сроки и сервис</p>
            <p className="font-sans text-body-readable leading-[1.85] text-stone text-pretty">
              Ориентировочный срок: <span className="text-graphite">{editorial.leadTime}</span>. Точные даты фиксируются
              после согласования размера и внесения предоплаты.
            </p>
            <Button href="/contact" variant="outline" className="px-8">
              Связаться с ателье
            </Button>
          </div>
        ) : null}
      </motion.div>
    </div>
  );
}
