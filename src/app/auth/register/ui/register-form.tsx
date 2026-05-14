"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { useState, useTransition } from "react";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/common/fade-in";
import { AuthField } from "@/components/auth/auth-field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { EASE_LUXURY, MOTION_DURATION } from "@/lib/motion";
import { registerUserAction } from "../actions";

export function RegisterForm() {
  const router = useRouter();
  const [fieldErrors, setFieldErrors] = useState<Record<string, string[]> | undefined>();
  const [formError, setFormError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  return (
    <FadeIn className="space-y-10 border border-line/70 bg-canvas px-10 py-12 shadow-[0_26px_80px_rgba(28,28,28,0.08)]">
      <div className="space-y-4 text-center">
        <p className="font-sans text-caption-wide uppercase tracking-[0.26em] text-ash">Новый клиент</p>
        <h1 className="font-serif text-display-lg text-graphite">Регистрация</h1>
        <p className="font-sans text-[14px] text-stone leading-relaxed">
          Один спокойный шаг — имя, почта и пароль. Дальше избранное и заказы останутся с вами.
        </p>
      </div>

      <motion.form
        className="space-y-7"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: MOTION_DURATION.md, ease: EASE_LUXURY }}
        action={async (formData) => {
          setFieldErrors(undefined);
          setFormError(null);
          startTransition(async () => {
            const res = await registerUserAction(formData);
            if (res.fieldErrors) {
              setFieldErrors(res.fieldErrors);
              return;
            }
            if (res.error) {
              setFormError(res.error);
              return;
            }
            if (res.success) {
              const email = String(formData.get("email") ?? "").trim();
              const password = String(formData.get("password") ?? "");
              const sign = await signIn("credentials", {
                email,
                password,
                redirect: false,
                callbackUrl: "/profile",
              });
              if (sign?.error) {
                setFormError("Аккаунт создан, но вход не удался. Войдите вручную.");
                return;
              }
              router.push("/profile");
              router.refresh();
            }
          });
        }}
      >
        <AuthField
          htmlFor="reg-name"
          label="Имя"
          error={fieldErrors?.name?.[0]}
        >
          <Input id="reg-name" name="name" autoComplete="name" required disabled={pending} />
        </AuthField>
        <AuthField htmlFor="reg-email" label="Эл. почта" error={fieldErrors?.email?.[0]}>
          <Input id="reg-email" name="email" type="email" autoComplete="email" required disabled={pending} />
        </AuthField>
        <AuthField
          htmlFor="reg-password"
          label="Пароль"
          hint="Не короче 8 символов."
          error={fieldErrors?.password?.[0]}
        >
          <Input
            id="reg-password"
            name="password"
            type="password"
            autoComplete="new-password"
            required
            disabled={pending}
          />
        </AuthField>
        {formError ? (
          <p className="text-center font-sans text-[13px] text-graphite/90" role="alert">
            {formError}
          </p>
        ) : null}
        <Button type="submit" className="w-full" disabled={pending}>
          {pending ? "Создание…" : "Создать аккаунт"}
        </Button>
      </motion.form>

      <p className="text-center font-sans text-[13px] text-stone">
        Уже есть доступ?{" "}
        <Link href="/auth/login" className="border-b border-graphite/40 pb-px transition-colors hover:border-graphite">
          Вход
        </Link>
      </p>
    </FadeIn>
  );
}
