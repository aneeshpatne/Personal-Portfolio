"use client";

import { AnimatePresence, motion } from "framer-motion";
import styles from "./style/IntelClient.module.css";
import { useEffect, useState } from "react";

const ALERT_COLORS = {
  red: "#ef4444",
  amber: "#f59e0b",
  green: "#10b981",
  yellow: "#eab308",
};

function SpeedometerGauge({ score, alertColor }) {
  const clampedScore = Math.max(0, Math.min(100, score));
  const color = ALERT_COLORS[alertColor] ?? ALERT_COLORS.red;

  // Arc geometry — semicircle from 180° to 0° (left to right)
  const cx = 100;
  const cy = 100;
  const r = 80;
  const strokeWidth = 8;

  // Helper: angle in degrees (180 = left, 0 = right) → SVG coordinates
  // Round to 2 decimal places to prevent SSR/client hydration mismatches
  const polarToCart = (angleDeg) => {
    const rad = (angleDeg * Math.PI) / 180;
    return {
      x: Math.round((cx + r * Math.cos(rad)) * 100) / 100,
      y: Math.round((cy - r * Math.sin(rad)) * 100) / 100,
    };
  };

  // Full arc path (180° → 0°, clockwise = upward in SVG Y-down coords)
  const arcStart = polarToCart(180);
  const arcEnd = polarToCart(0);
  const fullArc = `M ${arcStart.x} ${arcStart.y} A ${r} ${r} 0 1 1 ${arcEnd.x} ${arcEnd.y}`;

  // Filled arc path — fraction of the semicircle (always ≤180°, so large-arc=0)
  const fraction = clampedScore / 100;
  const endAngle = 180 - fraction * 180;
  const filledEnd = polarToCart(endAngle);
  const filledArc =
    fraction > 0
      ? `M ${arcStart.x} ${arcStart.y} A ${r} ${r} 0 0 1 ${filledEnd.x} ${filledEnd.y}`
      : "";

  // Needle tip position
  const needle = polarToCart(endAngle);

  return (
    <div className={styles.gaugeContainer}>
      <svg viewBox="0 0 200 120" className={styles.gaugeSvg}>
        {/* Track */}
        <path
          d={fullArc}
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
        {/* Filled arc */}
        {fraction > 0 && (
          <path
            d={filledArc}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
        )}
        {/* Needle dot */}
        <circle
          cx={needle.x}
          cy={needle.y}
          r={5}
          fill={color}
        />
        <circle
          cx={needle.x}
          cy={needle.y}
          r={2.5}
          fill="#0f0f0f"
        />
        {/* Tick labels */}
        <text x={arcStart.x - 2} y={arcStart.y + 16} className={styles.tickLabel} textAnchor="middle">
          0
        </text>
        <text x={arcEnd.x + 2} y={arcEnd.y + 16} className={styles.tickLabel} textAnchor="middle">
          100
        </text>
      </svg>
      <div className={styles.gaugeValue}>
        <span className={styles.scoreNumber}>{score.toFixed(1)}</span>
        <span className={styles.scoreLabel}>Stability Index</span>
      </div>
    </div>
  );
}

function RotatingFactor({ items, type }) {
  const [index, setIndex] = useState(0);
  const hasItems = Array.isArray(items) && items.length > 0;

  useEffect(() => {
    if (!hasItems) return undefined;
    const interval = setInterval(() => {
      setIndex((c) => (c + 1) % items.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [hasItems, items.length]);

  if (!hasItems) return null;

  const isRisk = type === "risk";

  return (
    <div className={styles.factorCard}>
      <header className={styles.factorHeader}>
        <div className={styles.factorTitleRow}>
          <span className={isRisk ? styles.dotRisk : styles.dotStabilizer} />
          <h3 className={styles.factorTitle}>
            {isRisk ? "Risk Factors" : "Stabilizers"}
          </h3>
        </div>
        <span className={styles.factorCount}>
          {index + 1}/{items.length}
        </span>
      </header>
      <div className={styles.factorBody}>
        <AnimatePresence mode="wait">
          <motion.p
            key={index}
            className={styles.factorText}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {items[index]}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function IntelClient({ data, title = "Powered by Intel API", region = "World" }) {
  if (!data) return null;

  const score = Number(data.score ?? 0);
  const alertColor = data.alert_color ?? "red";
  const trend = data.trend ?? "stable";
  const trendColor = ALERT_COLORS[alertColor] ?? ALERT_COLORS.red;

  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className={styles.glow} />

      {/* Header */}
      <div className={styles.header}>
        <div className={styles.leftGroup}>
          <span className={styles.regionBadge}>{region}</span>
          <span
            className={styles.trendBadge}
            style={{
              "--trend-color": trendColor,
            }}
          >
            {trend}
          </span>
        </div>
        <span className={styles.apiBadge}>{title}</span>
      </div>

      {/* Gauge */}
      <SpeedometerGauge score={score} alertColor={alertColor} />

      {/* Rotating factors */}
      <div className={styles.factorsGrid}>
        <RotatingFactor items={data.top_stabilizers} type="stabilizer" />
        <RotatingFactor items={data.top_risk_factors} type="risk" />
      </div>

      {/* Footer */}
      <div className={styles.footerWrapper}>
        <div className={styles.cautionContainer}>
          <span className={styles.cautionHeader}>IMPORTANT NOTICE</span>
          <p className={styles.cautionText}>
            This section surfaces real-time intelligence from the{" "}
            <strong>Intel API</strong>. Assessments may be incomplete or
            inaccurate and{" "}
            <strong>do not represent Aneesh&apos;s views</strong>. Provided
            solely for informational purposes. Please{" "}
            <strong>verify details with primary sources</strong> before acting.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
