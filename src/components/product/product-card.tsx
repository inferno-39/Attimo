"use client";

import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types/product";
import { FadeIn } from "@/components/common/fade-in";
import { HoverLift } from "@/components/common/hover-lift";
import { motion } from "framer-motion";

function formatPrice(rub: number) {
  return new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
    maximumFractionDigits: 0,
  }).format(rub);
}

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const cover = product.images[0];
  return (
    <FadeIn delay={index * 0.08}>
      <HoverLift>
        <Link href={`/product/${product.slug}`} className="group block">
          <div className="relative aspect-[3/4] overflow-hidden bg-mist/40">
            {cover ? (
              <motion.div
                className="h-full w-full"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              >
                <Image
                  src={cover.url}
                  alt={cover.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </motion.div>
            ) : null}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-graphite/30 via-transparent to-transparent opacity-0 transition-opacity duration-560 group-hover:opacity-100" />
          </div>
          <div className="mt-6 space-y-2">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="font-serif text-title-md text-graphite tracking-tight">{product.name}</h3>
              <span className="font-sans text-[12px] tracking-[0.14em] text-ash uppercase">
                {formatPrice(product.priceRub)}
              </span>
            </div>
            {product.subtitle ? (
              <p className="font-sans text-[13px] text-stone leading-relaxed">{product.subtitle}</p>
            ) : null}
          </div>
        </Link>
      </HoverLift>
    </FadeIn>
  );
}
