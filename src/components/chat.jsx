"use client";

import { useChat } from "@ai-sdk/react";
import styles from "./style/chat.module.css";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import { useState, useEffect, useRef } from "react";
import { FaComments, FaExclamationTriangle } from "react-icons/fa";
import { IoMdRefresh } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

// Loading animation component
function LoadingAnimation() {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.typingIndicator}>
        <motion.span
          animate={{ scale: [0.8, 1, 0.8], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.2, repeat: Infinity, delay: 0 }}
        />
        <motion.span
          animate={{ scale: [0.8, 1, 0.8], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.2, repeat: Infinity, delay: 0.15 }}
        />
        <motion.span
          animate={{ scale: [0.8, 1, 0.8], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.2, repeat: Infinity, delay: 0.3 }}
        />
      </div>
    </div>
  );
}

// Error message component
function ErrorMessage({ message, onRetry }) {
  const isRateLimitError = message?.includes("Daily limit reached");

  return (
    <motion.div
      className={styles.errorContainer}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
      >
        <FaExclamationTriangle className={styles.errorIcon} />
      </motion.div>
      <h3>{isRateLimitError ? "Limit Reached" : "Something went wrong"}</h3>
      <p>
        {isRateLimitError
          ? "You've reached your daily limit. Please try again tomorrow."
          : message || "An error occurred. Please try again."}
      </p>
      {!isRateLimitError && (
        <motion.button
          onClick={onRetry}
          className={styles.retryButton}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <IoMdRefresh className={styles.refreshIcon} /> Retry
        </motion.button>
      )}
    </motion.div>
  );
}

// Message animation variants
const messageVariants = {
  hidden: (isUser) => ({
    opacity: 0,
    x: isUser ? 20 : -20,
    y: 10,
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2 },
  },
};

export default function Chat({ dataDump, theme = "black" }) {
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

  const containerClass = `${styles.chatContainer} ${
    theme === "black" ? styles.blackTheme : ""
  }`;

  const hasMessages = messages.some(
    (msg) => msg.role === "user" || msg.role === "assistant"
  );

  return (
    <motion.div
      className={containerClass}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <motion.div
        className={styles.chatHeader}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.3 }}
      >
        <FaComments className={styles.chatHeaderIcon} />
        <h2 className={styles.chatHeaderTitle}>Chat</h2>
      </motion.div>

      <div className={styles.chatBox} ref={chatBoxRef}>
        <AnimatePresence mode="wait">
          {errorState.isError ? (
            <ErrorMessage
              key="error"
              message={errorState.message}
              onRetry={handleRetry}
            />
          ) : hasMessages ? (
            <motion.div
              key="messages"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{ display: "contents" }}
            >
              {renderedText
                .filter(
                  (message) =>
                    message.role === "user" || message.role === "assistant"
                )
                .map((message, index) => (
                  <motion.div
                    key={message.id}
                    custom={message.role === "user"}
                    variants={messageVariants}
                    initial="hidden"
                    animate="visible"
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
                      <motion.div
                        className={styles.tokenCount}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        <small>Tokens used: {tokenMap[message.id]}</small>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
            </motion.div>
          ) : (
            <IntroChatBot key="intro" />
          )}
        </AnimatePresence>
      </div>

      <motion.div
        className={styles.chatInputContainer}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.3 }}
      >
        <form onSubmit={handleSubmit} style={{ display: "flex", flexGrow: 1 }}>
          <input
            className={styles.chatInput}
            value={input}
            placeholder="Ask something..."
            onChange={handleInputChange}
            disabled={
              errorState.isError && errorState.message?.includes("Daily limit")
            }
          />
        </form>
        <motion.button
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
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {status === "streaming" ? "Stop" : "Send"}
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

function IntroChatBot() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className={styles.introChatBot}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 className={styles.headerText} variants={itemVariants}>
        Ask me anything
      </motion.h1>
      <motion.p className={styles.introText} variants={itemVariants}>
        I can answer questions about this project&apos;s code, architecture, and
        how it works.
      </motion.p>
      <motion.p className={styles.exampleHeader} variants={itemVariants}>
        Try asking
      </motion.p>
      <motion.ul className={styles.exampleList} variants={containerVariants}>
        {[
          "What technologies does this use?",
          "How is it structured?",
          "Explain how it works",
        ].map((question, index) => (
          <motion.li
            key={index}
            variants={listItemVariants}
            whileHover={{
              x: 4,
              backgroundColor: "var(--chat-surface-hover)",
              transition: { duration: 0.15 },
            }}
          >
            {question}
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
}
