"use server";

import { registerFormSchema } from "@/server/validation";
import { AppError } from "@/server/http";
import { createUser } from "@/services/user-service";

export type RegisterFormState = {
  error?: string;
  fieldErrors?: Record<string, string[]>;
  success?: boolean;
};

export async function registerUserAction(formData: FormData): Promise<RegisterFormState> {
  const parsed = registerFormSchema.safeParse({
    name: String(formData.get("name") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    password: String(formData.get("password") ?? ""),
    passwordConfirm: String(formData.get("passwordConfirm") ?? ""),
    acceptTerms: formData.get("acceptTerms") === "on",
  });
  if (!parsed.success) {
    return { fieldErrors: parsed.error.flatten().fieldErrors as Record<string, string[]> };
  }
  try {
    await createUser({
      email: parsed.data.email.toLowerCase(),
      password: parsed.data.password,
      name: parsed.data.name,
    });
  } catch (e) {
    if (e instanceof AppError) return { error: e.message };
    console.error(e);
    return { error: "Не удалось создать аккаунт" };
  }
  return { success: true };
}
