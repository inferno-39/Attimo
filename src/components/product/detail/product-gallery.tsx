"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { ProductImage } from "@/types/product";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { BLUR_DATA_URL } from "@/lib/image-placeholder";
import { EASE_LUXURY, MOTION_DURATION } from "@/lib/motion";
import { cn } from "@/utils/cn";

type ProductGalleryProps = {
  images: ProductImage[];
  productName: string;
  className?: string;
};

export function ProductGallery({ images, productName, className }: ProductGalleryProps) {
  const [active, setActive] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const reduce = usePrefersReducedMotion();
  const lastTap = useRef(0);
  const main = images[active] ?? images[0];

  const onMainPointerUp = useCallback(() => {
    const now = Date.now();
    if (now - lastTap.current < 320) {
      setZoomed((z) => !z);
      lastTap.current = 0;
    } else {
      lastTap.current = now;
    }
  }, []);

  if (!main) {
    return (
      <div
        className={cn("aspect-[3/4] min-h-[min(60vh,640px)] w-full bg-mist/50 border border-line/80", className)}
        aria-hidden
      />
    );
  }

  const scale = reduce ? 1 : zoomed ? 1.06 : 1;
  const mainPriority = active === 0;

  return (
    <div
      className={cn(
        "flex flex-col gap-3 sm:gap-4 lg:grid lg:grid-cols-[minmax(72px,88px)_1fr] lg:items-start lg:gap-6",
        className,
      )}
    >
      <div className="order-1 lg:order-2 lg:min-w-0">
        <div
          className="group relative w-full overflow-hidden bg-mist/25 min-h-[min(52vh,520px)] sm:min-h-[min(56vh,580px)] lg:min-h-[min(74vh,820px)]"
          onPointerUp={onMainPointerUp}
        >
          <motion.div
            className="absolute inset-0 cursor-zoom-in"
            animate={{ scale }}
            transition={{ duration: reduce ? 0.01 : MOTION_DURATION.md, ease: EASE_LUXURY }}
            style={{ transformOrigin: "center center" }}
            aria-pressed={zoomed}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setZoomed((z) => !z);
              }
            }}
            aria-label={zoomed ? "Уменьшить изображение" : "Увеличить изображение двойным нажатием"}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={main.url}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: reduce ? 0.01 : MOTION_DURATION.sm, ease: EASE_LUXURY }}
                className="absolute inset-0"
              >
                <Image
                  src={main.url}
                  alt={main.alt || productName}
                  fill
                  priority={mainPriority}
                  loading={mainPriority ? undefined : "lazy"}
                  placeholder="blur"
                  blurDataURL={BLUR_DATA_URL}
                  draggable={false}
                  className={cn(
                    "object-cover select-none transition-transform duration-700 ease-out",
                    !reduce && !zoomed && "lg:group-hover:scale-[1.02]",
                  )}
                  sizes="(min-width: 1024px) 58vw, 100vw"
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>
          <p className="pointer-events-none absolute bottom-3 left-3 hidden rounded-sm bg-canvas/75 px-2 py-1 font-sans text-[9px] uppercase tracking-[0.2em] text-ash backdrop-blur-xs max-w-[14rem] sm:bottom-4 sm:left-4 sm:block">
            Двойное нажатие — масштаб
          </p>
        </div>
      </div>

      <div
        className={cn(
          "order-2 lg:order-1 flex flex-row gap-2 overflow-x-auto pb-1 lg:flex lg:flex-col lg:overflow-visible lg:pb-0 lg:gap-3 shrink-0 snap-x snap-mandatory lg:snap-none lg:w-full",
        )}
        role="tablist"
        aria-label="Миниатюры галереи"
      >
        {images.map((img, idx) => (
          <button
            key={img.url + idx}
            type="button"
            role="tab"
            aria-selected={idx === active}
            onClick={() => {
              setActive(idx);
              setZoomed(false);
            }}
            className={cn(
              "relative h-[68px] w-[68px] shrink-0 snap-start overflow-hidden border transition-colors duration-480 touch-manipulation sm:h-20 sm:w-20",
              idx === active ? "border-graphite" : "border-transparent hover:border-line",
            )}
            aria-label={`Фото ${idx + 1}`}
          >
            <Image
              src={img.url}
              alt=""
              fill
              className="object-cover"
              sizes="80px"
              loading="lazy"
              placeholder="blur"
              blurDataURL={BLUR_DATA_URL}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
