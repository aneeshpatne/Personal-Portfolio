"use client";

import { useChat } from "@ai-sdk/react";
import styles from "./style/chat.module.css";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import { useState } from "react";
export default function Chat({ dataDump }) {
  const [tokenMap, setTokenMap] = useState({});
  const { messages, input, handleInputChange, handleSubmit, status, stop } =
    useChat({
      initialMessages: [
        {
          role: "system",
          content:
            "This is all the data you have about the project you are working on: " +
            dataDump,
        },
      ],
      onFinish: (message, options) => {
        setTokenMap((prev) => ({
          ...prev,
          [message.id]: options.usage.totalTokens,
        }));
      },
    });

  return (
    <div className={styles.chatContainer}>
      <div className={styles.chatBox}>
        {messages.some(
          (msg) => msg.role === "user" || msg.role === "assistant"
        ) ? (
          <>
            {messages
              .filter(
                (message) =>
                  message.role === "user" || message.role === "assistant"
              )
              .map((message) => (
                <div
                  key={message.id}
                  className={`${styles.messageText} ${
                    message.role === "user" ? styles.user : ""
                  }`}
                >
                  {message.parts.map((part, i) => {
                    if (part.type === "text") {
                      return (
                        <div key={`${message.id}-${i}`}>
                          <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            rehypePlugins={[rehypeHighlight]}
                          >
                            {part.text}
                          </ReactMarkdown>
                        </div>
                      );
                    }
                    return null;
                  })}
                  {message.role === "assistant" && tokenMap[message.id] && (
                    <div className={styles.tokenCount}>
                      <small>Tokens used: {tokenMap[message.id]}</small>
                    </div>
                  )}
                </div>
              ))}
          </>
        ) : (
          <IntroChatBot />
        )}
      </div>

      <div className={styles.chatInputContainer}>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexGrow: 1 }}>
          <input
            className={styles.chatInput}
            value={input}
            placeholder="Type your message..."
            onChange={handleInputChange}
          />
        </form>
        <button
          className={styles.chatButton}
          onClick={status === "streaming" ? stop : handleSubmit}
        >
          {status === "streaming" ? "Stop" : "Send"}
        </button>
      </div>
    </div>
  );
}
function IntroChatBot() {
  return (
    <div className={styles.introChatBot}>
      <h1 className={styles.headerText}>Welcome to the Project Chat!</h1>
      <p className={styles.introText}>
        I'm your AI assistant with knowledge about this project's codebase and
        documentation.
      </p>
      <p className={styles.exampleHeader}>Example questions:</p>
      <ul className={styles.exampleList}>
        <li>What technologies does this project use?</li>
        <li>How is the application structured?</li>
        <li>Can you explain how it works?</li>
      </ul>
    </div>
  );
}
