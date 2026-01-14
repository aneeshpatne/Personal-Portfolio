"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Instrument_Serif } from "next/font/google";
import styles from "./style/SystemArchitecture.module.css";

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
          What I am Good at
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
    </section>
  );
};

const ArchitectureSVG = () => {
  // Colors from globals.css logic
  const accentColor = "var(--gradient-mid)"; // Cyan-ish
  const secondaryAccent = "var(--gradient-start)"; // Blue-ish
  const lineColor = "rgba(255, 255, 255, 0.15)";
  const textColor = "rgba(255, 255, 255, 0.9)";

  return (
    <svg
      viewBox="0 0 800 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.svg}
    >
      {/* Defs for gradients and glows */}
      <defs>
        <linearGradient id="boxGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="rgba(255, 255, 255, 0.08)" />
          <stop offset="100%" stopColor="rgba(255, 255, 255, 0.02)" />
        </linearGradient>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {/* Connecting Lines (Background) */}
      <path d="M100 200 L200 200" stroke={lineColor} strokeWidth="2" />
      <path d="M200 200 L300 120" stroke={lineColor} strokeWidth="2" />{" "}
      {/* To Service A */}
      <path d="M200 200 L300 280" stroke={lineColor} strokeWidth="2" />{" "}
      {/* To Service B */}
      <path d="M420 120 L550 120" stroke={lineColor} strokeWidth="2" />{" "}
      {/* Service A to DB */}
      <path d="M420 280 L500 280" stroke={lineColor} strokeWidth="2" />{" "}
      {/* Service B to Queue */}
      <path d="M560 280 L650 200" stroke={lineColor} strokeWidth="2" />{" "}
      {/* Queue to Worker */}
      {/* 1. Client / Load Balancer */}
      <g transform="translate(40, 170)">
        <rect
          width="60"
          height="60"
          rx="12"
          fill="url(#boxGradient)"
          stroke={accentColor}
          strokeWidth="1"
        />
        <text
          x="30"
          y="35"
          textAnchor="middle"
          fill={textColor}
          fontSize="12"
          fontWeight="600"
          className={styles.svgText}
        >
          CLIENT
        </text>
      </g>
      {/* 2. API Gateway */}
      <g transform="translate(200, 160)">
        <rect
          x="-30"
          y="0"
          width="60"
          height="80"
          rx="8"
          fill="#111"
          stroke={secondaryAccent}
          strokeWidth="2"
        />
        <text
          x="0"
          y="45"
          textAnchor="middle"
          fill={textColor}
          fontSize="10"
          fontWeight="600"
          className={styles.svgText}
        >
          API GW
        </text>
        {/* Little animated dots representing traffic could go here ideally */}
      </g>
      {/* 3. Microservice A (Auth/Core) */}
      <g transform="translate(300, 80)">
        <rect
          width="120"
          height="80"
          rx="8"
          fill="url(#boxGradient)"
          stroke="rgba(255,255,255,0.2)"
        />
        <text
          x="60"
          y="30"
          textAnchor="middle"
          fill={textColor}
          fontSize="12"
          fontWeight="BOLD"
        >
          Auth Service
        </text>
        <rect
          x="20"
          y="45"
          width="80"
          height="4"
          rx="2"
          fill={accentColor}
          opacity="0.5"
        />
        <rect
          x="20"
          y="55"
          width="60"
          height="4"
          rx="2"
          fill={accentColor}
          opacity="0.3"
        />
      </g>
      {/* 4. Microservice B (Business Logic) */}
      <g transform="translate(300, 240)">
        <rect
          width="120"
          height="80"
          rx="8"
          fill="url(#boxGradient)"
          stroke="rgba(255,255,255,0.2)"
        />
        <text
          x="60"
          y="30"
          textAnchor="middle"
          fill={textColor}
          fontSize="12"
          fontWeight="BOLD"
        >
          Core API
        </text>
        <rect
          x="20"
          y="45"
          width="80"
          height="4"
          rx="2"
          fill={secondaryAccent}
          opacity="0.5"
        />
        <rect
          x="20"
          y="55"
          width="60"
          height="4"
          rx="2"
          fill={secondaryAccent}
          opacity="0.3"
        />
      </g>
      {/* 5. Distributed DB */}
      <g transform="translate(550, 80)">
        <path
          d="M0 15 C0 5 60 5 60 15 L60 65 C60 75 0 75 0 65 Z"
          fill="#1a1a1a"
          stroke={accentColor}
          strokeWidth="2"
        />
        <ellipse
          cx="30"
          cy="15"
          rx="30"
          ry="10"
          fill="none"
          stroke={accentColor}
          strokeWidth="2"
          strokeOpacity="0.5"
        />
        <path
          d="M0 40 C0 50 60 50 60 40"
          fill="none"
          stroke={accentColor}
          strokeWidth="2"
          strokeOpacity="0.5"
        />
        <text x="30" y="95" textAnchor="middle" fill={textColor} fontSize="12">
          Dist. DB
        </text>
      </g>
      {/* 6. Message Queue */}
      <g transform="translate(500, 255)">
        <rect
          width="60"
          height="50"
          rx="4"
          fill="#222"
          stroke={secondaryAccent}
          strokeDasharray="4 2"
        />
        <text x="30" y="30" textAnchor="middle" fill={textColor} fontSize="11">
          RabbitMQ
        </text>
      </g>
      {/* 7. Worker / Monitoring */}
      <g transform="translate(650, 170)">
        <rect
          width="80"
          height="60"
          rx="8"
          fill="url(#boxGradient)"
          stroke={lineColor}
        />
        <text x="40" y="35" textAnchor="middle" fill={textColor} fontSize="11">
          Monitoring
        </text>
      </g>
      {/* Animated Particles */}
      <circle r="3" fill="#fff" filter="url(#glow)">
        <animateMotion
          dur="3s"
          repeatCount="indefinite"
          path="M100 200 L200 200 L300 120 L420 120 L550 120"
        />
      </circle>
      <circle r="3" fill={accentColor} filter="url(#glow)">
        <animateMotion
          dur="4s"
          begin="1s"
          repeatCount="indefinite"
          path="M100 200 L200 200 L300 280 L420 280 L500 280 L560 280 L650 200"
        />
      </circle>
    </svg>
  );
};

export default SystemArchitecture;
