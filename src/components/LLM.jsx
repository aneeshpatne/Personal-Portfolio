"use client";
import styles from "./style/LLM.module.css";
import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
const data = [
  "**Aneesh's**",
  " **Skills**",
  " **in**",
  " **LLMs**",
  "- **Expert**",
  " in",
  " AI",
  " Integration",
  " –",
  " Has",
  " built",
  " multiple",
  " applications",
  " leveraging",
  " LLMs",
  " for",
  " real-world",
  " use",
  " cases,",
  " including",
  " **summarization,**",
  " retrieval-augmented",
  " generation",
  "(RAG),",
  " and",
  " resume",
  " optimization.",

  "- **Strong**",
  " SDK",
  "&",
  " API",
  " Knowledge",
  " –",
  " Proficient",
  " in",
  " **OpenAI",
  " SDK,**",
  " Vercel",
  " AI",
  " API,**",
  " and",
  " other",
  " AI",
  " service",
  " integrations",
  " for",
  " scalable",
  " app",
  " development.",

  "- **Product**",
  " Development",
  " Experience",
  " –",
  " Successfully",
  " developed",
  " AI-powered",
  " apps",
  " like:",
  "  - **TLDR**",
  "(Chrome",
  " Extension)**",
  " –",
  " AI-based",
  " website",
  " summarizer.",
  "  - **Resume.AI**",
  " –",
  " RAG-based",
  " LLM",
  " for",
  " answering",
  " resume-related",
  " questions.",
  "  - **EasyResume**",
  " –",
  " AI-driven",
  " bullet",
  " point",
  " summarization",
  " for",
  " resumes.",
  "  - **Socio-Economic**",
  " Impact",
  " Analysis**",
  " –",
  " AI",
  " insights",
  " on",
  " life",
  " expectancy",
  " trends.",

  "- **Machine**",
  " Learning",
  " Expertise",
  " –",
  " Built",
  " a",
  " **predictive",
  " ML",
  " model**",
  " for",
  " life",
  " expectancy",
  " in",
  " India",
  " based",
  " on",
  " PM2.5",
  " pollution",
  " levels.",

  "- **Data-Driven**",
  " Approach",
  " –",
  " Skilled",
  " in",
  " **preprocessing,**",
  " fine-tuning,",
  " and",
  " optimizing",
  " LLM",
  " outputs",
  " for",
  " better",
  " accuracy",
  " and",
  " performance.",

  "- **Experience**",
  " with",
  " Deployment",
  "&",
  " Scalability",
  " –",
  " Has",
  " deployed",
  " AI",
  " models",
  " as",
  " APIs,",
  " web",
  " apps,",
  " and",
  " interactive",
  " dashboards",
  " for",
  " accessibility",
  " and",
  " impact.",

  "- **Strong**",
  " Understanding",
  " of",
  " LLM",
  " Architectures",
  " –",
  " Knowledgeable",
  " in",
  " **RAG,**",
  " prompt",
  " engineering,",
  " embeddings,",
  " and",
  " model",
  " fine-tuning",
  " for",
  " domain-specific",
  " applications.",
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
  return (
    <div className={styles.ReceiveMessage}>
      <p style={{ display: "inline-block" }}>Aneesh's Skills</p>
    </div>
  );
};
export default MatrixLLM;
