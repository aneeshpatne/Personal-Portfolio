import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";

export const maxDuration = 30;

export async function POST(req) {
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

  return result.toDataStreamResponse();
}
