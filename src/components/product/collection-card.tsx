"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { BLUR_DATA_URL } from "@/lib/image-placeholder";
import { EASE_LUXURY, MOTION_DURATION } from "@/lib/motion";

type CollectionCardProps = {
  href: string;
  src: string;
  alt: string;
  title: string;
  subtitle?: string;
  className?: string;
  aspectClassName?: string;
};

export function CollectionCard({
  href,
  src,
  alt,
  title,
  subtitle,
  className,
  aspectClassName = "aspect-[4/5]",
}: CollectionCardProps) {
  const reduce = usePrefersReducedMotion();

  return (
    <Link href={href} className={cn("group block", className)}>
      <div className={cn("relative overflow-hidden bg-mist/30", aspectClassName)}>
        <motion.div
          className="absolute inset-0"
          whileHover={reduce ? undefined : { scale: 1.04 }}
          transition={{ duration: MOTION_DURATION.lg, ease: EASE_LUXURY }}
        >
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 45vw, 100vw"
            placeholder="blur"
            blurDataURL={BLUR_DATA_URL}
            loading="lazy"
          />
        </motion.div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-graphite/55 via-graphite/10 to-transparent opacity-80 transition-opacity duration-700 group-hover:opacity-95" />
        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 md:p-10">
          <p className="font-serif text-xl tracking-tight text-canvas sm:text-2xl md:text-3xl">{title}</p>
          {subtitle ? (
            <p className="mt-3 font-sans text-caption-wide uppercase tracking-[0.26em] text-canvas/70">{subtitle}</p>
          ) : null}
        </div>
      </div>
    </Link>
  );
}
