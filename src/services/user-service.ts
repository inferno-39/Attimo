import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { AppError } from "@/server/http";
import { requireDatabase } from "@/lib/db";

export async function findUserByEmail(email: string) {
  return prisma.user.findUnique({ where: { email: email.toLowerCase().trim() } });
}

export async function createUser(input: { email: string; password: string; name: string }) {
  requireDatabase();
  const email = input.email.toLowerCase().trim();
  const existing = await findUserByEmail(email);
  if (existing) {
    throw new AppError("Пользователь с таким email уже существует", 409);
  }
  const passwordHash = await bcrypt.hash(input.password, 10);
  return prisma.user.create({
    data: {
      email,
      name: input.name.trim() || null,
      password: passwordHash,
    },
    select: { id: true, email: true, name: true, role: true, createdAt: true },
  });
}
