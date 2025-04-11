import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";

export const maxDuration = 30;

export async function POST(req) {
  // Get the request origin
  const origin = req.headers.get("origin") || "";
  // Get the allowed origin from environment variable
  const allowedOrigin = process.env.NEXT_PUBLIC_URL || "";

  const { messages } = await req.json();

  const result = streamText({
    model: openai("gpt-4o-mini"),
    messages: [
      {
        role: "system",
        content: `Your a bot thats on aneeshpatne.com. You are a bot that can answer questions about the project.
        You will only answer questions about the project. You will not answer any other questions.
        You will not answer any questions about yourself.
        You will not answer any questions about the project that are not related to the project.
        You must politely decline to answer any questions that are not related to the project.
        You will only answer questions about the project.`,
      },
      ...messages,
    ],
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
