export const runtime = "nodejs";
import { eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { projects } from "@/lib/schema";
export async function GET(_req, { params }) {
  const { slug } = params;
  const data =
    (await db.query.projects.findFirst({
      where: eq(projects.id, slug),
    })) || null;
  return Response.json(data);
}
