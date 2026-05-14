import type { Metadata } from "next";
import Link from "next/link";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/product/product-card";
import { listWishlist } from "@/services/wishlist-service";

export const metadata: Metadata = {
  title: "Избранное",
  description: "Сохранённые украшения Attimo.",
};

export default async function WishlistPage() {
  const session = await auth();
  if (!session?.user?.id) {
    redirect("/auth/login?callbackUrl=/wishlist");
  }

  let items: Awaited<ReturnType<typeof listWishlist>> = [];
  try {
    items = await listWishlist(session.user.id);
  } catch {
    items = [];
  }

  return (
    <Container className="space-y-12 py-16 lg:py-22">
      <div className="max-w-xl space-y-4">
        <p className="font-sans text-caption-wide uppercase tracking-[0.26em] text-ash">Выбор</p>
        <h1 className="font-serif text-display-xl text-graphite">Избранное</h1>
        <p className="font-sans text-[15px] leading-relaxed text-stone">
          Список привязан к вашему аккаунту. Добавляйте изделия с карточки товара — здесь они собираются в одну тихую
          подборку.
        </p>
      </div>

      {items.length === 0 ? (
        <div className="border border-dashed border-line/70 bg-ivory/15 px-8 py-14 text-center transition-colors duration-500">
          <p className="font-serif text-2xl text-graphite">Пока пусто</p>
          <p className="mx-auto mt-4 max-w-md font-sans text-[14px] leading-relaxed text-stone">
            Сохраняйте то, что откликается — избранное создано для неспешного сравнения и возвращения к образу позже.
          </p>
          <Button href="/catalog" variant="outline" className="mt-10">
            Открыть каталог
          </Button>
        </div>
      ) : (
        <div className="grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((p, idx) => (
            <ProductCard key={p.id} product={p} index={idx} />
          ))}
        </div>
      )}

      <div className="pb-16 text-center">
        <Link
          href="/profile"
          className="font-sans text-caption-wide uppercase tracking-[0.22em] text-stone transition-colors duration-480 hover:text-graphite"
        >
          Вернуться в профиль
        </Link>
      </div>
    </Container>
  );
}
