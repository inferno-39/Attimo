import { jsonOk } from "@/server/http";
import { listCategories } from "@/services/category-service";

export async function GET() {
  const data = await listCategories();
  return jsonOk(data);
}
