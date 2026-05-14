"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/common/animated-section";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

const CRAFT_IMAGE =
  "https://images.unsplash.com/photo-1515564615256-cef770033f9f?auto=format&fit=crop&w=1600&q=85";

export function CraftStorySection() {
  const reduce = usePrefersReducedMotion();

  return (
    <AnimatedSection className="border-b border-line/50 bg-canvas">
      <Container size="wide" className="py-section md:py-30">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Link href="/about" className="group relative block overflow-hidden bg-mist/40">
            <motion.div
              className="relative aspect-[4/5] w-full md:aspect-[5/6]"
              whileHover={reduce ? undefined : { scale: 1.02 }}
              transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src={CRAFT_IMAGE}
                alt="Руки мастера и инструмент"
                fill
                className="object-cover transition-[filter] duration-700 group-hover:brightness-[0.92]"
                sizes="(min-width: 1024px) 46vw, 100vw"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-graphite/25 to-transparent opacity-60" />
            </motion.div>
            <p className="pointer-events-none absolute bottom-8 left-8 font-sans text-caption-wide uppercase tracking-[0.28em] text-canvas/80">
              Ателье
            </p>
          </Link>

          <div className="space-y-8 lg:py-6">
            <p className="font-sans text-caption-wide uppercase tracking-[0.28em] text-ash">Ремесло</p>
            <h2 className="font-serif text-display-lg text-graphite text-balance">
              Руки помнят больше, чем успевает сказать язык
            </h2>
            <div className="space-y-5 font-sans text-[15px] leading-[1.75] text-stone md:text-[16px]">
              <p>
                Огранка, посадка, финиш — без спешки и без «продажного» блеска. Мы работаем так, будто каждое изделие
                уйдёт к человеку, которого знаем по имени.
              </p>
              <p>
                Ваш момент может стать частью формы: инициалы, дата, символ, который видите только вы. Это не кастомизация
                ради галочки — это интимная правка кольца под вашу историю.
              </p>
            </div>
            <Button href="/about" variant="outline" className="mt-4 px-10">
              История ателье
            </Button>
          </div>
        </div>
      </Container>
    </AnimatedSection>
  );
}
