"use client";

import Image from "next/image";
import styles from "./style/nasaTile.module.css";
import { Instrument_Serif } from "next/font/google";
import { useState, useEffect } from "react";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
});

export default function NasaTile() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("/api/nasa")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className={`${styles.tile} ${styles.fallback}`}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          Loading NASA image...
        </div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className={`${styles.tile} ${styles.fallback}`}>
        Failed to load NASA APOD
      </div>
    );
  }

  const title = data.title ?? "NASA APOD";
  const date = data.date ?? "";
  const imageSrc = data.url ?? null;

  if (!imageSrc || data.media_type !== "image") {
    return (
      <div className={`${styles.tile} ${styles.fallback}`}>
        <div>
          <p className={styles.fallbackTitle}>{title}</p>
          {date && <p className={styles.date}>{date}</p>}
          <p style={{ marginTop: 8 }}>Image not available</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.tile}>
      <div className={styles.container}>
        <h1 className={`${styles.headerText} ${instrumentSerif.className}`}>
          Limitless Ambition
        </h1>
        <div className={styles.imageWrapper}>
          <Image
            src={imageSrc}
            alt={title}
            fill
            sizes="(min-width: 1024px) 25vw, 100vw"
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority
          />
        </div>

        <div className={styles.topShade} />
        <div className={styles.overlay}>
          <div className={styles.title}>{title}</div>
          {date && <div className={styles.date}>{date}</div>}
        </div>
      </div>
    </div>
  );
}
