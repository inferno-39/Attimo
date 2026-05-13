import Link from "next/link";
import type { Metadata } from "next";
import { LoginCard } from "./ui/login-card";

export const metadata: Metadata = {
  title: "Вход",
};

export default function LoginPage() {
  return (
    <LoginCard
      footer={
        <p className="text-center font-sans text-[13px] text-stone">
          Нет аккаунта?{" "}
          <Link href="/auth/register" className="border-b border-graphite/40 hover:border-graphite transition-colors pb-px">
            Создайте аккаунт
          </Link>
        </p>
      }
    />
  );
}
