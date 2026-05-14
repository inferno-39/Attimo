import { NextResponse } from "next/server";
import { handleApiError, jsonOk } from "@/server/http";
import { requireDatabase } from "@/lib/db";
import { createOrderSchema } from "@/server/validation";
import { createOrder, listOrdersForUser } from "@/services/order-service";
import { optionalSessionUserId, requireSessionUserId } from "@/server/session";

export async function GET() {
  try {
    requireDatabase();
    const userId = await requireSessionUserId();
    const orders = await listOrdersForUser(userId);
    return jsonOk(orders);
  } catch (e) {
    return handleApiError(e);
  }
}

export async function POST(request: Request) {
  try {
    requireDatabase();
    const body = await request.json();
    const parsed = createOrderSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: "Некорректное тело запроса", details: parsed.error.flatten() }, { status: 400 });
    }
    const userId = await optionalSessionUserId();
    const order = await createOrder(userId, parsed.data.items);
    return NextResponse.json({ data: order }, { status: 201 });
  } catch (e) {
    return handleApiError(e);
  }
}
