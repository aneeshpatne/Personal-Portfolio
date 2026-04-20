"use client";

import dynamic from "next/dynamic";
import styles from "./style/WorldMapCard.module.css";

const WorldMapCardClient = dynamic(() => import("./WorldMapCardClient"), {
  ssr: false,
  loading: () => (
    <>
      <div className={styles.mapShell}>
        <div className={styles.mapFallback}>
          <span className={styles.fallbackEyebrow}>Loading Map</span>
          <p className={styles.fallbackText}>
            Initializing Leaflet in the browser.
          </p>
        </div>
        <div className={styles.mapGlow} />
        <div className={styles.scanline} />
      </div>
      <div className={styles.legendPlaceholder} />
    </>
  ),
});

export function WorldMapCard() {
  return (
    <div className={styles.card}>
      <div className={styles.innerWrapper}>
        <div className={styles.header}>
          <div className={styles.leftGroup}>
            <span className={styles.liveBadge}>Live</span>
          </div>
          <span className={styles.apiBadge}>Powered by Intel API</span>
        </div>

        <div className={styles.content}>
          <div className={styles.mapStage}>
            <WorldMapCardClient />
            <div className={styles.mapGlow} />
            <div className={styles.scanline} />
          </div>
        </div>
      </div>

      <div className={styles.footerWrapper}>
        <div className={styles.cautionContainer}>
          <span className={styles.cautionHeader}>POWERED BY INTEL API</span>
          <p className={styles.cautionText}>
            Every effort has been made to depict India correctly using
            <strong> Survey of India</strong> outline data. Aneesh fully
            respects India&apos;s boundaries as defined by Survey of India. If any
            incorrect boundary depiction may be visible in the underlying base
            map tiles, it is solely attributable to the map provider and does
            not reflect Aneesh&apos;s views or intent.
          </p>
        </div>
      </div>
    </div>
  );
}
