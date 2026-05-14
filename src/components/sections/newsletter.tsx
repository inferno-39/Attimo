"use client";

import { useState } from "react";
import { Container } from "@/components/layout/container";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/common/fade-in";
import { SectionTitle } from "@/components/ui/section-title";

export function Newsletter() {
  const [sent, setSent] = useState(false);

  return (
    <section className="bg-graphite text-canvas">
      <Container size="wide" className="py-section md:py-28">
        <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-24">
          <FadeIn>
            <SectionTitle
              eyebrow="Письма"
              title="Редкие открытые слоты"
              description="Мы не отправляем «скидочные буллетени». Иногда — короткие заметки о процессе, камнях и окнах для приватной примерки. Один-два раза в месяц."
              surface="dark"
            />
          </FadeIn>
          <FadeIn delay={0.08}>
            {sent ? (
              <p className="font-serif text-title-md text-gold-soft lg:pb-2">
                Вы в списке. Спокойный привет из ателье.
              </p>
            ) : (
              <form
                className="flex max-w-md flex-col gap-8 lg:ml-auto lg:max-w-sm"
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
                    className="border-canvas/20 text-canvas placeholder:text-stone/80 focus:border-gold/80 placeholder:uppercase"
                  />
                </div>
                <Button
                  type="submit"
                  variant="inverted"
                  className="w-full border-canvas/35 uppercase hover:border-canvas sm:w-auto"
                >
                  Подписаться
                </Button>
              </form>
            )}
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
