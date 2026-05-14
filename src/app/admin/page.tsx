"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const cards = [
  { label: "Активные предзаказы", value: "12", caption: "+3 после презентации вечернего света" },
  { label: "Свободные слоты мастера", value: "2", caption: "следующий слот после 09.06" },
  { label: "Клиентские консьерж-задачи", value: "5", caption: "нет просроченных SLA" },
  {
    label: "Репутационный балл студии",
    value: "94",
    caption: "субъективный индекс доверия консьержей",
  },
];

export default function AdminDashboardPage() {
  return (
    <div className="px-10 py-12 lg:px-16 lg:py-14 space-y-12">
      <header className="space-y-3">
        <p className="font-sans text-caption-wide uppercase tracking-[0.26em] text-ash">Обзор</p>
        <h1 className="font-serif text-display-xl text-graphite">Concierge-панель</h1>
        <p className="font-sans text-[15px] text-stone max-w-2xl">
          Визуальная оболочка для дипломного кейса не перегружена графиками: здесь сохранены метрики, которые уважают тихое
          ощущение мастера, а не крики dashboard-рынков.
        </p>
      </header>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {cards.map((card, idx) => (
          <motion.article
            key={card.label}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.06, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="border border-line/70 bg-ivory/10 px-7 py-8 flex flex-col justify-between shadow-[0_22px_60px_rgba(28,28,28,0.05)]"
          >
            <div>
              <p className="font-sans text-caption-wide uppercase tracking-[0.24em] text-ash">{card.label}</p>
              <p className="mt-5 font-serif text-[2.85rem] text-graphite">{card.value}</p>
            </div>
            <p className="mt-6 font-sans text-[12px] uppercase tracking-[0.16em] text-stone">{card.caption}</p>
          </motion.article>
        ))}
      </div>
      <div className="border border-line/70 bg-ivory/20 px-8 py-9 space-y-4 max-w-3xl">
        <p className="font-serif text-xl text-graphite">База данных (Prisma)</p>
        <p className="font-sans text-[14px] text-stone leading-relaxed">
          Схема: <code className="font-mono text-[13px] text-graphite">src/prisma/schema.prisma</code>. В{" "}
          <code className="font-mono text-[13px]">.env</code> задайте <code className="font-mono text-[13px]">DATABASE_URL</code> и{" "}
          <code className="font-mono text-[13px]">DIRECT_URL</code> (для Supabase с пулом — прямой URI, см.{" "}
          <code className="font-mono text-[13px]">.env.example</code>), затем{" "}
          <code className="font-mono text-[13px]">npm run db:migrate</code> или{" "}
          <code className="font-mono text-[13px]">npm run db:push</code>, при необходимости{" "}
          <code className="font-mono text-[13px]">npm run db:seed</code>. Без БД каталог и PDP используют mock из{" "}
          <code className="font-mono text-[13px]">src/constants/mock-products.ts</code>.
        </p>
        <p className="font-sans text-caption-wide uppercase tracking-[0.2em] text-ash">
          API: /api/products · /api/categories · /api/collections · /api/wishlist · /api/orders · /api/users/register
        </p>
        <Link
          href="/api/products"
          className="inline-flex font-sans text-caption-wide uppercase tracking-[0.26em] text-graphite border border-graphite px-8 py-3 hover:bg-graphite hover:text-canvas transition-colors duration-480 w-fit"
        >
          Смотреть JSON
        </Link>
      </div>
    </div>
  );
}
