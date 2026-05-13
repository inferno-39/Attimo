import Link from "next/link";
import { Container } from "@/components/layout/container";
import { SITE_NAME } from "@/constants/site";

const cols = [
  {
    heading: "Салон",
    links: [
      { href: "/catalog", label: "Коллекции" },
      { href: "/about", label: "О ателье" },
      { href: "/contact", label: "Приватный просмотр" },
    ],
  },
  {
    heading: "Сервис",
    links: [
      { href: "/profile", label: "Аккаунт" },
      { href: "/wishlist", label: "Избранное" },
      { href: "/cart", label: "Заказы" },
    ],
  },
  {
    heading: "Юридическое",
    links: [
      { href: "/contact", label: "Политика конфиденциальности" },
      { href: "/contact", label: "Условия покупки" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-line/80 bg-ivory/40 mt-28">
      <Container className="py-22">
        <div className="grid gap-14 md:grid-cols-[1.35fr_repeat(3,minmax(0,1fr))]">
          <div>
            <p className="font-serif text-display-lg tracking-tight text-graphite">{SITE_NAME}</p>
            <p className="mt-6 font-sans text-[15px] leading-relaxed text-stone max-w-sm">
              Каждый объект рождается вручную, в маленькой мастерской, где звук напильника и тишина
              — часть процесса. Мы принимаем ограниченное число индивидуальных заказов в месяц.
            </p>
          </div>
          {cols.map((col) => (
            <div key={col.heading}>
              <p className="font-sans text-caption-wide uppercase tracking-[0.22em] text-ash">{col.heading}</p>
              <ul className="mt-6 space-y-3 font-sans text-[14px] text-stone">
                {col.links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link
                      href={link.href}
                      className="inline-block pb-px border-b border-transparent hover:border-gold/70 transition-colors duration-480"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 pt-10 border-t border-line/80 flex flex-col sm:flex-row sm:justify-between gap-4 text-caption-wide uppercase tracking-[0.2em] text-ash">
          <span>© {new Date().getFullYear()} {SITE_NAME} · авторские ювелирные изделия</span>
          <span>Санкт‑Петербург · Москва · поездки в студию при записи</span>
        </div>
      </Container>
    </footer>
  );
}
