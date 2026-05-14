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
      <div className="space-y-3 text-center">
        <h1 className="font-serif text-display-lg text-graphite">Регистрация</h1>
        <p className="font-sans text-[14px] text-stone leading-relaxed">
          Создайте аккаунт: укажите имя, email и пароль. После регистрации вы сможете сохранять избранное и оформлять заказы.
        </p>
      </div>

      <motion.form
        className="space-y-6"
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
        <AuthField htmlFor="reg-name" label="Имя" error={fieldErrors?.name?.[0]}>
          <Input
            id="reg-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Как к вам обращаться"
            required
            disabled={pending}
          />
        </AuthField>
        <AuthField htmlFor="reg-email" label="Email" error={fieldErrors?.email?.[0]}>
          <Input
            id="reg-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            required
            disabled={pending}
          />
        </AuthField>
        <AuthField htmlFor="reg-password" label="Пароль" error={fieldErrors?.password?.[0]}>
          <Input
            id="reg-password"
            name="password"
            type="password"
            autoComplete="new-password"
            placeholder="Не менее 8 символов"
            required
            disabled={pending}
          />
        </AuthField>
        <AuthField htmlFor="reg-password-confirm" label="Повторите пароль" error={fieldErrors?.passwordConfirm?.[0]}>
          <Input
            id="reg-password-confirm"
            name="passwordConfirm"
            type="password"
            autoComplete="new-password"
            placeholder="Тот же пароль ещё раз"
            required
            disabled={pending}
          />
        </AuthField>

        <div className="space-y-2">
          <label className="flex cursor-pointer items-start gap-3 font-sans text-[13px] leading-snug text-stone">
            <input
              type="checkbox"
              name="acceptTerms"
              className="mt-1 h-4 w-4 shrink-0 rounded-none border border-line text-graphite accent-graphite"
              disabled={pending}
            />
            <span>
              Я согласен с{" "}
              <Link href="/about" className="border-b border-graphite/35 pb-px text-graphite hover:border-graphite">
                условиями использования
              </Link>{" "}
              и обработкой персональных данных.
            </span>
          </label>
          {fieldErrors?.acceptTerms?.[0] ? (
            <p className="font-sans text-[12px] text-graphite/90" role="alert">
              {fieldErrors.acceptTerms[0]}
            </p>
          ) : null}
        </div>

        {formError ? (
          <p className="text-center font-sans text-[13px] text-graphite/90" role="alert">
            {formError}
          </p>
        ) : null}
        <Button type="submit" className="w-full" disabled={pending}>
          {pending ? "Регистрация…" : "Зарегистрироваться"}
        </Button>
      </motion.form>

      <p className="text-center font-sans text-[13px] text-stone">
        Уже есть аккаунт?{" "}
        <Link href="/auth/login" className="border-b border-graphite/40 pb-px transition-colors hover:border-graphite">
          Войти
        </Link>
      </p>
    </FadeIn>
  );
}
