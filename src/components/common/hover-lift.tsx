"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import type { PropsWithChildren } from "react";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

type HoverLiftProps = PropsWithChildren<HTMLMotionProps<"div">>;

export function HoverLift({ children, ...rest }: HoverLiftProps) {
  const reduce = usePrefersReducedMotion();
  return (
    <motion.div
      whileHover={reduce ? {} : { y: -4 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
