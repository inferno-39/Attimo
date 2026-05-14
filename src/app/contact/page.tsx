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
    <Container
      size="wide"
      className="grid gap-12 py-12 sm:gap-16 sm:py-16 md:grid-cols-[1fr_1.05fr] md:gap-20 md:py-section lg:py-22"
    >
      <div className="space-y-8 sm:space-y-10">
        <FadeIn>
          <p className="font-sans text-caption-wide uppercase tracking-[0.26em] text-ash">Связь</p>
          <h1 className="mt-4 font-serif text-display-xl text-graphite text-balance sm:mt-6">Контакты ателье</h1>
          <p className="mt-6 max-w-md font-sans text-body-readable text-stone sm:mt-8">
            Мы отвечаем неспешно — качество реплики важнее мгновенного чатбота. Оставьте запрос или напишите
            напрямую; для конфиденциальных заказов используйте указанную почту.
          </p>
        </FadeIn>
        <FadeIn delay={0.08} className="space-y-5 font-sans text-body-readable text-stone">
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
        <form className="space-y-6 border border-line/70 bg-canvas p-6 shadow-[0_20px_60px_rgba(28,28,28,0.05)] sm:space-y-7 sm:p-8 md:p-10 md:shadow-[0_24px_70px_rgba(28,28,28,0.06)]">
          <Field label="Имя" htmlFor="c-name">
            <Input id="c-name" placeholder="Имя" required autoComplete="name" />
          </Field>
          <Field label="Эл. почта" htmlFor="c-email">
            <Input id="c-email" type="email" placeholder="эл. почта" required autoComplete="email" />
          </Field>
          <Field label="Сообщение" htmlFor="c-msg">
            <TextArea id="c-msg" placeholder="Какой запрос хотите сохранить в металле?" rows={5} />
          </Field>
          <Button type="submit" className="w-full min-h-[48px] px-10 sm:w-auto sm:px-14">
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
        className="block font-sans text-caption-wide uppercase tracking-[0.22em] text-stone pb-2 sm:pb-3"
      >
        {label}
      </label>
      {children}
    </div>
  );
}
