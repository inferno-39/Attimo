import { auth } from "@/auth";
import { AppError } from "@/server/http";

export async function requireSessionUserId(): Promise<string> {
  const session = await auth();
  const id = session?.user?.id;
  if (!id) throw new AppError("Требуется авторизация", 401);
  return id;
}

export async function optionalSessionUserId(): Promise<string | null> {
  const session = await auth();
  return session?.user?.id ?? null;
}
