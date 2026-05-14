import Link from "next/link";
import type { Metadata } from "next";
import { Suspense } from "react";
import { LoginCard } from "./ui/login-card";

export const metadata: Metadata = {
  title: "Вход",
};

function LoginFallback() {
  return (
    <div
      className="min-h-[420px] border border-line/70 bg-canvas px-10 py-14 shadow-[0_26px_80px_rgba(28,28,28,0.08)] animate-pulse"
      aria-hidden
    />
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<LoginFallback />}>
      <LoginCard
        footer={
          <p className="text-center font-sans text-[13px] text-stone">
            Нет аккаунта?{" "}
            <Link
              href="/auth/register"
              className="border-b border-graphite/40 pb-px transition-colors hover:border-graphite"
            >
              Создайте аккаунт
            </Link>
          </p>
        }
      />
    </Suspense>
  );
}
