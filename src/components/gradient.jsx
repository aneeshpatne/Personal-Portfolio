"use client";
import styles from "./style/gradient.module.css";

export default function BlobsBackground() {
  // Static, non-moving gradient background (no blobs / animations)
  return <div className={styles.backgroundContainer} aria-hidden="true" />;
}
