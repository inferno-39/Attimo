"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/layout/container";
import { mainNavLinks } from "@/constants/navigation";
import { SITE_NAME } from "@/constants/site";
import { EASE_LUXURY, MOTION_DURATION } from "@/lib/motion";
import { cn } from "@/utils/cn";

const NAV_H = 72;

export function Navbar() {
  const pathname = usePathname();
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isHome = pathname === "/";

  useEffect(() => {
    document.documentElement.style.setProperty("--nav-h", `${NAV_H}px`);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menu) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menu]);

  useEffect(() => {
    if (!menu) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenu(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menu]);

  const overlayNav = isHome && !scrolled;

  const linkTone = (href: string) => {
    const active = pathname === href || pathname.startsWith(`${href}/`);
    if (overlayNav) {
      return active ? "text-canvas" : "text-canvas/65 hover:text-canvas";
    }
    return active ? "text-graphite" : "text-stone hover:text-graphite";
  };

  return (
    <header
      style={{ height: NAV_H }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-500 ease-out",
        overlayNav
          ? "border-transparent bg-transparent"
          : "border-line/60 bg-canvas/88 backdrop-blur-md supports-[backdrop-filter]:bg-canvas/78",
      )}
    >
      <Container size="wide" className="flex h-full items-center justify-between gap-4 sm:gap-8">
        <Link
          href="/"
          className={cn(
            "font-serif text-[clamp(1.35rem,3.8vw,1.6rem)] tracking-tight shrink-0 transition-colors duration-500",
            overlayNav ? "text-canvas" : "text-graphite",
          )}
        >
          {SITE_NAME}
        </Link>

        <nav aria-label="Основная навигация" className="hidden md:flex gap-8 lg:gap-14">
          {mainNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "font-sans text-caption-wide uppercase text-[10px] tracking-[0.26em] transition-colors duration-480",
                linkTone(link.href),
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-6 lg:gap-9">
          {(["/wishlist", "/cart", "/profile"] as const).map((href) => {
            const labels: Record<string, string> = {
              "/wishlist": "Избранное",
              "/cart": "Корзина",
              "/profile": "Профиль",
            };
            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  "font-sans text-caption-wide uppercase text-[10px] tracking-[0.26em] transition-colors duration-480",
                  overlayNav
                    ? pathname.startsWith(href)
                      ? "text-canvas"
                      : "text-canvas/65 hover:text-canvas"
                    : pathname.startsWith(href)
                      ? "text-graphite"
                      : "text-stone hover:text-graphite",
                )}
              >
                {labels[href]}
              </Link>
            );
          })}
          <Link
            href="/auth/login"
            className={cn(
              "font-sans text-caption-wide uppercase text-[10px] tracking-[0.26em] border-b pb-0.5 transition-colors duration-480",
              overlayNav
                ? "border-canvas/40 text-canvas hover:border-canvas"
                : "border-transparent text-graphite hover:border-graphite",
            )}
          >
            Вход
          </Link>
        </div>

        <button
          type="button"
          aria-expanded={menu}
          aria-controls="mobile-drawer"
          aria-label={menu ? "Закрыть меню" : "Открыть меню"}
          className={cn(
            "relative z-[60] flex h-11 w-11 shrink-0 touch-manipulation flex-col items-center justify-center gap-[5px] md:hidden",
            overlayNav && !menu ? "text-canvas" : "text-graphite",
          )}
          onClick={() => setMenu((v) => !v)}
        >
          <motion.span
            animate={menu ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            transition={{ duration: MOTION_DURATION.sm, ease: EASE_LUXURY }}
            className="block h-px w-[22px] origin-center bg-current"
          />
          <motion.span
            animate={menu ? { opacity: 0, scaleX: 0.2 } : { opacity: 1, scaleX: 1 }}
            transition={{ duration: MOTION_DURATION.xs, ease: EASE_LUXURY }}
            className="block h-px w-[22px] bg-current"
          />
          <motion.span
            animate={menu ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            transition={{ duration: MOTION_DURATION.sm, ease: EASE_LUXURY }}
            className="block h-px w-[22px] origin-center bg-current"
          />
        </button>
      </Container>

      <AnimatePresence>
        {menu ? (
          <>
            <motion.button
              type="button"
              aria-label="Закрыть меню"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: MOTION_DURATION.sm, ease: EASE_LUXURY }}
              className="fixed inset-x-0 bottom-0 z-[55] bg-graphite/25 backdrop-blur-[2px] md:hidden"
              style={{ top: `${NAVBAR_HEIGHT_PX}px` }}
              onClick={() => setMenu(false)}
            />
            <motion.nav
              id="mobile-drawer"
              role="navigation"
              aria-label="Мобильное меню"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: MOTION_DURATION.md, ease: EASE_LUXURY }}
              className="fixed bottom-0 right-0 z-[58] flex w-[min(20rem,calc(100vw-2.5rem))] max-w-[88vw] flex-col border-l border-line/60 bg-canvas/97 shadow-[-28px_0_60px_rgba(28,28,28,0.08)] backdrop-blur-md supports-[backdrop-filter]:bg-canvas/92 md:hidden"
              style={{ top: `${NAVBAR_HEIGHT_PX}px` }}
            >
              <div className="flex flex-1 flex-col overflow-y-auto px-8 py-10">
                <ul className="space-y-0">
                  {mainNavLinks.map((link, idx) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 + 0.06, duration: MOTION_DURATION.sm, ease: EASE_LUXURY }}
                    >
                      <Link
                        href={link.href}
                        className="block border-b border-line/50 py-4 font-serif text-[1.35rem] leading-snug tracking-tight text-graphite transition-colors duration-480 hover:text-stone"
                        onClick={() => setMenu(false)}
                      >
                        {link.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: MOTION_DURATION.sm }}
                  className="mt-12 flex flex-col gap-4 border-t border-line/40 pt-8"
                >
                  <p className="font-sans text-caption-wide uppercase tracking-[0.24em] text-ash">Аккаунт</p>
                  <div className="flex flex-col gap-3 font-sans text-caption-wide uppercase tracking-[0.22em] text-stone">
                    <Link href="/wishlist" className="py-2 transition-colors duration-480 hover:text-graphite" onClick={() => setMenu(false)}>
                      Избранное
                    </Link>
                    <Link href="/cart" className="py-2 transition-colors duration-480 hover:text-graphite" onClick={() => setMenu(false)}>
                      Корзина
                    </Link>
                    <Link href="/profile" className="py-2 transition-colors duration-480 hover:text-graphite" onClick={() => setMenu(false)}>
                      Профиль
                    </Link>
                    <Link href="/auth/login" className="py-2 transition-colors duration-480 hover:text-graphite" onClick={() => setMenu(false)}>
                      Вход
                    </Link>
                  </div>
                </motion.div>
              </div>
            </motion.nav>
          </>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

export const NAVBAR_HEIGHT_PX = NAV_H;
