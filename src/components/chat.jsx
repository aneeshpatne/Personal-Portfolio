"use client";

import { useChat } from "@ai-sdk/react";
import styles from "./style/chat.module.css";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import { useState } from "react";
import { FaComments } from "react-icons/fa";

// Loading animation component
function LoadingAnimation() {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.typingIndicator}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

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
          [message.id]: options.usage.promptTokens,
        }));
      },
    });
  const renderedText =
    status === "submitted"
      ? [
          ...messages,
          {
            id: "loading",
            role: "assistant",
            parts: [{ type: "text", text: "" }],
          },
        ]
      : messages;
  return (
    <div className={styles.chatContainer}>
      <div className={styles.chatHeader}>
        <FaComments className={styles.chatHeaderIcon} />
        <h2 className={styles.chatHeaderTitle}>Project Chat</h2>
      </div>

      <div className={styles.chatBox}>
        {messages.some(
          (msg) => msg.role === "user" || msg.role === "assistant"
        ) ? (
          <>
            {renderedText
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
                  {message.id === "loading" ? (
                    <LoadingAnimation />
                  ) : (
                    <div>
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
                    </div>
                  )}
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
