import type { Metadata } from "next";
import Link from "next/link";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { formatPriceRub } from "@/lib/format-price";
import { listOrdersForUser } from "@/services/order-service";
import type { OrderStatus } from "@prisma/client";

export const metadata: Metadata = {
  title: "Профиль",
  description: "Личное пространство клиента Attimo.",
};

const ORDER_STATUS_RU: Record<OrderStatus, string> = {
  DRAFT: "Черновик",
  PENDING: "Ожидает оплаты",
  PAID: "Оплачен",
  SHIPPED: "Отправлен",
  CANCELLED: "Отменён",
};

export default async function ProfilePage() {
  const session = await auth();
  if (!session?.user?.id) {
    redirect("/auth/login?callbackUrl=/profile");
  }

  let orders: Awaited<ReturnType<typeof listOrdersForUser>> = [];
  try {
    orders = await listOrdersForUser(session.user.id);
  } catch {
    orders = [];
  }

  const displayName = session.user.name?.trim() || "Клиент Attimo";
  const email = session.user.email ?? "";

  return (
    <Container className="grid gap-12 py-16 lg:grid-cols-[0.92fr_1.15fr] lg:py-22">
      <aside className="h-fit space-y-8 border border-line/70 bg-canvas px-10 py-10 shadow-[0_18px_50px_rgba(28,28,28,0.04)]">
        <div className="space-y-2">
          <p className="font-sans text-caption-wide uppercase tracking-[0.24em] text-ash">Аккаунт</p>
          <p className="font-serif text-display-lg tracking-tight text-graphite">{displayName}</p>
          {email ? (
            <p className="font-sans text-[14px] text-stone leading-relaxed">{email}</p>
          ) : null}
        </div>
        <dl className="space-y-5 border-t border-line/50 pt-8 font-sans text-[14px] text-stone">
          <div className="flex justify-between gap-4">
            <dt className="text-caption-wide uppercase tracking-[0.2em] text-ash">Роль</dt>
            <dd className="text-graphite">{session.user.role === "ADMIN" ? "Администратор" : "Клиент"}</dd>
          </div>
        </dl>
        <div className="flex flex-col gap-3 border-t border-line/50 pt-8">
          <Button href="/wishlist" variant="outline" className="w-full">
            Избранное
          </Button>
          <Button href="/cart" variant="outline" className="w-full">
            Корзина
          </Button>
        </div>
      </aside>

      <div className="space-y-14">
        <section className="space-y-6">
          <div>
            <p className="font-sans text-caption-wide uppercase tracking-[0.26em] text-ash">Заказы</p>
            <h1 className="mt-3 font-serif text-display-xl text-graphite">История</h1>
            <p className="mt-4 max-w-xl font-sans text-[15px] leading-relaxed text-stone">
              Статусы обновляются по мере работы ателье. Если список пуст, выберите изделие в каталоге и оформите заказ.
            </p>
          </div>

          {orders.length === 0 ? (
            <div className="border border-dashed border-line/70 bg-ivory/10 px-8 py-12 text-center transition-colors duration-500">
              <p className="font-serif text-xl text-graphite">Пока нет заказов</p>
              <p className="mt-3 font-sans text-[14px] text-stone leading-relaxed">
                Сохраните изделие в избранное или перейдите в каталог — мы сохраним всё под вашим именем.
              </p>
              <Button href="/catalog" variant="outline" className="mt-8">
                В каталог
              </Button>
            </div>
          ) : (
            <ul className="space-y-4">
              {orders.map((order) => (
                <li
                  key={order.id}
                  className="border border-line/60 bg-canvas px-8 py-7 shadow-[0_12px_40px_rgba(28,28,28,0.04)] transition-shadow duration-500 hover:shadow-[0_16px_48px_rgba(28,28,28,0.06)]"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <p className="font-sans text-caption-wide uppercase tracking-[0.22em] text-ash">
                      {new Intl.DateTimeFormat("ru-RU", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      }).format(order.createdAt)}
                    </p>
                    <p className="font-serif text-xl text-graphite">{formatPriceRub(Math.round(order.totalCents / 100))}</p>
                  </div>
                  <p className="mt-2 font-sans text-[13px] text-stone">{ORDER_STATUS_RU[order.status]}</p>
                  <ul className="mt-4 space-y-1 font-sans text-[13px] text-stone">
                    {order.items.map((line) => (
                      <li key={line.id}>
                        <Link href={`/product/${line.product.slug}`} className="border-b border-transparent hover:border-graphite/40">
                          {line.product.title}
                        </Link>
                        <span className="text-ash"> · {line.quantity} шт.</span>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          )}
        </section>

        <section className="space-y-4 border-t border-line/50 pt-12">
          <p className="font-sans text-caption-wide uppercase tracking-[0.26em] text-ash">Настройки</p>
          <div className="border border-line/60 bg-ivory/10 px-8 py-10">
            <p className="font-serif text-xl text-graphite">Скоро</p>
            <p className="mt-3 max-w-lg font-sans text-[14px] leading-relaxed text-stone">
              Уведомления, адреса доставки и способ связи — подключим на следующем этапе, без перегруза интерфейса.
            </p>
          </div>
        </section>
      </div>
    </Container>
  );
}
