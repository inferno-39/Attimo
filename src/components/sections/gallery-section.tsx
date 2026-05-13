"use client";

import Image from "next/image";
import { Container } from "@/components/layout/container";
import { ParallaxY } from "@/components/common/parallax-y";
import { FadeIn } from "@/components/common/fade-in";

const shots = [
  {
    src: "https://images.unsplash.com/photo-1515564615256-cef770033f9f?auto=format&fit=crop&w=900&q=80",
    alt: "Ювелирный ритуал: руки и инструмент",
    ratio: "aspect-[4/5]",
    wide: false,
  },
  {
    src: "https://images.unsplash.com/photo-1522312346379-d9712c972364?auto=format&fit=crop&w=1400&q=80",
    alt: "Спокойный свет студии над металлическими деталями",
    ratio: "aspect-[16/9]",
    wide: true,
  },
];

export function GallerySection() {
  return (
    <section className="border-b border-line/60 bg-ivory/15">
      <Container className="py-22 space-y-12">
        <FadeIn className="max-w-3xl space-y-4">
          <p className="font-sans text-caption-wide uppercase tracking-[0.26em] text-ash">Студийный альбом</p>
          <h2 className="font-serif text-display-lg text-graphite">Свет без крика</h2>
          <p className="font-sans text-[15px] text-stone leading-relaxed">
            Визуальная тишина студии позволяет фактуре дышать. Без фильтров «глэм» и без давления SALE —
            только наблюдение за тем, как украшение появляется из спокойного ритма дня ремесленника.
          </p>
        </FadeIn>
        <div className="grid gap-10 lg:grid-cols-2">
          {shots.map((shot, idx) => (
            <ParallaxY key={shot.src} amount={idx === 0 ? 26 : 18}>
              <div className={`relative overflow-hidden ${shot.ratio} bg-mist/40`}>
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 46vw, 100vw"
                />
              </div>
            </ParallaxY>
          ))}
        </div>
      </Container>
    </section>
  );
}
