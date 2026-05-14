import { prisma } from "@/lib/prisma";

export type CollectionDto = { id: string; title: string; slug: string; description: string | null };

export async function listCollections(): Promise<CollectionDto[]> {
  if (!process.env.DATABASE_URL) return [];
  try {
    const rows = await prisma.collection.findMany({ orderBy: { title: "asc" } });
    return rows.map((c) => ({
      id: c.id,
      title: c.title,
      slug: c.slug,
      description: c.description,
    }));
  } catch {
    return [];
  }
}
