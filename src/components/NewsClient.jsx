"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";
import styles from "./style/News.module.css";

export function NewsClient({ 
  title, 
  description, 
  date,
  url 
}) {
  const displayTitle = title || "Waiting for headlines...";
  const displayDesc = description || "Global markets are shifting as technology continues to evolve at a rapid pace. Stay tuned for updates.";
  const displayDate = date || new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className={styles.glow} />
      
      <div className={styles.header}>
        <div className={styles.dateContainer}>
            <Clock size={12} className={styles.dateIcon} />
            <span className={styles.date}>{displayDate}</span>
        </div>
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{displayTitle}</h3>
        <p className={styles.description}>{displayDesc}</p>
      </div>

      <div className={styles.footerWrapper}>
        <div className={styles.cautionContainer}>
            <span className={styles.cautionHeader}>IMPORTANT NOTICE</span>
            <p className={styles.cautionText}>
                This section surfaces real-time news from the <strong>Khoj API</strong>. Items
                may be incomplete, inaccurate, or distressing and <strong>do not represent
                Aneesh&apos;s views</strong>. This content is provided solely for informational
                purposes and does not constitute advice, a recommendation, or an
                endorsement. Any reliance on this information is at your own risk.
                Please <strong>verify details with primary sources</strong> before acting.
            </p>
        </div>

        <div className={styles.actions}>
            {url && (
                <a href={url} target="_blank" rel="noopener noreferrer" className={styles.readMore}>
                    Read Article <ArrowUpRight size={16} />
                </a>
            )}
        </div>
      </div>
    </motion.div>
  );
}
