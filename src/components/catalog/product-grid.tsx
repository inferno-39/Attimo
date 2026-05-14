"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { Product } from "@/types/product";
import { ProductCard } from "@/components/product/product-card";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { EASE_LUXURY, MOTION_DURATION } from "@/lib/motion";

type ProductGridProps = {
  products: Product[];
};

export function ProductGrid({ products }: ProductGridProps) {
  const reduce = usePrefersReducedMotion();

  return (
    <motion.div
      layout
      className="grid gap-x-6 gap-y-14 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-18 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-22"
    >
      <AnimatePresence mode="popLayout" initial={false}>
        {products.map((p, i) => (
          <motion.div
            key={p.id}
            layout
            initial={reduce ? undefined : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -12 }}
            transition={{
              layout: { duration: MOTION_DURATION.sm, ease: EASE_LUXURY },
              opacity: { duration: MOTION_DURATION.sm, delay: reduce ? 0 : i * 0.035 },
              y: { duration: MOTION_DURATION.sm, delay: reduce ? 0 : i * 0.035 },
            }}
          >
            <ProductCard product={p} index={i} variant="catalog" withReveal={false} />
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
}
