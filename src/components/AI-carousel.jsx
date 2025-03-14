"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./style/AICarousel.module.css";

const words = ["API Integration", "RAG", "Prompt Engineering", "AI Summarised News Letters", "AI Web Scraping"];

const useWordCycle = (words, interval) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % words.length);
    }, interval);
    return () => clearInterval(timer);
  }, [words, interval]);

  return words[index];
};

export default function TextCarousel() {
  const word = useWordCycle(words, 2000);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Expert in</h1>
        <div className={styles.wordContainer}>
          <AnimatePresence mode="wait">
            <motion.span
              key={word}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={styles.word}
            >
              {word}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
