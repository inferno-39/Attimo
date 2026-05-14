"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { NAVBAR_HEIGHT_PX } from "@/components/layout/navbar";
import { SITE_TAGLINE } from "@/constants/site";
import { EASE_LUXURY, MOTION_DURATION } from "@/lib/motion";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1617038260897-dd50e7f5e5c2?auto=format&fit=crop&w=2400&q=85";

export function Hero() {
  const nav = NAVBAR_HEIGHT_PX;

  return (
    <section
      className="relative min-h-[100dvh]"
      style={{ marginTop: -nav, paddingTop: nav }}
    >
      <div className="absolute inset-0">
        <Image
          src={HERO_IMAGE}
          alt="Крупный план золотого кольца на мраморе"
          fill
          priority
          className="object-cover object-[center_42%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-graphite/48" aria-hidden />
        <div
          className="absolute inset-0 bg-gradient-to-b from-graphite/55 via-transparent to-graphite/80"
          aria-hidden
        />
      </div>

      <Container
        size="wide"
        className="relative z-10 flex min-h-[calc(100dvh-var(--nav-h))] flex-col justify-end pb-[max(2.5rem,env(safe-area-inset-bottom))] pt-12 sm:pb-16 md:justify-center md:pb-24 md:pt-0"
      >
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: MOTION_DURATION.lg, ease: EASE_LUXURY }}
            className="font-sans text-caption-wide uppercase tracking-[0.3em] text-canvas/75"
          >
            Авторские украшения · Санкт‑Петербург
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: MOTION_DURATION.xl, delay: 0.1, ease: EASE_LUXURY }}
            className="mt-6 font-serif text-display-2xl text-canvas text-balance sm:mt-8 md:mt-10"
          >
            Моменты, которые остаются на коже.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: MOTION_DURATION.lg, delay: 0.2, ease: EASE_LUXURY }}
            className="mt-6 max-w-2xl font-serif text-serif-lead text-canvas/88 sm:mt-8"
          >
            {SITE_TAGLINE}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: MOTION_DURATION.lg, delay: 0.32, ease: EASE_LUXURY }}
            className="mt-10 flex flex-col gap-3 sm:mt-12 sm:flex-row sm:flex-wrap sm:gap-4"
          >
            <Button href="/catalog" variant="inverted" className="min-h-[48px] px-10 py-3 touch-manipulation">
              Смотреть изделия
            </Button>
            <Button href="/about" variant="inverted" className="min-h-[48px] border-canvas/35 px-10 py-3 touch-manipulation hover:border-canvas">
              О бренде
            </Button>
          </motion.div>
        </div>
      </Container>

      <div
        className="pointer-events-none absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 pb-[env(safe-area-inset-bottom)] md:bottom-10 md:block"
        aria-hidden
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 1.15, duration: MOTION_DURATION.md, ease: EASE_LUXURY }}
          className="h-14 w-px bg-gradient-to-b from-canvas/0 via-canvas/60 to-canvas/0"
        />
      </div>
    </section>
  );
}
