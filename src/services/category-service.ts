import { prisma } from "@/lib/prisma";

export type CategoryDto = { id: string; title: string; slug: string };

export async function listCategories(): Promise<CategoryDto[]> {
  if (!process.env.DATABASE_URL) return [];
  try {
    const rows = await prisma.category.findMany({ orderBy: { title: "asc" } });
    return rows.map((c) => ({ id: c.id, title: c.title, slug: c.slug }));
  } catch {
    return [];
  }
}
