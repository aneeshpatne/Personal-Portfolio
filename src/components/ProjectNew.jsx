"use client";
import styles from "./style/ProjectNew.module.css";
import { motion } from "framer-motion";
import { useState } from "react";

export function ReadMoreText({ text, wordlimit = 13 }) {
  const words = text.split(" ");
  const truncatedText =
    words.length > wordlimit
      ? words.slice(0, wordlimit).join(" ") + "..."
      : text;
  const [isExpanded, setIsExpanded] = useState(false);

  const shownText = isExpanded ? text : truncatedText;

  return (
    <p>
      {shownText}
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
