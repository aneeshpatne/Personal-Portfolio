import { PrismaClient } from "@/generated/prisma";
const prisma = new PrismaClient();

export async function GET(request, { params }) {
  // Get the request origin
  const origin = request.headers.get("origin") || "";
  // Get the allowed origin from environment variable
  const allowedOrigin = process.env.NEXT_PUBLIC_URL || "";

  // CORS check
  const headers = new Headers({
    "Content-Type": "application/json",
    "Access-Control-Allow-Methods": "GET",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  });

  // Only add the Access-Control-Allow-Origin if the origin matches our allowed origin
  if (origin === allowedOrigin) {
    headers.set("Access-Control-Allow-Origin", origin);
  }

  const { slug } = await params;
  const data = await prisma.projects.findUnique({
    where: {
      id: slug,
    },
  });

  if (!data) {
    return new Response(JSON.stringify({ error: "Data not found" }), {
      status: 404,
      headers: headers,
    });
  }

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: headers,
  });
}

// Handle OPTIONS requests for CORS preflight
export async function OPTIONS(request) {
  // Get the request origin
  const origin = request.headers.get("origin") || "";
  // Get the allowed origin from environment variable
  const allowedOrigin = process.env.NEXT_PUBLIC_URL || "";

  const headers = new Headers({
    "Access-Control-Allow-Methods": "GET",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Access-Control-Max-Age": "86400", // 24 hours cache for preflight
  });

  // Only add the Access-Control-Allow-Origin if the origin matches our allowed origin
  if (origin === allowedOrigin) {
    headers.set("Access-Control-Allow-Origin", origin);
  }

  return new Response(null, {
    status: 204, // No content response for OPTIONS
    headers: headers,
  });
}
