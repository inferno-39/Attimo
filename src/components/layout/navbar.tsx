"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/layout/container";
import { mainNavLinks } from "@/constants/navigation";
import { SITE_NAME } from "@/constants/site";
import { cn } from "@/utils/cn";

export function Navbar() {
  const pathname = usePathname();
  const [menu, setMenu] = useState(false);

  const linkTone = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`)
      ? "text-graphite"
      : "text-stone hover:text-graphite";

  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-canvas/80 backdrop-blur-md supports-[backdrop-filter]:bg-canvas/70">
      <Container className="flex h-[72px] items-center justify-between gap-8">
        <Link
          href="/"
          className="font-serif text-[1.65rem] tracking-tight text-graphite shrink-0"
        >
          {SITE_NAME}
        </Link>

        <nav aria-label="Основная навигация" className="hidden md:flex gap-12">
          {mainNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "font-sans text-caption-wide uppercase text-[10px] tracking-[0.24em]",
                linkTone(link.href),
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/wishlist"
            className={cn(
              "font-sans text-caption-wide uppercase text-[10px] tracking-[0.24em] text-stone hover:text-graphite",
            )}
          >
            Избранное
          </Link>
          <Link
            href="/cart"
            className={cn(
              "font-sans text-caption-wide uppercase text-[10px] tracking-[0.24em]",
              pathname.startsWith("/cart") ? "text-graphite" : "text-stone hover:text-graphite",
            )}
          >
            Корзина
          </Link>
          <Link
            href="/profile"
            className={cn(
              "font-sans text-caption-wide uppercase text-[10px] tracking-[0.24em]",
              pathname.startsWith("/profile") ? "text-graphite" : "text-stone hover:text-graphite",
            )}
          >
            Профиль
          </Link>
          <Link
            href="/auth/login"
            className="font-sans text-caption-wide uppercase text-[10px] tracking-[0.24em] border-b border-transparent hover:border-graphite pb-0.5 text-graphite transition-colors duration-480"
          >
            Вход
          </Link>
        </div>

        <button
          type="button"
          aria-expanded={menu}
          aria-controls="mobile-drawer"
          className="md:hidden font-sans text-caption-wide uppercase tracking-[0.24em]"
          onClick={() => setMenu((v) => !v)}
        >
          Меню
        </button>
      </Container>

      <AnimatePresence>
        {menu ? (
          <motion.nav
            id="mobile-drawer"
            role="navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28 }}
            className="fixed inset-0 top-[72px] z-40 flex flex-col border-t border-line/80 bg-canvas px-10 py-10 md:hidden"
          >
            {mainNavLinks.map((link, idx) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.04 * idx }}
              >
                <Link
                  href={link.href}
                  className={cn(
                    "block py-4 font-serif text-2xl text-graphite border-b border-line/60",
                  )}
                  onClick={() => setMenu(false)}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <div className="mt-12 flex gap-10 text-caption-wide uppercase tracking-[0.24em] text-stone">
              <Link href="/wishlist" onClick={() => setMenu(false)}>
                Избранное
              </Link>
              <Link href="/cart" onClick={() => setMenu(false)}>
                Корзина
              </Link>
              <Link href="/profile" onClick={() => setMenu(false)}>
                Профиль
              </Link>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
