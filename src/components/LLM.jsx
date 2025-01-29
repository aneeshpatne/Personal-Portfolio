"use client";
import styles from "./style/LLM.module.css";
import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
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
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas dimensions
    const parentElement = canvas.parentElement;
    const { width, height } = parentElement.getBoundingClientRect();
    canvas.width = width;
    canvas.height = height;

    const fontSize = 16;
    const columns = canvas.width / fontSize;

    const drops = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    function draw() {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#0F0";
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillText(text, x, y);

        if (y > canvas.height && Math.random() > 0.99) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    }

    const intervalId = setInterval(draw, 33);

    const handleResize = () => {
      const { width, height } = parentElement.getBoundingClientRect();
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.Container}>
      <canvas className={styles.Canvas} ref={canvasRef} />
      <div className={styles.Content}>
        <div className={styles.contentHeader}>LLM</div>
        <div className={styles.contentBody}>
          <SentMessage />
          <ReceiveMessage />
        </div>
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
