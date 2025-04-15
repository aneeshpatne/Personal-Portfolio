"use client";

import { useChat } from "@ai-sdk/react";
import styles from "./style/resume.module.css";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import { useState, useEffect, useRef } from "react";
import { FaComments, FaExclamationTriangle } from "react-icons/fa";
import { IoMdRefresh } from "react-icons/io";

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

// Error message component
function ErrorMessage({ message, onRetry }) {
  const isRateLimitError = message?.includes("Daily limit reached");

  return (
    <div className={styles.errorContainer}>
      <FaExclamationTriangle className={styles.errorIcon} />
      <h3>
        {isRateLimitError ? "Daily Limit Reached" : "Something went wrong"}
      </h3>
      <p>
        {isRateLimitError
          ? "You've reached your chat limit for today. Please check back tomorrow."
          : message ||
            "There was an error processing your request. Please try again later."}
      </p>
      {!isRateLimitError && (
        <button onClick={onRetry} className={styles.retryButton}>
          <IoMdRefresh className={styles.refreshIcon} /> Try Again
        </button>
      )}
    </div>
  );
}

export default function Chat({ dataDump }) {
  const [tokenMap, setTokenMap] = useState({});
  const chatBoxRef = useRef(null);
  const [errorState, setErrorState] = useState({ isError: false, message: "" });

  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    status,
    stop,
    error,
    reload,
  } = useChat({
    initialMessages: [
      {
        role: "system",
        content:
          "This is all the data you have about the project you are working on: " +
          dataDump,
      },
    ],
    api: "/api/chat",
    onFinish: (message, options) => {
      setTokenMap((prev) => ({
        ...prev,
        [message.id]: options.usage.promptTokens,
      }));
    },
    onError: (error) => {
      setErrorState({
        isError: true,
        message: error.message || "An error occurred during the chat.",
      });
    },
  });

  // Check if error exists
  useEffect(() => {
    if (error) {
      setErrorState({
        isError: true,
        message: error.message || "An error occurred during the chat.",
      });
    }
  }, [error]);

  const handleRetry = () => {
    setErrorState({ isError: false, message: "" });
    reload();
  };

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

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages, status]);

  return (
    <div className={styles.chatContainer}>
      <div className={styles.chatHeader}>
        <FaComments className={styles.chatHeaderIcon} />
        <h2 className={styles.chatHeaderTitle}>Resume.AI</h2>
      </div>

      <div className={styles.chatBox} ref={chatBoxRef}>
        {errorState.isError ? (
          <ErrorMessage message={errorState.message} onRetry={handleRetry} />
        ) : messages.some(
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
            disabled={
              errorState.isError && errorState.message?.includes("Daily limit")
            }
          />
        </form>
        <button
          className={`${styles.chatButton} ${
            status === "streaming" ? styles.stop : ""
          } ${
            errorState.isError && errorState.message?.includes("Daily limit")
              ? styles.disabled
              : ""
          }`}
          onClick={status === "streaming" ? stop : handleSubmit}
          disabled={
            errorState.isError && errorState.message?.includes("Daily limit")
          }
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
      <h1 className={styles.headerText}>Welcome to Resume.AI!</h1>
      <p className={styles.introText}>
        I&apos;m your AI assistant for Aneesh&apos;s Resume, Projects, and
        Skills. Ask me anything!
      </p>
      <p className={styles.exampleHeader}>Example questions:</p>
      <ul className={styles.exampleList}>
        <li>What are Aneesh&apos;s skills?</li>
        <li>Does Aneesh know this?</li>
        <li>Can Aneesh handle this project?</li>
      </ul>
    </div>
  );
}
