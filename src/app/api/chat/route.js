import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";
import { Redis } from "@upstash/redis";

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

  const { messages } = await req.json();

  const result = streamText({
    model: openai("gpt-4.1-nano"),
    messages: [
      {
        role: "system",
        content: `Your a bot thats on aneeshpatne.com. You are a bot that can answer questions about the project.
        You will only answer questions about the project. You will not answer any other questions.
        You will not answer any questions about yourself.
        You will not answer any questions about the project that are not related to the project.
        You must politely decline to answer any questions that are not related to the project.
        You will only answer questions about the project.
        you will answer in SHORT PRECISE answers.`,
      },
      ...messages,
    ],
  });

  return result.toDataStreamResponse();
}
