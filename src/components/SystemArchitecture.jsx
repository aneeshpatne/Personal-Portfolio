"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Instrument_Serif } from "next/font/google";
import styles from "./style/SystemArchitecture.module.css";
import ArchitectureSVG from "./svg/ArchitectureSVG";
import LockSVG from "./svg/LockSVG";
import SurakshaFlowSVG from "./svg/SurakshaFlowSVG";
import Judge0FlowSVG from "./svg/Judge0FlowSVG";
import CCTVFlowSVG from "./svg/CCTVFlowSVG";
import { SystemArchitectureImage } from "./SystemArchitectureImage";

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
            I build enterprise backend systems with microservices, queues,
            distributed databases, and production-ready authentication.
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
        <div className={styles.ShowcaseSection}>
          <div className={styles.ShowcaseCard}>
            <h2
              className={`${styles.ShowcaseTitle} ${instrumentSerif.className}`}
            >
              Examples of my work
            </h2>
            <div className={styles.ShowCaseProject}>
              <LockSVG />
              <p className={styles.ProjectText}>
                <span className={styles.HighlightTitle}>Suraksha</span> is an
                enterprise, multi-tenant auth service built on Spring Boot. It
                supports email/password, magic links, optional OTP 2FA, RS256
                JWTs, refresh rotation, and org-level isolation. PostgreSQL
                stores data, Redis caches tokens/OTPs, and RabbitMQ delivers
                email.
              </p>
            </div>
            <SurakshaFlowSVG />

            <div
              className={styles.ShowCaseProject}
              style={{
                marginTop: "4rem",
                paddingTop: "2rem",
                borderTop: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <p className={styles.ProjectText} style={{ maxWidth: 800 }}>
                <span className={styles.HighlightTitle}>Practice Coder</span> is
                a scalable remote execution engine for safe, high-volume
                submissions. It orchestrates Docker containers via RabbitMQ for
                isolated runs, with a Spring Boot API gateway, PostgreSQL
                tracking, and an auto-scaling worker pool.
              </p>
            </div>
            <Judge0FlowSVG />
            <div
              className={styles.ShowCaseProject}
              style={{
                marginTop: "4rem",
                paddingTop: "2rem",
                borderTop: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <SystemArchitectureImage />
              <div className={styles.ProjectText}>
                <span className={styles.HighlightTitle}>DIY CCTV</span> is a
                self-hosted CCTV automation stack. It captures streams, overlays
                time and health metrics, records segments, restreams RTSP feeds,
                logs motion, exposes a FastAPI service, and sends Telegram
                summaries.
              </div>
            </div>
            <CCTVFlowSVG />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemArchitecture;
