export const runtime = "nodejs";
import { NextResponse } from "next/server";
import { getProjectBySlug } from "@/lib/projects";

export async function GET(_req, { params }) {
  const { slug } = await params;
  const data = await getProjectBySlug(slug);
  return NextResponse.json(data, {
    headers: {
      "Cache-Control": "s-maxage=86400, stale-while-revalidate=604800",
      "x-vercel-cache-tags": `project:${slug}`,
    },
  });
}
