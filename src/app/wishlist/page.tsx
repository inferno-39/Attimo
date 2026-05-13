import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { listProducts } from "@/services/product-service";
import { ProductCard } from "@/components/product/product-card";

export const metadata: Metadata = {
  title: "Избранное",
  description: "Сохранённые украшения Attimo.",
};

export default async function WishlistPage() {
  const curated = await listProducts(true);

  return (
    <Container className="py-16 lg:py-22 space-y-12">
      <div className="max-w-xl space-y-4">
        <p className="font-sans text-caption-wide uppercase tracking-[0.26em] text-ash">Выбор</p>
        <h1 className="font-serif text-display-xl text-graphite">Избранное</h1>
        <p className="font-sans text-[15px] leading-relaxed text-stone">
          Пространство сохранено для спокойного сравнения. После авторизации список привязали бы к вашему профилю; сейчас —
          редакционная выборка, как если бы салон уже знал ваш вкус.
        </p>
      </div>
      <div className="flex flex-wrap gap-6 border border-dashed border-line/70 rounded-none px-8 py-12 bg-ivory/15">
        <p className="font-serif text-xl text-graphite shrink-0">Пока здесь только наша редакция коллекций.</p>
        <Button href="/catalog" variant="outline">
          добавить объект
        </Button>
      </div>
      <div className="grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
        {curated.slice(0, 4).map((p, idx) => (
          <ProductCard key={p.id} product={p} index={idx} />
        ))}
      </div>
      <div className="text-center pb-16">
        <Link
          href="/contact"
          className="font-sans text-caption-wide uppercase tracking-[0.22em] text-stone hover:text-graphite transition-colors duration-480"
        >
          Сверить сохранённые позиции с ателье
        </Link>
      </div>
    </Container>
  );
}
