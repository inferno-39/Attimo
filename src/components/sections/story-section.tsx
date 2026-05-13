"use client";

import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/common/fade-in";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function StorySection() {
  return (
    <section className="border-b border-line/60 bg-canvas">
      <Container className="grid gap-14 lg:grid-cols-[1fr_1.1fr] items-center py-22">
        <FadeIn className="order-2 lg:order-1 space-y-6">
          <p className="font-sans text-caption-wide uppercase tracking-[0.26em] text-ash">Ателье · ремесло</p>
          <h2 className="font-serif text-display-lg text-graphite">Не украшение — отметина памяти</h2>
          <div className="space-y-4 font-sans text-[15px] leading-relaxed text-stone max-w-xl">
            <p>
              Мы не стремимся к «шуку на витрине». Каждый проект собирают две-три руки основателя —
              огранка, финиш, посадка камня. Темп медленный, потому что момент для вас не должен звучать
              как спешка конвейера.
            </p>
            <p>
              Есть возможность тонкой персонализации: инициалы, дата, маленький символ только для вас двоих —
              секрет между металлом и кожей.
            </p>
          </div>
          <Button href="/about" variant="outline" className="mt-6 px-8">
            Прочесть нашу историю
          </Button>
        </FadeIn>
        <FadeIn delay={0.08} className="order-1 lg:order-2 relative">
          <Link
            href="/about"
            className="block aspect-[4/5] bg-gradient-to-br from-mist via-ivory to-canvas relative overflow-hidden group"
          >
            <span className="absolute inset-[18%] border border-gold/25 group-hover:border-gold/55 transition-colors duration-560" />
            <span className="absolute bottom-16 left-10 right-10 font-serif text-display-lg text-graphite opacity-85">
              Attimo
            </span>
            <p className="absolute bottom-8 left-10 right-14 font-sans text-caption-wide uppercase tracking-[0.22em] text-ash">
              Визуальное молчание · чистота линии
            </p>
          </Link>
        </FadeIn>
      </Container>
    </section>
  );
}
