"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { SITE_TAGLINE } from "@/constants/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line/60">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(196,165,116,0.14),transparent_42%),radial-gradient(circle_at_88%_10%,rgba(232,230,225,0.9),transparent_45%)]" />
      <Container className="relative py-24 sm:py-30 lg:py-36">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-sans text-caption-wide uppercase tracking-[0.26em] text-ash"
          >
            Эксклюзивная коллекция · ручная работа
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 font-serif text-display-xl text-graphite"
          >
            Моменты, которые остаются на коже.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 font-serif text-[1.35rem] sm:text-[1.5rem] leading-relaxed text-stone"
          >
            {SITE_TAGLINE}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="mt-12 flex flex-wrap gap-4"
          >
            <Button href="/catalog" className="px-8">
              Смотреть изделия
            </Button>
            <Button href="/about" variant="outline" className="px-8">
              Философия бренда
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
