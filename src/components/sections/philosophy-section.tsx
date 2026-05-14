"use client";

import { AnimatedSection } from "@/components/common/animated-section";
import { Container } from "@/components/layout/container";
import { SITE_TAGLINE } from "@/constants/site";

export function PhilosophySection() {
  return (
    <AnimatedSection className="border-b border-line/50 bg-canvas">
      <Container size="wide" className="py-section md:py-30">
        <div className="mx-auto max-w-4xl text-center px-1 sm:px-0">
          <p className="font-sans text-caption-wide uppercase tracking-[0.32em] text-ash">Философия</p>
          <figure className="mt-14 md:mt-20">
            <blockquote className="relative font-serif text-[clamp(1.5rem,3.2vw,2.35rem)] leading-[1.45] text-graphite text-balance">
              <span
                className="absolute -left-4 top-0 hidden h-full w-px bg-gold/40 md:-left-10 md:block"
                aria-hidden
              />
              Украшение — не украшение витрины. Это тихая договорённость с памятью: что‑то, что вы надеваете,
              когда хотите помнить не громко, а точно.
            </blockquote>
            <figcaption className="mx-auto mt-12 max-w-2xl font-serif text-body-readable text-stone md:mt-16 md:text-serif-lead">
              {SITE_TAGLINE}
            </figcaption>
          </figure>
        </div>
      </Container>
    </AnimatedSection>
  );
}
