"use client";
import styles from "./style/ProjectNew.module.css";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export function ReadMoreText({ text, wordlimit = 13, speed = 50 }) {
  const words = text.split(" ");
  const truncatedText =
    words.length > wordlimit
      ? words.slice(0, wordlimit).join(" ") + "..."
      : text;
  const [isExpanded, setIsExpanded] = useState(false);
  const [displayText, setDisplayText] = useState(truncatedText);

  useEffect(() => {
    let interval;

    if (isExpanded) {
      let i = truncatedText.length;
      interval = setInterval(() => {
        if (i < text.length) {
          setDisplayText(text.slice(0, i + 1));
          i++;
        } else {
          clearInterval(interval);
        }
      }, speed);
    }
    return () => clearInterval(interval);
  }, [isExpanded]);
  useEffect(() => {
    let interval;
    if (!isExpanded) {
      let i = text.length;
      let interval = setInterval(() => {
        if (i > truncatedText.length) {
          setDisplayText(text.slice(0, i - 1));
          i--;
        } else {
          clearInterval(interval);
        }
      }, speed);
    }
    return () => clearInterval(interval);
  }, [isExpanded]);
  return (
    <p>
      {displayText}
      {words.length > wordlimit && (
        <button
          className={styles.readMore}
          onClick={() => setIsExpanded((prev) => !prev)}
        >
          {isExpanded ? "Read Less" : "Read More"}
        </button>
      )}
    </p>
  );
}

export function Title() {
  return (
    <div className={styles.projectTitleContainer}>
      <motion.h1
        className={styles.projectTitle}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <span className={styles.gradientText}>Projects</span>
      </motion.h1>
      <motion.div
        className={styles.subtitleContainer}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        <p className={styles.projectSubtitle}>Quantifying my progress!</p>
      </motion.div>
    </div>
  );
}
