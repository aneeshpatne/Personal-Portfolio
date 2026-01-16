"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import styles from "./style/News.module.css";

export function NewsClient({ 
  title, 
  description, 
  date,
  url 
}) {
  // Fallback defaults if data is missing/loading
  const displayTitle = title || "Waiting for headlines...";
  const displayDesc = description || "Global markets are shifting as technology continues to evolve at a rapid pace. Stay tuned for updates.";
  const displayDate = date || new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className={styles.accent} />

      <div className={styles.header}>
        <div className={styles.badge}>NEWS</div>
        <span className={styles.date}>{displayDate}</span>
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{displayTitle}</h3>
        <p className={styles.description}>{displayDesc}</p>
      </div>

      <p className={styles.caution}>
        Caution: This section surfaces real-time news from the Khoj API. Items
        may be incomplete, inaccurate, or distressing and do not represent
        Aneesh&apos;s views. This content is provided solely for informational
        purposes and does not constitute advice, a recommendation, or an
        endorsement. Any reliance on this information is at your own risk.
        Please verify details with primary sources before acting.
      </p>

      <div className={styles.footer}>
        {url && (
            <span className={styles.readMore}>
                Read <ArrowUpRight size={14} />
            </span>
        )}
      </div>
    </motion.div>
  );
}
