import { prisma } from "@/lib/prisma";
import { AppError } from "@/server/http";
import { requireDatabase } from "@/lib/db";
import { prismaProductToDto, type ProductWithRelations } from "@/lib/product-mapper";
import { productInclude } from "@/lib/prisma-includes";
import type { Product } from "@/types/product";

async function ensureWishlist(userId: string) {
  return prisma.wishlist.upsert({
    where: { userId },
    create: { userId },
    update: {},
  });
}

export async function listWishlist(userId: string): Promise<Product[]> {
  requireDatabase();
  const wishlist = await prisma.wishlist.findUnique({
    where: { userId },
    include: {
      items: {
        orderBy: { createdAt: "desc" },
        include: { product: { include: productInclude } },
      },
    },
  });
  if (!wishlist) return [];
  return wishlist.items.map((w) => prismaProductToDto(w.product as ProductWithRelations));
}

export async function addToWishlist(userId: string, productId: string): Promise<void> {
  requireDatabase();
  const product = await prisma.product.findUnique({ where: { id: productId } });
  const resolved =
    product ?? (await prisma.product.findUnique({ where: { slug: productId } }));
  if (!resolved) throw new AppError("Изделие не найдено", 404);

  const wishlist = await ensureWishlist(userId);
  await prisma.wishlistItem.upsert({
    where: {
      wishlistId_productId: { wishlistId: wishlist.id, productId: resolved.id },
    },
    create: { wishlistId: wishlist.id, productId: resolved.id },
    update: {},
  });
}

export async function removeFromWishlist(userId: string, productId: string): Promise<void> {
  requireDatabase();
  const product = await prisma.product.findFirst({
    where: { OR: [{ id: productId }, { slug: productId }] },
  });
  if (!product) throw new AppError("Изделие не найдено", 404);

  const wishlist = await prisma.wishlist.findUnique({ where: { userId } });
  if (!wishlist) return;

  await prisma.wishlistItem.deleteMany({
    where: { wishlistId: wishlist.id, productId: product.id },
  });
}
