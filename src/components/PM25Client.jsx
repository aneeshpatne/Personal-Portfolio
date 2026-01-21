"use client";
import { useMemo } from "react";
import { motion } from "framer-motion";
import { Cloud, Wind, AlertTriangle, Leaf, Activity } from "lucide-react";
import styles from "./style/PM25.module.css";

const STATUS_COLORS = {
  red: "#EF4444", // Unhealthy
  orange: "#F97316", // Sensitive
  yellow: "#F59E0B", // Moderate
  green: "#10B981", // Good
};

const getAQIData = (val, alertColor) => {
  const v = Number(val);
  let finalColor = "#525252";
  let label = "Unknown";
  let icon = Activity;

  // Resolve color & label
  if (alertColor) {
    const key = alertColor.toLowerCase();
    finalColor = STATUS_COLORS[key] || alertColor;
    if (key === "green") {
      label = "Excellent";
      icon = Leaf;
    } else if (key === "yellow") {
      label = "Moderate";
      icon = Wind;
    } else if (key === "orange") {
      label = "Sensitive";
      icon = Cloud;
    } else if (key === "red") {
      label = "Unhealthy";
      icon = AlertTriangle;
    }
  } else if (!isNaN(v)) {
    if (v <= 12) {
      finalColor = STATUS_COLORS.green;
      label = "Excellent";
      icon = Leaf;
    } else if (v <= 35) {
      finalColor = STATUS_COLORS.yellow;
      label = "Moderate";
      icon = Wind;
    } else if (v <= 55) {
      finalColor = STATUS_COLORS.orange;
      label = "Sensitive";
      icon = Cloud;
    } else if (v <= 150) {
      finalColor = STATUS_COLORS.red;
      label = "Unhealthy";
      icon = AlertTriangle;
    } else {
      finalColor = "#8B5CF6";
      label = "Hazardous";
      icon = AlertTriangle;
    }
  }

  return { color: finalColor, label, icon };
};

export function PM25Client({ value, remark, alertColor }) {
  const hasValue = value !== null && value !== undefined && value !== "";
  const {
    color,
    label: autoLabel,
    icon: Icon,
  } = useMemo(() => getAQIData(value, alertColor), [value, alertColor]);
  const displayRemark = remark || autoLabel;

  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      style={{ "--status-color": color }}
    >
      <div className={styles.spotlight} />

      {/* Header: Label + Icon */}
      <div className={styles.header}>
        <div className={styles.titleGroup}>
          <div className={styles.iconBox}>
            <Icon size={20} strokeWidth={2.5} />
          </div>
          <span className={styles.label}>Air Quality</span>
        </div>
        <div className={styles.badge}>Powered by Vaayu API</div>
      </div>

      {/* Main Content: Huge Number */}
      <div className={styles.mainContent}>
        <div className={styles.valueRow}>
          <motion.span
            className={styles.value}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.4 }}
          >
            {hasValue ? value : "NILL"}
          </motion.span>
          <span className={styles.unit}>PM 2.5</span>
        </div>
      </div>

      {/* Footer: Remark Only */}
      <div className={styles.footer}>
        <div className={styles.statusRow}>
          <span className={styles.remark}>{hasValue ? displayRemark : ""}</span>
        </div>
      </div>
    </motion.div>
  );
}
