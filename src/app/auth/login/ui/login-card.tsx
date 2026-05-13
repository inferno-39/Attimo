"use client";

import { FadeIn } from "@/components/common/fade-in";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import type { ReactNode } from "react";

export function LoginCard({ footer }: { footer: ReactNode }) {
  return (
    <FadeIn className="space-y-8 border border-line/70 bg-canvas px-10 py-12 shadow-[0_26px_80px_rgba(28,28,28,0.08)]">
      <div className="space-y-3 text-center">
        <p className="font-sans text-caption-wide uppercase tracking-[0.26em] text-ash">Аккаунт</p>
        <h1 className="font-serif text-display-lg text-graphite">Вход</h1>
        <p className="font-sans text-[14px] text-stone leading-relaxed">
          Минимальный доступ к закрытым выпускам и сохранённым образцам. Демонстрационный интерфейс для учебного проекта —
          интеграцию с вашим SSO или magic-link можно добавить поверх этого слоя.
        </p>
      </div>
      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        <AuthField htmlFor="email" label="Эл. почта">
          <Input id="email" type="email" autoComplete="email" required />
        </AuthField>
        <AuthField htmlFor="pwd" label="Пароль">
          <Input id="pwd" type="password" autoComplete="current-password" />
        </AuthField>
        <Button type="submit" className="w-full">
          Продолжить
        </Button>
      </form>
      {footer}
    </FadeIn>
  );
}

function AuthField({
  htmlFor,
  label,
  children,
}: {
  htmlFor: string;
  label: string;
  children: React.ReactNode;
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
