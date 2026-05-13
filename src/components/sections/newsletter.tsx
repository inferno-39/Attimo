"use client";

import { useState } from "react";
import { Container } from "@/components/layout/container";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/common/fade-in";

export function Newsletter() {
  const [sent, setSent] = useState(false);

  return (
    <section className="bg-graphite text-canvas">
      <Container className="py-20 grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-24 items-start">
        <FadeIn className="space-y-4">
          <p className="font-sans text-caption-wide uppercase tracking-[0.26em] text-ash">
            Интимная рассылка
          </p>
          <h2 className="font-serif text-display-lg tracking-tight">Редкие открытые слоты</h2>
          <p className="font-sans text-[15px] leading-relaxed text-stone max-w-xl">
            Мы не отправляем «скидочные буллетени». Иногда делимся маленькими историями о процессе, новых
            камнях и окнами для приватной примерки. Один-два письма в месяц.
          </p>
        </FadeIn>
        <FadeIn delay={0.06}>
          {sent ? (
            <p className="font-serif text-title-md mt-10 text-gold-soft">Вы в списке. Спокойный привет из ателье.</p>
          ) : (
            <form
              className="flex flex-col gap-6 mt-6"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <div>
                <label htmlFor="nl-email" className="sr-only">
                  Электронная почта
                </label>
                <Input
                  id="nl-email"
                  required
                  type="email"
                  placeholder="эл. почта"
                  className="border-canvas/25 text-canvas placeholder:text-stone focus:border-gold placeholder:uppercase"
                />
              </div>
              <Button type="submit" variant="ghost" className="self-start border border-canvas/40 hover:bg-canvas hover:text-graphite uppercase">
                Подписаться
              </Button>
            </form>
          )}
        </FadeIn>
      </Container>
    </section>
  );
}
