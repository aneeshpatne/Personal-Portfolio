export const runtime = "nodejs";
import { eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { projects } from "@/lib/schema";
import { projectList } from "@/lib/schema";
import { NextResponse } from "next/server";
export async function GET(_req, { params }) {
  const { slug } = await params;
  const data =
    (await db.query.projectList.findFirst({
      where: eq(projectList.id, slug),
    })) || null;
  return NextResponse.json(data, {
    headers: {
      "Cache-Control": "s-maxage=86400, stale-while-revalidate=604800",
      "x-vercel-cache-tags": `project:${slug}`,
    },
  });
}
