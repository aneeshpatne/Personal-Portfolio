export const runtime = "nodejs";
import { eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { projects } from "@/lib/schema";
import { NextResponse } from "next/server";
export async function GET(_req, { params }) {
  const { slug } = params;
  const data =
    (await db.query.projects.findFirst({
      where: eq(projects.id, slug),
    })) || null;
  return NextResponse.json(project ?? null, {
    headers: {
      "Cache-Control": "s-maxage=86400, stale-while-revalidate=604800",
      "x-vercel-cache-tags": `project:${params.slug}`,
    },
  });
}
