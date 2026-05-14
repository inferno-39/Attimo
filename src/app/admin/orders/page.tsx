import Link from "next/link";

export default function AdminOrdersPage() {
  return (
    <div className="px-8 py-12 lg:px-12 space-y-6 max-w-3xl">
      <p className="font-sans text-caption-wide uppercase tracking-[0.24em] text-ash">Заказы</p>
      <h1 className="font-serif text-display-lg text-graphite">Управление заказами</h1>
      <p className="font-sans text-body-readable text-stone">
        Модель <code className="font-mono text-[13px]">Order</code> + <code className="font-mono text-[13px]">OrderItem</code> уже в схеме.
        Здесь появится таблица статусов (PENDING → PAID → SHIPPED) и детальный просмотр позиций.
      </p>
      <Link href="/api/orders" className="inline-block font-sans text-caption-wide uppercase tracking-[0.22em] text-graphite border-b border-graphite pb-1">
        API · orders (сессия пользователя)
      </Link>
    </div>
  );
}
