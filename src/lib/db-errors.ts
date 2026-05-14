import { Prisma } from "@prisma/client";
import { AppError } from "@/server/http";

/** Превращает типичные ошибки Prisma в AppError для API. */
export function mapPrismaError(e: unknown): AppError | null {
  if (e instanceof Prisma.PrismaClientKnownRequestError) {
    switch (e.code) {
      case "P2002":
        return new AppError("Запись с такими данными уже существует", 409);
      case "P2025":
        return new AppError("Запись не найдена", 404);
      case "P2003":
        return new AppError("Нарушение связи между сущностями", 400);
      default:
        return null;
    }
  }
  return null;
}
