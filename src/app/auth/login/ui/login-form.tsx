"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import { useState, useTransition } from "react";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/common/fade-in";
import { AuthField } from "@/components/auth/auth-field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { EASE_LUXURY, MOTION_DURATION } from "@/lib/motion";
import type { ReactNode } from "react";

export function LoginForm({ footer }: { footer: ReactNode }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/profile";
  const [error, setError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  return (
    <FadeIn className="space-y-10 border border-line/70 bg-canvas px-10 py-12 shadow-[0_26px_80px_rgba(28,28,28,0.08)]">
      <div className="space-y-4 text-center">
        <p className="font-sans text-caption-wide uppercase tracking-[0.26em] text-ash">Аккаунт</p>
        <h1 className="font-serif text-display-lg text-graphite">Вход</h1>
        <p className="font-sans text-[14px] text-stone leading-relaxed">
          Тихий доступ к избранному и истории заказов. Только email и пароль — без лишнего шума.
        </p>
      </div>

      <motion.form
        className="space-y-7"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: MOTION_DURATION.md, ease: EASE_LUXURY }}
        onSubmit={(e) => {
          e.preventDefault();
          setError(null);
          const fd = new FormData(e.currentTarget);
          const email = String(fd.get("email") ?? "").trim();
          const password = String(fd.get("password") ?? "");
          startTransition(async () => {
            const res = await signIn("credentials", {
              email,
              password,
              redirect: false,
              callbackUrl,
            });
            if (res?.error) {
              setError("Неверный email или пароль");
              return;
            }
            if (res?.ok) {
              router.push(callbackUrl.startsWith("/") ? callbackUrl : "/profile");
              router.refresh();
            }
          });
        }}
      >
        <AuthField htmlFor="login-email" label="Эл. почта">
          <Input
            id="login-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            disabled={pending}
          />
        </AuthField>
        <AuthField htmlFor="login-password" label="Пароль">
          <Input
            id="login-password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            disabled={pending}
          />
        </AuthField>
        {error ? (
          <p className="text-center font-sans text-[13px] text-graphite/90" role="alert">
            {error}
          </p>
        ) : null}
        <Button type="submit" className="w-full" disabled={pending}>
          {pending ? "Вход…" : "Продолжить"}
        </Button>
      </motion.form>
      {footer}
    </FadeIn>
  );
}
