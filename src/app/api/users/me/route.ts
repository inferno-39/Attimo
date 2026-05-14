import { auth } from "@/auth";
import { jsonOk } from "@/server/http";

export async function GET() {
  const session = await auth();
  if (!session?.user) {
    return jsonOk({
      authenticated: false,
      user: null,
    });
  }
  return jsonOk({
    authenticated: true,
    user: {
      id: session.user.id,
      email: session.user.email,
      name: session.user.name,
      role: session.user.role,
    },
  });
}
