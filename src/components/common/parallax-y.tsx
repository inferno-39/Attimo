"use client";

import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import type { PropsWithChildren } from "react";
import { useRef } from "react";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

export function ParallaxY({
  children,
  amount = 30,
}: PropsWithChildren<{ amount?: number }>) {
  const ref = useRef<HTMLDivElement | null>(null);
  const reduce = usePrefersReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const raw = useTransform(scrollYProgress, [0, 1], [amount, -amount]);
  const y = useSpring(raw, { stiffness: 120, damping: 24, mass: 0.45 });
  const fallback = useMotionValue(0);

  return (
    <div ref={ref} className="relative overflow-hidden">
      <motion.div style={{ y: reduce ? fallback : y }}>{children}</motion.div>
    </div>
  );
}
