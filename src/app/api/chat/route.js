import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";
import { Redis } from "@upstash/redis";

export const maxDuration = 5;

const redis = Redis.fromEnv();

export async function POST(req) {
  try {
    return new Response(JSON.stringify({ error: "Service unavailable" }), {
      status: 503,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
