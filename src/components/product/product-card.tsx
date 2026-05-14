"use client";

import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types/product";
import { FadeIn } from "@/components/common/fade-in";
import { HoverLift } from "@/components/common/hover-lift";
import { motion } from "framer-motion";
import { BLUR_DATA_URL } from "@/lib/image-placeholder";
import { EASE_LUXURY, MOTION_DURATION } from "@/lib/motion";
import { formatPriceRub } from "@/lib/format-price";
import { cn } from "@/utils/cn";

export type ProductCardVariant = "default" | "featured" | "catalog";

type ProductCardProps = {
  product: Product;
  index?: number;
  variant?: ProductCardVariant;
  /** Скрыть scroll-reveal (когда сетка сама анимирует появление) */
  withReveal?: boolean;
  /** LCP: только для первого крупного кадра на главной */
  imagePriority?: boolean;
};

export function ProductCard({
  product,
  index = 0,
  variant = "default",
  withReveal = true,
  imagePriority = false,
}: ProductCardProps) {
  const cover = product.images[0];
  const featured = variant === "featured";
  const catalog = variant === "catalog";

  const inner = (
    <HoverLift>
      <Link href={`/product/${product.slug}`} className="group block touch-manipulation">
        <div
          className={cn(
            "relative overflow-hidden bg-mist/40",
            catalog && "aspect-[4/5] min-h-[260px] sm:min-h-[300px]",
            featured &&
              "aspect-[16/11] min-h-[220px] sm:min-h-[260px] md:aspect-[21/10] md:min-h-[300px]",
            !catalog && !featured && "aspect-[3/4] min-h-[240px] sm:min-h-[280px]",
          )}
        >
          {cover ? (
            <motion.div
              className="h-full w-full"
              whileHover={{ scale: catalog ? 1.035 : 1.028 }}
              transition={{ duration: catalog ? MOTION_DURATION.lg : MOTION_DURATION.md, ease: EASE_LUXURY }}
            >
              <Image
                src={cover.url}
                alt={cover.alt}
                fill
                priority={imagePriority}
                loading={imagePriority ? undefined : "lazy"}
                placeholder="blur"
                blurDataURL={BLUR_DATA_URL}
                sizes={
                  catalog
                    ? "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    : featured
                      ? "(min-width: 1024px) 50vw, 100vw"
                      : "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                }
                className="object-cover"
              />
            </motion.div>
          ) : null}
          <div
            className={cn(
              "pointer-events-none absolute inset-0 bg-gradient-to-t from-graphite/35 via-transparent to-transparent opacity-0 transition-opacity duration-700 ease-out group-hover:opacity-100",
              catalog && "from-graphite/40",
            )}
          />
        </div>
        <div className={cn("space-y-2", featured ? "mt-6 sm:mt-8" : catalog ? "mt-5 sm:mt-7" : "mt-5 sm:mt-6")}>
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
            <h3
              className={cn(
                "font-serif tracking-tight text-graphite",
                catalog && "text-[1.15rem] sm:text-[1.3rem]",
                featured && "text-[1.3rem] sm:text-2xl md:text-[1.75rem]",
                !catalog && !featured && "text-title-md",
              )}
            >
              {product.name}
            </h3>
            <span className="font-sans text-[10px] uppercase tracking-[0.16em] text-ash sm:text-[11px]">
              {formatPriceRub(product.priceRub)}
            </span>
          </div>
          {product.material ? (
            <p
              className={cn(
                "font-sans leading-relaxed text-stone",
                catalog ? "text-[11px] uppercase tracking-[0.14em] text-ash/90 sm:text-[12px]" : "text-body-readable",
              )}
            >
              {product.material}
            </p>
          ) : null}
          {!catalog && product.subtitle ? (
            <p className="font-sans text-[13px] leading-relaxed text-stone md:text-body-readable">{product.subtitle}</p>
          ) : null}
        </div>
      </Link>
    </HoverLift>
  );

  if (!withReveal) return inner;
  return <FadeIn delay={index * 0.08}>{inner}</FadeIn>;
}
