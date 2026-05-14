import { AppError } from "@/server/http";

export function requireDatabase() {
  if (!process.env.DATABASE_URL) {
    throw new AppError("Требуется переменная окружения DATABASE_URL", 503);
  }
}
