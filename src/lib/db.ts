import { AppError } from "@/server/http";

/** Без `DATABASE_URL` сервисы с БД не запускаются (каталог уходит в mock). */
export function requireDatabase() {
  if (!process.env.DATABASE_URL) {
    throw new AppError("Требуется переменная окружения DATABASE_URL", 503);
  }
}

/** На Railway / Neon тот же ключ `DATABASE_URL`; при необходимости добавьте `?sslmode=require` в URI. */
