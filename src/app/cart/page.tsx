import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { getProductById } from "@/services/product-service";
import { formatPriceRub } from "@/lib/format-price";

export const metadata: Metadata = {
  title: "Корзина",
  description: "Корзина заказов Attimo.",
};

export default async function CartPage() {
  const ids = ["neve-luce", "silenzio"] as const;
  const resolved = [];
  for (const id of ids) {
    const p = await getProductById(id);
    if (p) resolved.push(p);
  }

  const subtotal = resolved.reduce((s, i) => s + i.priceRub, 0);

  return (
    <Container
      size="wide"
      className="grid gap-12 py-12 sm:gap-14 sm:py-16 md:grid-cols-[1.08fr_0.92fr] md:gap-16 md:py-section lg:py-22"
    >
      <section className="space-y-6 sm:space-y-8">
        <div>
          <p className="font-sans text-caption-wide uppercase tracking-[0.26em] text-ash">Комплект</p>
          <h1 className="mt-3 font-serif text-display-xl text-graphite text-balance sm:mt-4">Корзина</h1>
        </div>
        <ul className="divide-y divide-line/70 border-y border-line/70">
          {resolved.map((item) => (
            <li key={item.slug} className="flex flex-col gap-4 py-6 sm:flex-row sm:items-start sm:justify-between sm:gap-8 sm:py-8">
              <div className="min-w-0 flex-1 space-y-1.5">
                <p className="font-serif text-xl text-graphite sm:text-2xl">{item.name}</p>
                <p className="font-sans text-[12px] uppercase tracking-[0.16em] text-ash">{item.material}</p>
              </div>
              <p className="shrink-0 font-sans text-[13px] tracking-[0.12em] text-stone sm:text-right">
                {formatPriceRub(item.priceRub)}
              </p>
            </li>
          ))}
          {resolved.length === 0 ? (
            <li className="py-10 font-sans text-body-readable text-stone sm:py-12">
              Пространство собраний пустует. Для дипломного кейса здесь живёт простая механическая корзина; при подключении
              Prisma/Stripe цена и количества потянуться автоматически.
            </li>
          ) : null}
        </ul>
      </section>
      <aside className="h-fit space-y-6 border border-line/70 bg-ivory/30 px-6 py-8 shadow-[0_20px_56px_rgba(28,28,28,0.05)] sm:space-y-8 sm:px-8 sm:py-10 md:px-10 md:py-12 md:shadow-[0_24px_60px_rgba(28,28,28,0.05)]">
        <div className="space-y-4">
          <p className="font-sans text-caption-wide uppercase tracking-[0.22em] text-ash">Чек</p>
          <dl className="space-y-3 font-sans text-body-readable text-stone">
            <div className="flex justify-between gap-4">
              <dt>Подытог</dt>
              <dd className="shrink-0">{formatPriceRub(subtotal)}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt>Доставка / страхование</dt>
              <dd className="shrink-0 text-right">расчитывается</dd>
            </div>
          </dl>
        </div>
        <div className="flex flex-col gap-2 border-t border-line/70 pt-6 font-serif text-xl text-graphite sm:flex-row sm:items-baseline sm:justify-between sm:pt-8 sm:text-2xl">
          <span>Всего</span>
          <span>{formatPriceRub(subtotal)}</span>
        </div>
        <Button className="w-full min-h-[48px] uppercase">Подтвердить намерение</Button>
        <p className="font-sans text-[13px] leading-relaxed text-stone">
          Оплату здесь можно заменить на приватную ссылку, инвойс или официальный платёж — UI остаётся сдержанным.{" "}
          <Link href="/contact" className="border-b border-graphite/30 pb-px transition-colors duration-480 hover:border-graphite">
            Вопросы к консьерж-службе
          </Link>
        </p>
      </aside>
    </Container>
  );
}
