export const runtime = "nodejs";
import { eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { projects } from "@/lib/schema";
import { NextResponse } from "next/server";
export async function GET(_req, { params }) {
  // Await params (Next.js may provide params as a promise in some dynamic contexts)
  const { slug } = await params;
  const data =
    (await db.query.projects.findFirst({
      where: eq(projects.id, slug),
    })) || null;
  return NextResponse.json(data, {
    headers: {
      "Cache-Control": "s-maxage=86400, stale-while-revalidate=604800",
      // Use the already awaited slug instead of accessing params.slug directly
      "x-vercel-cache-tags": `project:${slug}`,
    },
  });
}
