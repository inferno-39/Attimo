"use client";

import { Container } from "@/components/layout/container";
import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { SectionTitle } from "@/components/ui/section-title";

const quotes = [
  {
    quote:
      "Не ожидала, что кольцо может быть таким тихим. Оно просто есть — каждый день напоминает о нашем утре на набережной.",
    author: "Алина В.",
    place: "закрытый выпуск",
  },
  {
    quote:
      "Команда приняла мой запрос почти как терапию: слушали историю прежде чем брать камень. Никакого давления моды.",
    author: "Марат К.",
    place: "индивидуальный заказ",
  },
  {
    quote:
      "Минимализм здесь дорогой: детали, которые видишь только вблизи. Люди спрашивают «где нашли» — делюсь с осторожностью.",
    author: "Софья Л.",
    place: "сережки из лимитированной линии",
  },
];

export function Testimonials() {
  const reduce = usePrefersReducedMotion();

  return (
    <section className="border-b border-line/50 bg-ivory/15">
      <Container size="wide" className="py-section md:py-30">
        <SectionTitle
          eyebrow="Отношение"
          title="Слова после примерки"
          className="max-w-2xl pb-16 md:pb-20"
        />
        <div className="grid gap-12 md:grid-cols-3 md:gap-10 lg:gap-14">
          {quotes.map((q, idx) => (
            <motion.figure
              key={q.author}
              initial={reduce ? undefined : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8%" }}
              transition={{ delay: idx * 0.08, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col border-t border-graphite/15 pt-10"
            >
              <blockquote className="flex-grow font-serif text-[1.05rem] leading-[1.65] text-graphite md:text-[1.125rem]">
                «{q.quote}»
              </blockquote>
              <figcaption className="mt-10">
                <p className="font-sans text-caption-wide uppercase tracking-[0.22em] text-stone">{q.author}</p>
                <p className="mt-2 font-sans text-[12px] text-ash">{q.place}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
