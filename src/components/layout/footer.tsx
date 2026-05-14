import Link from "next/link";
import { Container } from "@/components/layout/container";
import { SITE_NAME, SITE_TAGLINE, SOCIAL_LINKS } from "@/constants/site";
import { mainNavLinks } from "@/constants/navigation";

const cols = [
  {
    heading: "Салон",
    links: [
      { href: "/catalog", label: "Изделия" },
      { href: "/about", label: "О бренде" },
      { href: "/contact", label: "Запись" },
    ],
  },
  {
    heading: "Сервис",
    links: [
      { href: "/profile", label: "Аккаунт" },
      { href: "/wishlist", label: "Избранное" },
      { href: "/cart", label: "Корзина" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-line/70 bg-ivory/35">
      <Container size="wide" className="py-14 sm:py-section md:py-24">
        <div className="grid gap-12 border-b border-line/50 pb-12 sm:gap-14 sm:pb-14 md:grid-cols-12 md:gap-12 md:pb-20">
          <div className="md:col-span-5">
            <p className="font-serif text-display-lg tracking-tight text-graphite md:text-[clamp(1.85rem,3.2vw,2.75rem)]">
              {SITE_NAME}
            </p>
            <p className="mt-6 max-w-sm font-sans text-body-readable text-stone md:mt-8">
              Авторские ювелирные изделия. Малая мастерская, ручной темп, приватные примерки по записи.
            </p>
            <nav aria-label="Соцсети" className="mt-8 flex flex-wrap gap-x-6 gap-y-3 md:mt-10 md:gap-x-8">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-caption-wide uppercase tracking-[0.24em] text-stone transition-colors duration-480 hover:text-graphite"
                >
                  {s.label}
                </a>
              ))}
            </nav>
          </div>
          <div className="grid gap-10 sm:grid-cols-2 md:col-span-4 md:col-start-8 md:gap-12">
            {cols.map((col) => (
              <div key={col.heading}>
                <p className="font-sans text-caption-wide uppercase tracking-[0.24em] text-ash">{col.heading}</p>
                <ul className="mt-4 space-y-2.5 font-sans text-body-readable text-stone md:mt-6 md:space-y-3">
                  {col.links.map((link) => (
                    <li key={link.href + link.label}>
                      <Link
                        href={link.href}
                        className="inline-block border-b border-transparent pb-px transition-colors duration-480 hover:border-gold/60"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="pt-10 md:pt-14">
          <p className="mx-auto max-w-3xl text-center font-serif text-serif-lead text-stone">
            {SITE_TAGLINE}
          </p>
          <div className="mt-8 flex flex-col items-center justify-between gap-5 border-t border-line/50 pt-8 text-caption-wide uppercase tracking-[0.2em] text-ash sm:mt-10 sm:flex-row sm:gap-6 sm:pt-10">
            <span>
              © {new Date().getFullYear()} {SITE_NAME}
            </span>
            <span className="text-center sm:text-right">Санкт‑Петербург · студия по предварительной записи</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
