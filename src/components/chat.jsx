"use client";

import { useChat } from "@ai-sdk/react";
import styles from "./style/chat.module.css";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit, status, stop } =
    useChat();

  return (
    <div className={styles.chatContainer}>
      <div className={styles.chatBox}>
        {messages.map((message) => (
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
          </div>
        ))}
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
