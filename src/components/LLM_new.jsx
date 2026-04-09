"use client";
import { Instrument_Serif, Lexend } from "next/font/google";
import { FaPython, FaRobot, FaTelegramPlane, FaSearch } from "react-icons/fa";
import { SiFastapi, SiPostgresql } from "react-icons/si";
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

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const headings = [
  "Automated Systems",
  "End to End Pipelines",
  "Model Agnostic",
  "Agentic Workflows",
  "Predictive Analytics",
];

const creations = [
  {
    id: "mausam",
    category: "AI SYSTEMS / 2025",
    title: "Mausam",
    description:
      "AI weather intelligence platform with a pipeline that fetches and processes radar images, blends live weather data, and generates concise reporting. It triggers tools to send email, post Telegram alerts, and notify based on conditions.",
    techStack: [
      { name: "Python", Icon: FaPython },
      { name: "Agents", Icon: FaRobot },
      { name: "Telegram", Icon: FaTelegramPlane },
    ],
    Flowchart: MausamFlowchart,
  },
  {
    id: "chat",
    category: "AI SYSTEMS / 2025",
    title: "Chat",
    description:
      "Multi-model AI chat app with a unified interface for providers. Users pick a model and the system keeps the experience consistent. The backend routes requests to the chosen provider, handling auth, formatting, and response normalization. The architecture keeps Chat scalable, flexible, and easy to extend.",
    techStack: [
      { name: "Agents", Icon: FaRobot },
      { name: "FastAPI", Icon: SiFastapi },
      { name: "Search", Icon: FaSearch },
    ],
    Flowchart: ChatFlowchart,
  },
  {
    id: "taza-khabar",
    category: "AI SYSTEMS / 2025",
    title: "Taza Khabar",
    description:
      "AI investigative news platform that delivers unbiased insights beyond headlines. It continuously scrapes and analyzes trusted sources to produce context-rich reports, using agentic web search and automated verification to reduce bias. A scalable FastAPI backend with PostgreSQL enables fast processing and reliable storage, while a Next.js frontend keeps reading smooth.",
    techStack: [
      { name: "FastAPI", Icon: SiFastapi },
      { name: "Search", Icon: FaSearch },
      { name: "Postgres", Icon: SiPostgresql },
    ],
    Flowchart: TazaKhabarFlowchart,
  },
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
        <h1 className={`${styles.Heading} ${lexend.className}`}>
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
        <h1 className={`${styles.HeadingText} ${lexend.className}`}>
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
        <div className={styles.projectsHeader}>
          <div className={`${styles.pageTitle} ${lexend.className}`}>
            <span>Some of My AI</span>
            <span className={styles.secondaryText}>Powered Creations</span>
          </div>
        </div>
        <div className={styles.projectsContainer}>
          {creations.map(
            ({ id, category, title, description, techStack, Flowchart }) => (
              <div className={styles.projectWrapper} key={id}>
                <div className={styles.projectContainer}>
                  <div className={styles.textContainer}>
                    <span>{category}</span>
                    <h2 className={`${styles.ProjectTitle} ${lexend.className}`}>
                      {title}
                    </h2>
                    <div className={styles.TechStackRow}>
                      {techStack.map(({ name, Icon }) => (
                        <div key={name} className={styles.TechStackItem}>
                          <div className={styles.TechStackLogo}>
                            <Icon
                              className={styles.TechStackIcon}
                              aria-hidden="true"
                            />
                          </div>
                          <div
                            className={`${styles.TechStackName} ${lexend.className}`}
                          >
                            {name}
                          </div>
                        </div>
                      ))}
                    </div>
                    <p className={styles.ProjectText}>{description}</p>
                  </div>
                </div>
                <div className={styles.bottomContainer}>
                  <Flowchart />
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
}
