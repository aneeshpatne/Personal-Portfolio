"use client";

import styles from "./style/Weather.module.css";
import { Thermometer, Droplets } from "lucide-react";
import { motion } from "framer-motion";

export function WeatherClient({ temp, humidity, pressure, fontClassName }) {
  return (
    <div className={styles.wrapper}>
      <div className={`${styles.weatherCard} ${fontClassName || ""}`}>
        <div className={styles.statGroup}>
          <div className={styles.iconWrapper}>
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
              className="lucide lucide-thermometer-icon lucide-thermometer"
            >
              {/* Static outline */}
              <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" />
              {/* Animated rising mercury level */}
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
          <div className={styles.info}>
            <span className={styles.label}>Temperature</span>
            <div className={styles.valueContainer}>
              <span className={styles.value}>{temp ?? "--"}</span>
              <span className={styles.unit}>°C</span>
            </div>
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.statGroup}>
          <div className={styles.iconWrapper}>
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
              className="lucide lucide-droplets-icon lucide-droplets"
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
          <div className={styles.info}>
            <span className={styles.label}>Humidity</span>
            <div className={styles.valueContainer}>
              <span className={styles.value}>{humidity ?? "--"}</span>
              <span className={styles.unit}>%</span>
            </div>
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.statGroup}>
          <div className={styles.iconWrapper}>
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
              className="lucide lucide-gauge-icon lucide-gauge"
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
          <div className={styles.info}>
            <span className={styles.label}>Pressure</span>
            <div className={styles.valueContainer}>
              <span className={styles.value}>{pressure ?? "--"}</span>
              <span className={styles.unit}>hPa</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
