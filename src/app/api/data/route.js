import { PrismaClient } from "@/generated/prisma";
const prisma = new PrismaClient();
export async function GET(request) {
  const data = await prisma.projects.findMany();
  if (!data) {
    return new Response(JSON.stringify({ error: "Data not found" }), {
      status: 404,
    });
  }
  return new Response(JSON.stringify(data), {
    status: 200,
  });
}
