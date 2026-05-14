import { NextResponse } from "next/server";
import { handleApiError, jsonOk } from "@/server/http";
import { requireDatabase } from "@/lib/db";
import { wishlistBodySchema } from "@/server/validation";
import { addToWishlist, listWishlist, removeFromWishlist } from "@/services/wishlist-service";
import { requireSessionUserId } from "@/server/session";

export async function GET() {
  try {
    requireDatabase();
    const userId = await requireSessionUserId();
    const data = await listWishlist(userId);
    return jsonOk(data);
  } catch (e) {
    return handleApiError(e);
  }
}

export async function POST(request: Request) {
  try {
    requireDatabase();
    const userId = await requireSessionUserId();
    const body = await request.json();
    const parsed = wishlistBodySchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: "Некорректное тело запроса", details: parsed.error.flatten() }, { status: 400 });
    }
    await addToWishlist(userId, parsed.data.productId);
    return jsonOk({ ok: true });
  } catch (e) {
    return handleApiError(e);
  }
}

export async function DELETE(request: Request) {
  try {
    requireDatabase();
    const userId = await requireSessionUserId();
    const { searchParams } = new URL(request.url);
    const productId = searchParams.get("productId");
    if (!productId) {
      return NextResponse.json({ error: "Укажите productId в query" }, { status: 400 });
    }
    await removeFromWishlist(userId, productId);
    return jsonOk({ ok: true });
  } catch (e) {
    return handleApiError(e);
  }
}
