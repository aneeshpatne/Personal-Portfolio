"use client";
import { AnimatePresence, motion } from "framer-motion";
import { Clock } from "lucide-react";
import styles from "./style/News.module.css";
import { useEffect, useState } from "react";

export function NewsClient({ data }) {
  const [index, setIndex] = useState(0);
  const hasNews = data && data.length > 0;
  const displayTitle = hasNews
    ? data[index]?.title
    : "Waiting for news...";
  const displayDesc = hasNews
    ? data[index]?.description
    : "We will retry fetching headlines shortly.";
  const displayKey = hasNews ? index : "waiting";
  const displayDate = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  useEffect(() => {
    if (!hasNews) {
      return undefined;
    }
    const interval = setInterval(() => {
      setIndex((current) => (current + 1) % data.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [hasNews, data.length]);

  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className={styles.glow} />

      <div className={styles.header}>
        <div className={styles.leftGroup}>
            <span className={styles.liveBadge}>Live News</span>
            <div className={styles.dateContainer}>
              <Clock size={12} className={styles.dateIcon} />
              <span className={styles.date}>{displayDate}</span>
            </div>
        </div>
        <span className={styles.apiBadge}>Powered by Khoj API</span>
      </div>

      <div className={styles.content}>
        <AnimatePresence mode="wait">
          <motion.div
            key={displayKey}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <h3 className={styles.title}>{displayTitle}</h3>
            <p className={styles.description}>{displayDesc}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className={styles.footerWrapper}>
        <div className={styles.cautionContainer}>
          <span className={styles.cautionHeader}>IMPORTANT NOTICE</span>
          <p className={styles.cautionText}>
            This section surfaces real-time news from the{" "}
            <strong>Khoj API</strong>. Items may be incomplete, inaccurate, or
            distressing and{" "}
            <strong>do not represent Aneesh&apos;s views</strong>. This content
            is provided solely for informational purposes and does not
            constitute advice, a recommendation, or an endorsement. Any reliance
            on this information is at your own risk. Please{" "}
            <strong>verify details with primary sources</strong> before acting.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
