"use client";

import { usePathname } from "next/navigation";
import type { PropsWithChildren } from "react";
import { SiteLayout } from "@/components/layout/site-layout";

/**
 * Публичные страницы — с навбаром и футером.
 * /auth и /admin — без этой оболочки (свои layout).
 */
export function ConditionalSiteLayout({ children }: PropsWithChildren) {
  const pathname = usePathname();
  if (pathname.startsWith("/auth") || pathname.startsWith("/admin")) {
    return <>{children}</>;
  }
  return <SiteLayout>{children}</SiteLayout>;
}
