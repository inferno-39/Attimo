import { jsonOk } from "@/server/http";
import { listCollections } from "@/services/collection-service";

export async function GET() {
  const data = await listCollections();
  return jsonOk(data);
}
