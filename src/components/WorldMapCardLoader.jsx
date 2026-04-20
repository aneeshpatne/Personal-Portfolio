"use client";

import dynamic from "next/dynamic";
import styles from "./style/WorldMapCard.module.css";

const WorldMapCardClient = dynamic(() => import("./WorldMapCardClient"), {
  ssr: false,
  loading: () => (
    <div className={styles.mapShell}>
      <div className={styles.mapFallback}>
        <span className={styles.fallbackEyebrow}>Loading Map</span>
        <p className={styles.fallbackText}>
          Initializing Leaflet in the browser.
        </p>
      </div>
    </div>
  ),
});

export default function WorldMapCardLoader(props) {
  return <WorldMapCardClient {...props} />;
}
