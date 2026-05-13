import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Профиль",
  description: "Личное пространство клиента Attimo.",
};

export default function ProfilePage() {
  return (
    <Container className="py-16 lg:py-22 grid gap-12 lg:grid-cols-[0.92fr_1.15fr]">
      <aside className="space-y-6 border border-line/70 px-10 py-10 bg-canvas shadow-[0_18px_50px_rgba(28,28,28,0.04)] h-fit">
        <p className="font-serif text-display-lg tracking-tight">Гость студии</p>
        <p className="font-sans text-[14px] text-stone leading-relaxed">
          Имитация сохранена для дипломного кейса — подключите сессию, чтобы здесь возникло имя, история покупок и приватная
          гравировка.
        </p>
        <div className="space-y-2 font-sans text-caption-wide uppercase tracking-[0.22em] text-ash">
          <p>Ваш слот</p>
          <p className="font-serif lowercase text-graphite tracking-normal text-xl">активируется вашим решением</p>
        </div>
        <Button href="/auth/login" variant="outline" className="w-full">
          войти позже без спешки
        </Button>
      </aside>
      <section className="space-y-8">
        <div>
          <p className="font-sans text-caption-wide uppercase tracking-[0.26em] text-ash">Приватность</p>
          <h1 className="mt-4 font-serif text-display-xl text-graphite">Профиль</h1>
        </div>
        <dl className="grid gap-6 sm:grid-cols-2">
          <Field label="Выбранные серии" value="Не синхронизировано · макет интерфейса" />
          <Field label="Статус записи в ателье" value="нет запланированного визита" />
          <Field label="Персональные отметины" value="нет активных черновиков" />
          <Field label="Коммуникации" value="только редакционные слова в почте по подписке" />
        </dl>
      </section>
    </Container>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="border border-line/60 px-8 py-7 bg-ivory/10">
      <dt className="font-sans text-caption-wide uppercase tracking-[0.22em] text-ash">{label}</dt>
      <dd className="mt-3 font-serif text-xl text-graphite">{value}</dd>
    </div>
  );
}
