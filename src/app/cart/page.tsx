import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { getProductById } from "@/services/product-service";

export const metadata: Metadata = {
  title: "Корзина",
  description: "Корзина заказов Attimo.",
};

function formatPrice(rub: number) {
  return new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
    maximumFractionDigits: 0,
  }).format(rub);
}

export default async function CartPage() {
  const ids = ["neve-luce", "silenzio"] as const;
  const resolved = [];
  for (const id of ids) {
    const p = await getProductById(id);
    if (p) resolved.push(p);
  }

  const subtotal = resolved.reduce((s, i) => s + i.priceRub, 0);

  return (
    <Container className="py-16 lg:py-22 grid gap-16 lg:grid-cols-[1.08fr_0.92fr]">
      <section className="space-y-8">
        <div>
          <p className="font-sans text-caption-wide uppercase tracking-[0.26em] text-ash">Комплект</p>
          <h1 className="mt-4 font-serif text-display-xl text-graphite">Корзина</h1>
        </div>
        <ul className="divide-y divide-line/70 border-y border-line/70">
          {resolved.map((item) => (
            <li key={item.slug} className="flex gap-10 py-8">
              <div className="flex-grow space-y-2">
                <p className="font-serif text-2xl text-graphite">{item.name}</p>
                <p className="font-sans text-[13px] uppercase tracking-[0.16em] text-ash">{item.material}</p>
              </div>
              <p className="font-sans text-[13px] tracking-[0.12em] text-stone">{formatPrice(item.priceRub)}</p>
            </li>
          ))}
          {resolved.length === 0 ? (
            <li className="py-12 font-sans text-stone">
              Пространство собраний пустует. Для дипломного кейса здесь живёт простая механическая корзина; при подключении
              Prisma/Stripe цена и количества потянуться автоматически.
            </li>
          ) : null}
        </ul>
      </section>
      <aside className="border border-line/70 bg-ivory/30 px-10 py-12 shadow-[0_24px_60px_rgba(28,28,28,0.05)] space-y-8 h-fit">
        <div className="space-y-4">
          <p className="font-sans text-caption-wide uppercase tracking-[0.22em] text-ash">Чек</p>
          <dl className="space-y-3 font-sans text-[14px] text-stone">
            <div className="flex justify-between">
              <dt>Подытог</dt>
              <dd>{formatPrice(subtotal)}</dd>
            </div>
            <div className="flex justify-between">
              <dt>Доставка / страхование</dt>
              <dd>расчитывается</dd>
            </div>
          </dl>
        </div>
        <div className="border-t border-line/70 pt-8 flex justify-between font-serif text-2xl text-graphite">
          <span>Всего</span>
          <span>{formatPrice(subtotal)}</span>
        </div>
        <Button className="w-full uppercase">Подтвердить намерение</Button>
        <p className="font-sans text-[13px] text-stone leading-relaxed">
          Оплату здесь можно заменить на приватную ссылку, инвойс или официальный платёж — UI остаётся сдержанным.{" "}
          <Link href="/contact" className="border-b border-graphite/30 hover:border-graphite pb-px">
            Вопросы к консьерж-службе
          </Link>
        </p>
      </aside>
    </Container>
  );
}
