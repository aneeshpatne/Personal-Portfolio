import React from "react";
import styles from "./style/mausamCard.module.css";

export default function MausamCard({
  alertColor = "#10B981",
  temp = "--",
  humi = "--",
  wind = "--",
  precip = "--",
  alert = "--",
}) {
  return (
    <div className={styles.card} aria-label="Mausam weather summary">
      <div className={styles.header}>
        <span className={styles.title}>Mumbai</span>
        <span className={styles.badge}>Live</span>
      </div>

      <div className={styles.body}>
        <div className={styles.row}>
          <span className={styles.label}>Temp</span>
          <span className={styles.value}>{formatMeasure(temp, "°C")}</span>
        </div>
        <div className={styles.row}>
          <span className={styles.label}>Humidity</span>
          <span className={styles.value}>{formatMeasure(humi, "%")}</span>
        </div>
        <div className={styles.row}>
          <span className={styles.label}>Alert</span>
          <span className={styles.value}>{alert || "--"}</span>
        </div>
        <div className={styles.row}>
          <span className={styles.label}>Precip</span>
          <span className={styles.value}>{formatMeasure(precip, "mm")}</span>
        </div>
      </div>

      <div className={styles.footer}>
        <span className={styles.brand}>Powered by MausamAI</span>
      </div>
    </div>
  );
}

function formatMeasure(value, unit) {
  if (value === null || value === undefined || value === "") return "--";
  return `${value}${unit ? ` ${unit}` : ""}`;
}
