import { NextResponse } from "next/server";
import { handleApiError, jsonOk } from "@/server/http";
import { productsQuerySchema } from "@/server/validation";
import { queryProductsApi } from "@/services/product-service";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const raw = Object.fromEntries(searchParams.entries());
    const parsed = productsQuerySchema.safeParse(raw);
    if (!parsed.success) {
      return NextResponse.json({ error: "Некорректные параметры", details: parsed.error.flatten() }, { status: 400 });
    }
    const products = await queryProductsApi(parsed.data);
    return jsonOk(products);
  } catch (e) {
    return handleApiError(e);
  }
}
