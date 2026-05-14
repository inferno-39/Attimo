import { NextResponse } from "next/server";
import { mapPrismaError } from "@/lib/db-errors";

export function jsonOk<T>(data: T, init?: number) {
  return NextResponse.json({ data }, { status: init ?? 200 });
}

export function jsonError(message: string, status = 400, extras?: Record<string, unknown>) {
  return NextResponse.json({ error: message, ...extras }, { status });
}

export class AppError extends Error {
  constructor(
    message: string,
    public readonly status = 400,
  ) {
    super(message);
    this.name = "AppError";
  }
}

export function handleApiError(e: unknown) {
  if (e instanceof AppError) {
    return jsonError(e.message, e.status);
  }
  const mapped = mapPrismaError(e);
  if (mapped) {
    return jsonError(mapped.message, mapped.status);
  }
  console.error(e);
  return jsonError("Внутренняя ошибка сервера", 500);
}
