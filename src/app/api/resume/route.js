import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";
import { Redis } from "@upstash/redis";
import { resumeData } from "./resume_data";
export const maxDuration = 30;

const redis = Redis.fromEnv();

export async function POST(req) {
  const today = new Date().toISOString().split("T")[0];
  const key = `chat:${today}`;
  let count = 0;
  try {
    count = parseInt((await redis.get(key)) || 0);
    if (count > 15) {
      return new Response(JSON.stringify({ error: "Daily limit reached" }), {
        status: 429,
        headers: { "Content-Type": "application/json" },
      });
    }
    await redis.incr(key);
    await redis.expire(key, 86400); // Set expiration to 24 hours
  } catch (error) {
    console.error("Error accessing Redis:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
  // Get the request origin
  const origin = req.headers.get("origin") || "";
  // Get the allowed origin from environment variable
  const allowedOrigin = process.env.NEXT_PUBLIC_URL || "";

  const { messages } = await req.json();

  const result = streamText({
    model: openai.responses("gpt-4.1-nano"),
    system: `
      ${resumeData}
      You are a chatbot for aneeshpatne.com.
      You answer questions based strictly on this resume.`,
    messages,
  });

  // CORS check and headers for streaming response
  const responseHeaders = new Headers({
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
    Connection: "keep-alive",
  });

  // Only add the Access-Control-Allow-Origin if the origin matches our allowed origin
  if (origin === allowedOrigin) {
    responseHeaders.set("Access-Control-Allow-Origin", origin);
  }

  // Add the headers to the streaming response
  const response = result.toDataStreamResponse();
  const headers = response.headers;

  // Copy our CORS headers to the response
  for (const [key, value] of responseHeaders.entries()) {
    headers.set(key, value);
  }

  return response;
}

// Handle OPTIONS requests for CORS preflight
export async function OPTIONS(request) {
  // Get the request origin
  const origin = request.headers.get("origin") || "";
  // Get the allowed origin from environment variable
  const allowedOrigin = process.env.NEXT_PUBLIC_URL || "";

  const headers = new Headers({
    "Access-Control-Allow-Methods": "POST",
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
