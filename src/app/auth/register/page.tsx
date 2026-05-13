import Link from "next/link";
import type { Metadata } from "next";
import { FadeIn } from "@/components/common/fade-in";

export const metadata: Metadata = {
  title: "Регистрация",
};

export default function RegisterPage() {
  return (
    <FadeIn className="space-y-8 border border-line/70 bg-canvas px-10 py-12 shadow-[0_26px_80px_rgba(28,28,28,0.08)] text-center">
      <div className="space-y-4">
        <p className="font-sans text-caption-wide uppercase tracking-[0.26em] text-ash">Приглашение</p>
        <h1 className="font-serif text-display-lg text-graphite">Регистрация</h1>
        <p className="font-sans text-[14px] text-stone leading-relaxed">
          В реальном сценарии мы открывали бы доступ по персональной ссылке или после короткой встречи. Здесь — лишь знак того,
          что ателье поддерживает тихое сообщество клиентов, а регистрация не «быстрая галочка», а второй вход в диалог о памяти.
        </p>
      </div>
      <Link
        href="/contact"
        className="inline-block font-serif text-xl border-b border-gold pb-px text-graphite hover:text-stone transition-colors"
      >
        Запросить пригласительную отметину
      </Link>
      <p className="font-sans text-[13px] text-stone">
        Уже с нами с самого утра вашего решения?{" "}
        <Link href="/auth/login" className="border-b border-graphite/40 hover:border-graphite transition-colors pb-px">
          Вход
        </Link>
      </p>
    </FadeIn>
  );
}
