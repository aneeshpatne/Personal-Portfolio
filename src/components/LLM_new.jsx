"use client";
import { Instrument_Serif } from "next/font/google";
import styles from "./style/LLM_new.module.css";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { MausamFlowchart } from "./MausamFlowchart.jsx";

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
                <span className={styles.HighlightTitle}>Mausam</span> is a AI
                weather intelligence platform that has a data pipeline to fetch
                and process radar images, combines it with live weather data to
                generate consise reporting. It invokes tools to send mail, send
                message on telegram and issue alerts based on weather
                conditions.
              </p>
            </div>
            <MausamFlowchart />
          </div>
        </div>
      </div>
    </div>
  );
}
