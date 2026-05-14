import Link from "next/link";

export default function AdminProductsPage() {
  return (
    <div className="px-8 py-12 lg:px-12 space-y-6 max-w-3xl">
      <p className="font-sans text-caption-wide uppercase tracking-[0.24em] text-ash">Каталог</p>
      <h1 className="font-serif text-display-lg text-graphite">Управление изделиями</h1>
      <p className="font-sans text-body-readable text-stone">
        CRUD-формы и загрузка медиа подключаются к Prisma-модели <code className="font-mono text-[13px]">Product</code> и
        связям <code className="font-mono text-[13px]">Category</code> / <code className="font-mono text-[13px]">Collection</code>.
        Сейчас источником правды остаётся база после <code className="font-mono text-[13px]">db:seed</code>.
      </p>
      <Link href="/api/products" className="inline-block font-sans text-caption-wide uppercase tracking-[0.22em] text-graphite border-b border-graphite pb-1">
        Просмотр API · products
      </Link>
    </div>
  );
}
