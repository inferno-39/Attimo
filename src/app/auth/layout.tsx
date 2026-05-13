import Link from "next/link";
import { SITE_NAME } from "@/constants/site";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-canvas via-ivory to-mist/40 flex flex-col">
      <header className="px-8 py-8 flex justify-center">
        <Link href="/" className="font-serif text-[1.5rem] text-graphite tracking-tight">
          {SITE_NAME}
        </Link>
      </header>
      <div className="flex-grow flex items-center justify-center px-6 pb-20">
        <div className="w-full max-w-md">{children}</div>
      </div>
    </div>
  );
}
