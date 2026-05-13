import { NextResponse } from "next/server";
import { getProductById } from "@/services/product-service";

type Params = Promise<{ id: string }>;

export async function GET(_request: Request, context: { params: Params }) {
  const { id } = await context.params;
  const product = await getProductById(id);

  if (!product) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json({ data: product });
}
