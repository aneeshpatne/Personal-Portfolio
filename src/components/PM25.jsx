"use client";
import { useMemo } from "react";
import { motion } from "framer-motion";
import { 
  Cloud, 
  Wind, 
  AlertTriangle, 
  Leaf
} from "lucide-react";
import styles from "./style/PM25.module.css";

const STATUS_COLORS = {
  red: "#EF4444",    // Unhealthy
  orange: "#F97316", // Sensitive
  yellow: "#F59E0B", // Moderate
  green: "#10B981"   // Good
};

const getAQIData = (val, alertColor) => {
  const v = Number(val);
  
  // Resolve color: use alertColor prop (mapped or raw) or auto-detect
  let finalColor = "#94a3b8"; // Default gray
  
  if (alertColor) {
    // If user passed a color name (red, orange...), use mapped hex, otherwise use the string as-is
    finalColor = STATUS_COLORS[alertColor.toLowerCase()] || alertColor;
  } else if (!isNaN(v)) {
    // Auto-detect based on value
    if (v <= 12) finalColor = STATUS_COLORS.green;
    else if (v <= 35) finalColor = STATUS_COLORS.yellow;
    else if (v <= 55) finalColor = STATUS_COLORS.orange;
    else if (v <= 150) finalColor = STATUS_COLORS.red;
    else finalColor = "#8B5CF6"; // Hazardous (Purple)
  }

  // Resolve Icon based on finalColor (heuristic match)
  let icon = Cloud;
  const c = finalColor.toUpperCase();
  if (c === STATUS_COLORS.green.toUpperCase()) icon = Leaf;
  else if (c === STATUS_COLORS.yellow.toUpperCase()) icon = Wind;
  else if (c === STATUS_COLORS.orange.toUpperCase()) icon = Cloud;
  else if (c === STATUS_COLORS.red.toUpperCase()) icon = AlertTriangle;
  else if (c === "#8B5CF6") icon = AlertTriangle;

  return { color: finalColor, icon };
};

export function PM25({ value, remark, alertColor }) {
  const { color, icon: Icon } = useMemo(() => getAQIData(value, alertColor), [value, alertColor]);

  return (
    <motion.div 
      className={styles.card}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{ "--status-color": color }}
    >
      <div className={styles.glow} />
      
      <div className={styles.header}>
        <div className={styles.label}>
          <span className={styles.title}>Air Quality</span>
          <span className={styles.subtitle}>PM 2.5 Index</span>
        </div>
        <div className={styles.iconWrapper}>
          <Icon size={19} strokeWidth={2.5} />
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.valueWrapper}>
          <motion.span 
            className={styles.value}
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.1 }}
          >
            {value}
          </motion.span>
          <span className={styles.unit}>µg/m³</span>
        </div>
        
        {remark && (
          <div className={styles.remarkBadge}>
            <span className={styles.indicator} />
            {remark}
          </div>
        )}
      </div>
    </motion.div>
  );
}
