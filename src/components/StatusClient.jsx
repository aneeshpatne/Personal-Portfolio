"use client";

import { useEffect, useState } from "react";
import styles from "./style/StatusClient.module.css";

export default function StatusClient({ timestamp }) {
  const [timeAgo, setTimeAgo] = useState("");
  const [isStale, setIsStale] = useState(false);

  useEffect(() => {
    if (!timestamp) return;

    const updateTimeAgo = () => {
      const now = new Date();
      const ts = new Date(timestamp);

      if (isNaN(ts.getTime())) return;

      const diffInSeconds = Math.floor((now - ts) / 1000);

      // Consider data stale if it's older than 24 hours (86400 seconds)
      setIsStale(diffInSeconds > 86400);

      if (diffInSeconds < 60) {
        setTimeAgo("just now");
      } else if (diffInSeconds < 3600) {
        const minutes = Math.floor(diffInSeconds / 60);
        setTimeAgo(`${minutes} minute${minutes > 1 ? "s" : ""} ago`);
      } else if (diffInSeconds < 86400) {
        const hours = Math.floor(diffInSeconds / 3600);
        setTimeAgo(`${hours} hour${hours > 1 ? "s" : ""} ago`);
      } else {
        const days = Math.floor(diffInSeconds / 86400);
        setTimeAgo(`${days} day${days > 1 ? "s" : ""} ago`);
      }
    };

    updateTimeAgo();
    const interval = setInterval(updateTimeAgo, 60000); // Update every minute

    return () => clearInterval(interval);
  }, [timestamp]);

  if (!timestamp || !timeAgo) return null;

  return (
    <div className={styles.statusCard}>
      <div className={styles.glow}></div>
      <div className={styles.content}>
        <div className={styles.statusHeader}>
          <div className={styles.statusMain}>
            <div className={styles.indicator}>
              <span className={isStale ? styles.pingStale : styles.ping}></span>
              <span className={isStale ? styles.dotStale : styles.dot}></span>
            </div>
            <span className={styles.statusTitle}>
              {isStale
                ? "Data is stale, please refresh this page"
                : "All APIs are functional"}
            </span>
          </div>
          <span className={styles.timeAgo}>Last updated {timeAgo}</span>
        </div>
        {isStale && (
          <div className={styles.staleWarning}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.warningIcon}>
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
              <line x1="12" y1="9" x2="12" y2="13"></line>
              <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
            <span>Data is stale (older than 24 hours). Please refresh the page again.</span>
          </div>
        )}
        <div className={styles.disclaimer}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.infoIcon}>
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="16" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
          <span>
            Notice: This part of the webpage utilizes Incremental Static
            Regeneration (ISR). Displayed data may be cached; please refresh the
            page to fetch the latest data.
          </span>
        </div>
      </div>
    </div>
  );
}
