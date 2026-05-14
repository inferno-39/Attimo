"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import type { PropsWithChildren } from "react";
import { fadeUp } from "@/lib/animations/variants";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { EASE_LUXURY, MOTION_DURATION } from "@/lib/motion";
import { cn } from "@/utils/cn";

type FadeInProps = PropsWithChildren<{
  delay?: number;
  className?: string;
}> &
  Omit<HTMLMotionProps<"div">, "children" | "className">;

export function FadeIn({ children, delay = 0, className, ...rest }: FadeInProps) {
  const reduce = usePrefersReducedMotion();
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: reduce ? 0.01 : MOTION_DURATION.lg, delay: reduce ? 0 : delay, ease: EASE_LUXURY }}
      className={cn(className)}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
