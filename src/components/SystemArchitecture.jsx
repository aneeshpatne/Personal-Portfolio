"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Instrument_Serif } from "next/font/google";
import styles from "./style/SystemArchitecture.module.css";
import ArchitectureSVG from "./svg/ArchitectureSVG";
import LockSVG from "./svg/LockSVG";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
});

const SystemArchitecture = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className={styles.section}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={styles.headerContainer}
      >
        <h2 className={`${instrumentSerif.className} ${styles.title}`}>
          Systems I Build
        </h2>
      </motion.div>

      {/* Content Container - Side by Side */}
      <div className={styles.contentContainer}>
        {/* Description Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className={styles.descriptionContainer}
        >
          <p className={styles.description}>
            I have made enterprise-grade backend systems with microservices,
            message queues, distributed databases, and production-ready
            authentication.
          </p>
        </motion.div>

        {/* Diagram Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, x: 30 }}
          animate={
            isInView
              ? { opacity: 1, scale: 1, x: 0 }
              : { opacity: 0, scale: 0.95, x: 30 }
          }
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className={styles.diagramContainer}
        >
          <ArchitectureSVG />
        </motion.div>
      </div>
      <div className={styles.contentContainer}>
        <LockSVG />
      </div>
    </section>
  );
};

export default SystemArchitecture;
