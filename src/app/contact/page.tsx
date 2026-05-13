import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Container } from "@/components/layout/container";
import { Input } from "@/components/ui/input";
import { TextArea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/common/fade-in";

export const metadata: Metadata = {
  title: "Контакты",
  description: "Приватный просмотр, индивидуальная консультация и связь со студией Attimo.",
};

export default function ContactPage() {
  return (
    <Container className="py-16 lg:py-22 grid gap-16 lg:grid-cols-[1fr_1.05fr]">
      <div className="space-y-10">
        <FadeIn>
          <p className="font-sans text-caption-wide uppercase tracking-[0.26em] text-ash">Связь</p>
          <h1 className="mt-6 font-serif text-display-xl text-graphite">Контакты ателье</h1>
          <p className="mt-8 font-sans text-[15px] leading-relaxed text-stone max-w-md">
            Мы отвечаем неспешно — качество реплики важнее мгновенного чатбота. Оставьте запрос или напишите
            напрямую; для конфиденциальных заказов используйте указанную почту.
          </p>
        </FadeIn>
        <FadeIn delay={0.08} className="space-y-5 font-sans text-[15px] text-stone">
          <div>
            <p className="text-caption-wide uppercase tracking-[0.22em] text-ash pb-2">Студия</p>
            <p>Санкт‑Петербург, наб. реки Мойки · адрес сообщается при подтверждении записи</p>
          </div>
          <div>
            <p className="text-caption-wide uppercase tracking-[0.22em] text-ash pb-2">Почта</p>
            <p>quiet@attimo.studio — приватные запросы</p>
          </div>
          <div>
            <p className="text-caption-wide uppercase tracking-[0.22em] text-ash pb-2">Часы посещений</p>
            <p>Вт‑Сб · 11:00 — 18:00 · исключительно по предварительной брони</p>
          </div>
        </FadeIn>
      </div>
      <FadeIn delay={0.1}>
        <form className="border border-line/70 bg-canvas p-10 space-y-7 shadow-[0_24px_70px_rgba(28,28,28,0.06)]">
          <Field label="Имя" htmlFor="c-name">
            <Input id="c-name" placeholder="Имя" required />
          </Field>
          <Field label="Эл. почта" htmlFor="c-email">
            <Input id="c-email" type="email" placeholder="эл. почта" required />
          </Field>
          <Field label="Сообщение" htmlFor="c-msg">
            <TextArea id="c-msg" placeholder="Какой запрос хотите сохранить в металле?" />
          </Field>
          <Button type="submit" className="w-full sm:w-auto px-14">
            Отправить
          </Button>
        </form>
      </FadeIn>
    </Container>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="block font-sans text-caption-wide uppercase tracking-[0.22em] text-stone pb-3"
      >
        {label}
      </label>
      {children}
    </div>
  );
}
