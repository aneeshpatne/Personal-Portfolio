"use client";

import { Lexend } from "next/font/google";
import { motion } from "framer-motion";
import styles from "./style/MausamPrediction.module.css";

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

function SpeedometerGauge({ score, alertColor, label }) {
  const clampedScore = Math.max(0, Math.min(100, Number(score) || 0));
  const tone = getAlertTone(alertColor);
  const cx = 100;
  const cy = 100;
  const r = 80;
  const strokeWidth = 12;

  const polarToCart = (angleDeg) => {
    const rad = (angleDeg * Math.PI) / 180;
    return {
      x: Math.round((cx + r * Math.cos(rad)) * 100) / 100,
      y: Math.round((cy - r * Math.sin(rad)) * 100) / 100,
    };
  };

  const arcStart = polarToCart(180);
  const arcEnd = polarToCart(0);
  const fullArc = `M ${arcStart.x} ${arcStart.y} A ${r} ${r} 0 1 1 ${arcEnd.x} ${arcEnd.y}`;
  const fraction = clampedScore / 100;
  const endAngle = 180 - fraction * 180;
  const filledEnd = polarToCart(endAngle);
  const filledArc =
    fraction > 0
      ? `M ${arcStart.x} ${arcStart.y} A ${r} ${r} 0 0 1 ${filledEnd.x} ${filledEnd.y}`
      : "";

  return (
    <div className={styles.gaugeContainer}>
      <svg viewBox="0 0 200 120" className={styles.gaugeSvg}>
        <path
          d={fullArc}
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth={strokeWidth}
          strokeLinecap="butt"
        />
        {fraction > 0 ? (
          <path
            d={filledArc}
            fill="none"
            stroke={tone.accent}
            strokeWidth={strokeWidth}
            strokeLinecap="butt"
          />
        ) : null}
        <text
          x={arcStart.x - 2}
          y={arcStart.y + 16}
          className={styles.tickLabel}
          textAnchor="middle"
        >
          0
        </text>
        <text
          x={arcEnd.x + 2}
          y={arcEnd.y + 16}
          className={styles.tickLabel}
          textAnchor="middle"
        >
          100
        </text>
      </svg>
      <div className={styles.gaugeValue}>
        <span className={`${styles.scoreNumber} ${lexend.className}`}>
          {clampedScore.toFixed(0)}
        </span>
        <span className={styles.scoreLabel}>{label}</span>
      </div>
    </div>
  );
}

function getAlertTone(color) {
  switch (String(color).toLowerCase()) {
    case "green":
      return {
        accent: "#22c55e",
        soft: "rgba(34, 197, 94, 0.14)",
        label: "Low",
      };
    case "orange":
      return {
        accent: "#f97316",
        soft: "rgba(249, 115, 22, 0.14)",
        label: "Elevated",
      };
    case "red":
      return {
        accent: "#ef4444",
        soft: "rgba(239, 68, 68, 0.14)",
        label: "High",
      };
    case "yellow":
    default:
      return {
        accent: "#eab308",
        soft: "rgba(234, 179, 8, 0.14)",
        label: "Moderate",
      };
  }
}

export default function MausamPredictionClient({
  alertColor,
  alertMessage,
  indexName,
  indexValue,
}) {
  const tone = getAlertTone(alertColor);
  const severityWord = String(alertColor || "yellow").toUpperCase();

  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <div className={styles.innerWrapper}>
        <div className={styles.header}>
          <div className={styles.leftGroup}>
            <span className={styles.liveBadge}>Prediction</span>
            <span
              className={styles.alertBadge}
              style={{
                color: tone.accent,
                backgroundColor: tone.soft,
              }}
            >
              {tone.label} alert
            </span>
          </div>
          <span className={styles.apiBadge}>Powered by Mausam API</span>
        </div>

        <div className={styles.content}>
          <SpeedometerGauge
            score={indexValue}
            alertColor={alertColor}
            label={indexName}
          />

          <div className={styles.factorsGrid}>
            <div className={styles.factorCard}>
              <header className={styles.factorHeader}>
                <div className={styles.factorTitleRow}>
                  <span
                    className={styles.factorDot}
                    style={{ backgroundColor: tone.accent }}
                  />
                  <h3 className={styles.factorTitle}>Alert Color</h3>
                </div>
              </header>
              <div className={styles.factorBody}>
                <div className={styles.alertMeta}>
                  <span className={styles.alertCode}>{severityWord}</span>
                  <p className={styles.factorValue}>{tone.label}</p>
                </div>
              </div>
            </div>

            <div className={styles.factorCard}>
              <header className={styles.factorHeader}>
                <div className={styles.factorTitleRow}>
                  <span className={styles.factorDotMuted} />
                  <h3 className={styles.factorTitle}>Alert Message</h3>
                </div>
              </header>
              <div className={styles.factorBody}>
                <p className={styles.factorText}>{alertMessage}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footerWrapper}>
        <div className={styles.cautionContainer}>
          <span className={styles.cautionHeader}>IMPORTANT NOTICE</span>
          <p className={styles.cautionText}>
            This section surfaces forecast guidance from the{" "}
            <strong>Mausam API</strong>. Predictions and alert states may
            change as new data arrives. Please <strong>verify critical weather
            decisions with primary sources</strong> before acting.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
