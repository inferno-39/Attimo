import { NextResponse } from "next/server";
import { handleApiError, jsonOk } from "@/server/http";
import { requireDatabase } from "@/lib/db";
import { registerSchema } from "@/server/validation";
import { createUser } from "@/services/user-service";

/** Регистрация: создаёт пользователя (пароль хэшируется). После — вход через NextAuth credentials. */
export async function POST(request: Request) {
  try {
    requireDatabase();
    const body = await request.json();
    const parsed = registerSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: "Ошибка валидации", details: parsed.error.flatten() }, { status: 400 });
    }
    const user = await createUser(parsed.data);
    return NextResponse.json({ data: user }, { status: 201 });
  } catch (e) {
    return handleApiError(e);
  }
}
