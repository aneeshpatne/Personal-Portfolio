"use client";

import styles from "./style/Weather.module.css";
import { motion } from "framer-motion";

export function WeatherClient({ temp, humidity, pressure, remark, alertColor, fontClassName }) {
  // Use the API-provided remark, or fallback logic if missing
  const displayRemark = remark || (temp >= 30 ? "It's quite hot outside" : (temp <= 10 ? "Chilly weather today" : "Pleasant conditions"));
  
  // Map alert colors to hex values
  const getAlertColor = (color) => {
    switch(color?.toLowerCase()) {
      case 'green': return '#22c55e'; // green-500
      case 'orange': return '#f97316'; // orange-500
      case 'red': return '#ef4444'; // red-500
      case 'yellow': return '#eab308'; // yellow-500
      default: return '#38bdf8'; // Default blue
    }
  };

  const accentColor = getAlertColor(alertColor);

  return (
    <div className={styles.wrapper}>
      <motion.div 
        className={`${styles.weatherCard} ${fontClassName || ""}`}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <div className={styles.spotlight} style={{ background: accentColor }} />

        {/* Header */}
        <div className={styles.header}>
          <div className={styles.titleGroup}>
            <div className={styles.iconBox} style={{ color: accentColor }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" />
                <motion.line
                  x1="12"
                  y1="12"
                  x2="12"
                  y2="10"
                  stroke="currentColor"
                  strokeWidth="2"
                  animate={{ y2: [10, 6, 10] }}
                  transition={{
                    duration: 2,
                    ease: "easeInOut",
                    repeat: Infinity,
                  }}
                />
              </svg>
            </div>
            <span className={styles.label}>Local Weather</span>
          </div>
          <div className={styles.badge}>Powered by Mausam API</div>
        </div>

        {/* Main Content: Temp, Humidity, Pressure */}
        <div className={styles.mainContent}>
          <div className={styles.metricsRow}>
            {/* Temp */}
            <div className={styles.metricItem}>
              <div className={styles.metricValueContainer}>
                <motion.span 
                  className={styles.value}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1, duration: 0.4 }}
                >
                  {temp ?? "--"}
                </motion.span>
                <span className={styles.unit}>°C</span>
              </div>
              <span className={styles.metricLabel}>Temperature</span>
            </div>

            {/* Humidity */}
            <div className={styles.metricItem}>
              <div className={styles.metricValueContainer}>
                <div className={styles.miniIcon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <motion.g
                      animate={{ rotate: [-10, 10, -10] }}
                      transition={{
                        duration: 2,
                        ease: "easeInOut",
                        repeat: Infinity,
                      }}
                      style={{ transformOrigin: "center" }}
                    >
                      <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z" />
                      <path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97" />
                    </motion.g>
                  </svg>
                </div>
                <motion.span 
                  className={styles.value}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                >
                  {humidity ?? "--"}
                </motion.span>
                <span className={styles.unit}>%</span>
              </div>
              <span className={styles.metricLabel}>Humidity</span>
            </div>

            {/* Pressure */}
            <div className={styles.metricItem}>
              <div className={styles.metricValueContainer}>
                <div className={styles.miniIcon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <motion.path
                      variants={{
                        left: { d: "m12 13 -4 -4" },
                        right: { d: "m12 13 4 -4" },
                      }}
                      initial="left"
                      animate={["left", "right"]}
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      transition={{
                        duration: 0.6,
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                    />
                    <path d="M3.34 19a10 10 0 1 1 17.32 0" />
                  </svg>
                </div>
                <motion.span 
                  className={styles.value}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                >
                  {pressure ?? "--"}
                </motion.span>
                <span className={styles.unit}>hPa</span>
              </div>
              <span className={styles.metricLabel}>Pressure</span>
            </div>
          </div>
        </div>

        {/* Footer: Remark */}
        <div className={styles.footer}>
          <span className={styles.remark} style={{ color: accentColor }}>
            {displayRemark}
          </span>
        </div>
      </motion.div>
    </div>
  );
}
