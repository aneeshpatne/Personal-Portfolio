"use client";
import styles from "./style/LLM.module.css";
import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import AICarousel from "./AI-carousel";
const data = [
  "#",
  "Aneesh's",
  "LLM",
  "Skills",
  "\n\n",

  "##",
  "🔹",
  "AI",
  "Integration",
  "\n",
  "-",
  "**Built",
  "multiple",
  "AI-powered",
  "applications**",
  "using",
  "LLMs",
  "for",
  "real-world",
  "use",
  "cases.",
  "\n",
  "-",
  "Specialized",
  "in",
  "**summarization",
  "and",
  "RAG",
  "(retrieval-augmented",
  "generation)**",
  "\n\n",

  "##",
  "🔹",
  "SDKs",
  "&",
  "APIs",
  "\n",
  "-",
  "Proficient",
  "in",
  "**OpenAI",
  "SDK,",
  "Vercel",
  "AI",
  "API,**",
  "and",
  "other",
  "AI",
  "service",
  "integrations.",
  "\n",
  "-",
  "Experience",
  "in",
  "**deploying",
  "scalable",
  "AI",
  "apps**",
  "with",
  "optimized",
  "API",
  "calls.",
  "\n\n",
];

const MatrixLLM = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.Content}>
        <div className={styles.contentHeader}>LLM</div>
        <div className={styles.contentBody}>
          <SentMessage />
          <ReceiveMessage />
        </div>
        <AICarousel />
      </div>
    </div>
  );
};

const SentMessage = function () {
  return (
    <div className={styles.sentMessage}>
      <p style={{ display: "inline-block" }}>
        Tell me about Aneesh's Skills in LLM ?
      </p>
    </div>
  );
};

const ReceiveMessage = function () {
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible && index < data.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + " " + data[index]);
        setIndex(index + 1);
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [index, isVisible]);

  return (
    <div ref={ref} className={styles.ReceiveMessage}>
      <div style={{ display: "inline-block" }}>
        <ReactMarkdown>{displayedText}</ReactMarkdown>
      </div>
    </div>
  );
};

export default MatrixLLM;
