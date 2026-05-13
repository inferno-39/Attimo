import type { PropsWithChildren } from "react";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";

export function SiteLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Navbar />
      <main className="min-h-[70vh] bg-canvas text-graphite antialiased">{children}</main>
      <Footer />
    </>
  );
}
