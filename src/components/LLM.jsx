"use client";
import styles from "./style/LLM.module.css";
import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import AICarousel from "./AI-carousel";

const data = [
  "# AI & LLM Expertise\n\n",
  "## 🤖 Large Language Models\n",
  "- Expert in **GPT-4, Claude, and open-source LLMs**\n",
  "- Developed **production-ready AI applications**\n",
  "- Implemented **RAG systems**\n\n",

  "## 🛠️ Technical Integration\n",
  "- Proficient with **OpenAI and Hugging Face**\n",
  "- Built **scalable AI infrastructure**\n",
  "- Experience with **vector databases**\n\n",

  "## 🎯 Applications\n",
  "- Created **AI chatbots**\n",
  "- Developed **document analysis**\n",
  "- Built **content generation tools**\n",
];

function MatrixLLM() {
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim() === "") return;
    setInput("");
  };

  return (
    <div className={styles.Container}>
      <div className={styles.Content}>
        <div className={styles.contentHeader}>
          <span className={styles.gradientText}>AI</span> &{" "}
          <span className={styles.gradientText}>LLM</span>
        </div>
        <div className={styles.contentBody}>
          <SentMessage />
          <ReceiveMessage />
        </div>
        <div className={styles.chatInputContainer}>
          <div className={styles.chatInput}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about my AI expertise..."
              className={styles.chatInputField}
            />
            <button onClick={sendMessage} className={styles.chatSendButton}>
              <svg viewBox="0 0 24 24" className={styles.sendIcon}>
                <path
                  fill="currentColor"
                  d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className={styles.carouselWrapper}>
          <AICarousel />
        </div>
      </div>
    </div>
  );
}

const SentMessage = function () {
  return (
    <div className={styles.sentMessageContainer}>
      <div className={styles.sentMessage}>
        <p>Tell me about Aneesh&apos;s Skills in LLM ?</p>
      </div>
      <div className={styles.avatarContainer}>
        <img
          src="/assets/img/placeholder.jpg"
          alt="User"
          className={styles.avatar}
        />
      </div>
    </div>
  );
};

const ReceiveMessage = function () {
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Disconnect after first intersection
        }
      },
      { threshold: 0.8 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => {
      observer.disconnect();
      clearTimeout(loadingTimer);
    };
  }, []);

  useEffect(() => {
    if (isVisible && !isLoading && index < data.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + " " + data[index]);
        setIndex(index + 1);
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [index, isVisible, isLoading]);

  return (
    <div className={styles.receiveMessageContainer}>
      <div className={styles.avatarContainer}>
        <img
          src="/assets/img/aneesh3.png"
          alt="Aneesh"
          className={styles.avatar}
        />
      </div>
      <div ref={ref} className={styles.receiveMessage}>
        {isLoading ? (
          <div className={styles.loadingContainer}>
            <div className={styles.loadingDot}></div>
            <div className={styles.loadingDot}></div>
            <div className={styles.loadingDot}></div>
          </div>
        ) : (
          <div className={styles.markdownContainer}>
            <ReactMarkdown>{displayedText}</ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  );
};

export default MatrixLLM;
