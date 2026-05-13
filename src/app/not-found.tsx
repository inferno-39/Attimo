import Link from "next/link";

export default function GlobalNotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-canvas text-graphite px-8 py-28">
      <div className="text-center space-y-6">
        <p className="font-serif text-display-lg tracking-tight text-balance">Attimo потерян в переходе</p>
        <p className="font-sans text-[15px] text-stone max-w-md mx-auto leading-relaxed">
          Пространство, которое вы запрашиваете, не нашлось. Вернёмся домой без лишней суеты.
        </p>
        <Link
          href="/"
          className="inline-flex font-sans text-caption-wide uppercase tracking-[0.26em] border border-graphite px-10 py-3 hover:bg-graphite hover:text-canvas transition-colors duration-480"
        >
          На главную
        </Link>
      </div>
    </div>
  );
}
