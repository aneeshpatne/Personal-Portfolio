"use client";
import { AnimatePresence, motion } from "framer-motion";
import { Clock } from "lucide-react";
import styles from "./style/News.module.css";
import { useEffect, useState } from "react";

const SOURCE_DOMAIN_MAP = {
  reuters: "reuters.com",
  "associated press": "apnews.com",
  ap: "apnews.com",
  bbc: "bbc.com",
  cnn: "cnn.com",
  nytimes: "nytimes.com",
  "the guardian": "theguardian.com",
  "wall street journal": "wsj.com",
};

function getSourceDomain(source) {
  const normalized = source.trim().toLowerCase();
  if (SOURCE_DOMAIN_MAP[normalized]) {
    return SOURCE_DOMAIN_MAP[normalized];
  }
  if (normalized.includes(".")) {
    return normalized;
  }
  return null;
}

function getFaviconUrl(source) {
  const domain = getSourceDomain(source);
  if (!domain) {
    return null;
  }
  return `https://www.google.com/s2/favicons?sz=64&domain=${encodeURIComponent(domain)}`;
}

export function NewsClient({ data = [] }) {
  const [index, setIndex] = useState(0);
  const hasNews = Array.isArray(data) && data.length > 0;
  const currentItem = hasNews ? data[index] : null;
  const displayTitle = hasNews ? currentItem?.title : "Waiting for news...";
  const displayDesc = hasNews
    ? currentItem?.description
    : "We will retry fetching headlines shortly.";
  const displaySources =
    hasNews && Array.isArray(currentItem?.sources) && currentItem.sources.length > 0
      ? currentItem.sources
      : ["Unknown Source"];
  const displayGenre = hasNews ? currentItem?.genre ?? "General" : "General";
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
            <div className={styles.metaRow}>
              <div className={styles.sourceList}>
                {displaySources.map((source, sourceIndex) => {
                  const faviconUrl = getFaviconUrl(source);
                  return (
                    <span
                      key={`${source}-${sourceIndex}`}
                      className={styles.sourcePill}
                    >
                      {faviconUrl ? (
                        <img
                          src={faviconUrl}
                          alt=""
                          aria-hidden="true"
                          className={styles.sourceFavicon}
                        />
                      ) : null}
                      <span className={styles.sourceName}>{source}</span>
                    </span>
                  );
                })}
              </div>
              <span className={styles.metaPill}>{displayGenre}</span>
            </div>
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
