"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { ProductImage } from "@/types/product";
import { cn } from "@/utils/cn";

type ProductGalleryProps = {
  images: ProductImage[];
  productName: string;
};

export function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [active, setActive] = useState(0);
  const main = images[active] ?? images[0];

  if (!main) {
    return (
      <div className="aspect-[3/4] w-full bg-mist/50 border border-line/80" aria-hidden />
    );
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[88px_1fr]">
      <div className="flex lg:flex-col gap-3 order-2 lg:order-1">
        {images.map((img, idx) => (
          <button
            key={img.url + idx}
            type="button"
            onClick={() => setActive(idx)}
            className={cn(
              "relative h-20 w-20 overflow-hidden border transition-colors duration-480",
              idx === active ? "border-graphite" : "border-transparent hover:border-line",
            )}
            aria-label={`Показать фото ${idx + 1}`}
          >
            <Image src={img.url} alt="" fill className="object-cover" sizes="80px" />
          </button>
        ))}
      </div>
      <div className="relative order-1 lg:order-2 aspect-[3/4] w-full overflow-hidden bg-mist/30">
        <AnimatePresence mode="wait">
          <motion.div
            key={main.url}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={main.url}
              alt={main.alt || productName}
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
