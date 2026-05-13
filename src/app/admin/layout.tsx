import Link from "next/link";
import { SITE_NAME } from "@/constants/site";

const nav = [
  { href: "/admin", label: "Обзор" },
  { href: "/api/products", label: "API · JSON" },
  { href: "/", label: "На сайт" },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-graphite text-canvas grid lg:grid-cols-[240px_1fr]">
      <aside className="border-r border-white/15 px-8 py-10 space-y-10">
        <div>
          <p className="font-serif text-[1.85rem] tracking-tight">{SITE_NAME}</p>
          <p className="font-sans text-caption-wide uppercase tracking-[0.22em] text-stone mt-4">Concierge Desk</p>
        </div>
        <nav className="flex flex-col gap-4 font-sans text-caption-wide uppercase tracking-[0.26em] text-stone">
          {nav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-gold-soft transition-colors duration-480"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="text-[12px] text-stone/80 leading-relaxed">
          Пространство для редакторов малой выкладки. В реальности защитите SSO и ролями ADMIN из Prisma-схемы.
        </div>
      </aside>
      <div className="bg-canvas text-graphite min-h-screen">{children}</div>
    </div>
  );
}
