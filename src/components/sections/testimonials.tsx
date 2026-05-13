"use client";

import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/common/fade-in";
import { motion } from "framer-motion";

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
  return (
    <section className="border-b border-line/60 bg-canvas">
      <Container className="py-22">
        <FadeIn className="max-w-2xl pb-14">
          <p className="font-sans text-caption-wide uppercase tracking-[0.26em] text-ash">Отношение</p>
          <h2 className="mt-4 font-serif text-display-lg text-graphite">Слова после примерки</h2>
        </FadeIn>
        <div className="grid gap-10 md:grid-cols-3">
          {quotes.map((q, idx) => (
            <motion.figure
              key={q.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: idx * 0.06, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="border border-line/80 bg-canvas px-8 py-10 shadow-[0_18px_50px_rgba(28,28,28,0.05)] flex flex-col"
            >
              <blockquote className="font-serif text-[1.125rem] leading-relaxed text-graphite flex-grow">
                «{q.quote}»
              </blockquote>
              <figcaption className="mt-8 pt-6 border-t border-line/70">
                <p className="font-sans text-caption-wide uppercase tracking-[0.2em] text-stone">{q.author}</p>
                <p className="mt-2 font-sans text-[12px] text-ash">{q.place}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
