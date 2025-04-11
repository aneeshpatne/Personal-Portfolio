import { PrismaClient } from "@/generated/prisma";
const prisma = new PrismaClient();
export async function GET(request, { params }) {
  const { slug } = await params;
  const data = await prisma.projects.findUnique({
    where: {
      id: slug,
    },
  });
  if (!data) {
    return new Response(JSON.stringify({ error: "Data not found" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
