"use client";
import { Instrument_Serif } from "next/font/google";
import styles from "./style/LLM_new.module.css";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { MausamFlowchart } from "./MausamFlowchart.jsx";
import { ChatFlowchart } from "./ChatFlowchart.jsx";
import { TazaKhabarFlowchart } from "./TazaKhabarFlowchart.jsx";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
});

const headings = [
  "Automated Systems",
  "End to End Pipelines",
  "Model Agnostic",
  "Agentic Workflows",
  "Predictive Analytics",
];

export function LLM_new() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % headings.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.LLMContainer}>
      <div className={styles.HeadingContainer}>
        <h1 className={`${styles.Heading}  ${instrumentSerif.className}`}>
          Artificial Intelligence
        </h1>
        <p className={styles.Subtext}>
          Building Smart Systems with Artificial Intelligence
        </p>
      </div>
      <div className={styles.Item}>
        <p className={styles.ItemText}>
          I build intelligent AI systems with data ingestion pipelines, RAG
          architectures, vector databases, multi-LLM orchestration, real-time
          streaming, and agentic tool calling.
        </p>
        <h1 className={styles.HeadingText}>
          <AnimatePresence mode="wait">
            <motion.div
              key={headings[index]}
              initial={{ opacity: 0, scale: 0.92, filter: "blur(6px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 1.06, filter: "blur(6px)" }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              {headings[index]}
            </motion.div>
          </AnimatePresence>
        </h1>
        <div className={styles.ShowcaseSection}>
          <div className={styles.ShowcaseCard}>
            <h2
              className={`${styles.ShowcaseTitle} ${instrumentSerif.className}`}
            >
              Some of My AI Powered Creations
            </h2>
            <div className={styles.CardTextContent}>
              <p className={styles.ProjectText}>
                <span className={styles.HighlightTitle}>Mausam</span> is an AI
                weather intelligence platform with a pipeline that fetches and
                processes radar images, blends live weather data, and generates
                concise reporting. It triggers tools to send email, post Telegram
                alerts, and notify based on conditions.
              </p>
            </div>
            <MausamFlowchart />
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}></div>
            <div className={styles.CardTextContent}>
              <p className={styles.ProjectText}>
                <span className={styles.HighlightTitle}>Chat</span> is a
                multi-model AI chat app with a unified interface for providers.
                Users pick a model and the system keeps the experience
                consistent. The backend routes requests to the chosen provider,
                handling auth, formatting, and response normalization. The
                architecture keeps Chat scalable, flexible, and easy to extend.
              </p>
            </div>
            <ChatFlowchart />
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}></div>
            <div className={styles.CardTextContent}>
              <p className={styles.ProjectText}>
                <span className={styles.HighlightTitle}>Taza Khabar</span> is an
                AI investigative news platform that delivers unbiased insights
                beyond headlines. It continuously scrapes and analyzes trusted
                sources to produce context-rich reports, using agentic web search
                and automated verification to reduce bias. A scalable FastAPI
                backend with PostgreSQL enables fast processing and reliable
                storage, while a Next.js frontend keeps reading smooth.
              </p>
            </div>
            <TazaKhabarFlowchart />
          </div>
        </div>
      </div>
    </div>
  );
}
