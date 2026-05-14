import type { PropsWithChildren } from "react";
import { Footer } from "@/components/layout/footer";
import { Navbar, NAVBAR_HEIGHT_PX } from "@/components/layout/navbar";

export function SiteLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Navbar />
      <div style={{ height: NAVBAR_HEIGHT_PX }} aria-hidden className="shrink-0" />
      <main className="min-h-[70vh] bg-canvas pb-[env(safe-area-inset-bottom)] text-graphite antialiased">{children}</main>
      <Footer />
    </>
  );
}
