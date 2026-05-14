"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/common/animated-section";
import { Container } from "@/components/layout/container";
import { SectionTitle } from "@/components/ui/section-title";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { BLUR_DATA_URL } from "@/lib/image-placeholder";
import { EASE_LUXURY, MOTION_DURATION } from "@/lib/motion";

const TILES = [
  {
    src: "https://images.unsplash.com/photo-1573408309883-9379c8366fcd?auto=format&fit=crop&w=1200&q=85",
    alt: "Деталь украшения",
    span: "md:col-span-2 md:row-span-2",
    aspect: "aspect-square md:aspect-auto md:min-h-[min(72vh,640px)]",
  },
  {
    src: "https://images.unsplash.com/photo-1567016566571-ec50cc83acec?auto=format&fit=crop&w=900&q=85",
    alt: "Камни крупным планом",
    span: "md:col-span-1",
    aspect: "aspect-[4/5]",
  },
  {
    src: "https://images.unsplash.com/photo-1522312346379-d9712c972364?auto=format&fit=crop&w=900&q=85",
    alt: "Свет в студии",
    span: "md:col-span-1",
    aspect: "aspect-[4/5]",
  },
  {
    src: "https://images.unsplash.com/photo-1578507065273-0379d4c5d5c9?auto=format&fit=crop&w=1200&q=85",
    alt: "Кулон на ткани",
    span: "md:col-span-2",
    aspect: "aspect-[16/10]",
  },
] as const;

export function EditorialGallerySection() {
  const reduce = usePrefersReducedMotion();

  return (
    <AnimatedSection className="border-b border-line/50 bg-canvas">
      <Container size="wide" className="py-section md:py-30">
        <SectionTitle
          eyebrow="Альбом"
          title="Близко к коже и свету"
          description="Кадры без «продающего» глянца — только материал, тень и пауза между движениями руки."
          className="max-w-2xl pb-14 md:pb-20"
        />
        <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:grid-rows-2 md:gap-3">
          {TILES.map((tile, i) => (
            <motion.div
              key={tile.src}
              initial={reduce ? undefined : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5%" }}
              transition={{ delay: i * 0.05, duration: MOTION_DURATION.md, ease: EASE_LUXURY }}
              className={`relative overflow-hidden bg-mist/30 ${tile.span} ${tile.aspect}`}
            >
              <motion.div
                className="absolute inset-0"
                whileHover={reduce ? undefined : { scale: 1.03 }}
                transition={{ duration: MOTION_DURATION.lg, ease: EASE_LUXURY }}
              >
                <Image
                  src={tile.src}
                  alt={tile.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 25vw, 50vw"
                  placeholder="blur"
                  blurDataURL={BLUR_DATA_URL}
                  priority={i === 0}
                  loading={i === 0 ? undefined : "lazy"}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </Container>
    </AnimatedSection>
  );
}
