import type { Variants } from "framer-motion";
import { EASE_LUXURY, MOTION_DURATION } from "@/lib/motion";

export const easeOut = EASE_LUXURY;

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: MOTION_DURATION.md, ease: easeOut },
  },
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: MOTION_DURATION.lg, ease: easeOut },
  },
};

export const staggerChildren: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.06 },
  },
};

export const pageTransition = {
  initial: { opacity: 0, y: 14 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: MOTION_DURATION.sm, ease: easeOut },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: { duration: MOTION_DURATION.xs, ease: easeOut },
  },
};
