import { NextResponse } from "next/server";
import { listProducts } from "@/services/product-service";

export async function GET() {
  try {
    const products = await listProducts(false);
    return NextResponse.json({ data: products });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
  }
}
