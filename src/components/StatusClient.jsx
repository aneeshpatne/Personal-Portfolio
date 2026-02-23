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

      // Consider data stale if it's older than 5 hours (18000 seconds)
      setIsStale(diffInSeconds > 18000);

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
          Data is stale (older than 5 hours). Please refresh the page again.
        </div>
      )}
      <div className={styles.disclaimer}>
        Notice: This part of the webpage utilizes Incremental Static
        Regeneration (ISR). Displayed data may be cached; please refresh the
        page to fetch the latest data.
      </div>
    </div>
  );
}
