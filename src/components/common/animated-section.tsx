"use client";

import { motion } from "framer-motion";
import type { PropsWithChildren } from "react";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { EASE_LUXURY, MOTION_DURATION } from "@/lib/motion";
import { cn } from "@/utils/cn";

type AnimatedSectionProps = PropsWithChildren<{
  className?: string;
  id?: string;
}>;

export function AnimatedSection({ children, className, id }: AnimatedSectionProps) {
  const reduce = usePrefersReducedMotion();
  return (
    <motion.section
      id={id}
      initial={reduce ? undefined : { opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px", amount: 0.15 }}
      transition={{ duration: MOTION_DURATION.lg, ease: EASE_LUXURY }}
      className={cn(className)}
    >
      {children}
    </motion.section>
  );
}
