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
  const accentColor = "var(--gradient-mid)";
  const secondaryAccent = "var(--gradient-start)";
  const lineColor = "rgba(255, 255, 255, 0.15)";
  const textColor = "rgba(255, 255, 255, 0.9)";

  const SVGDefs = ({ prefix = "" }) => (
    <defs>
      <linearGradient id={`${prefix}boxGradient`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="rgba(255, 255, 255, 0.08)" />
        <stop offset="100%" stopColor="rgba(255, 255, 255, 0.02)" />
      </linearGradient>
      <filter id={`${prefix}glow`} x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="4" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
  );

  return (
    <>
      {/* Horizontal Layout - Desktop */}
      <svg
        viewBox="0 0 900 520"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${styles.svg} ${styles.svgHorizontal}`}
      >
        <SVGDefs prefix="h" />
        {/* Connecting Lines */}
        <path d="M110 260 L200 260" stroke={lineColor} strokeWidth="2" />
        <path d="M200 260 L320 100" stroke={lineColor} strokeWidth="2" />
        <path d="M200 260 L320 260" stroke={lineColor} strokeWidth="2" />
        <path d="M200 260 L320 420" stroke={lineColor} strokeWidth="2" />
        <path d="M440 100 L580 100" stroke={lineColor} strokeWidth="2" />
        <path d="M440 260 L580 180" stroke={lineColor} strokeWidth="2" />
        <path d="M440 420 L540 420" stroke={lineColor} strokeWidth="2" />
        <path d="M600 420 L720 340" stroke={lineColor} strokeWidth="2" />

        {/* 1. Client */}
        <g transform="translate(40, 225)">
          <rect
            width="70"
            height="70"
            rx="12"
            fill="url(#hboxGradient)"
            stroke={accentColor}
            strokeWidth="1"
          />
          <text
            x="35"
            y="40"
            textAnchor="middle"
            fill={textColor}
            fontSize="13"
            fontWeight="600"
            className={styles.svgText}
          >
            CLIENT
          </text>
        </g>

        {/* 2. API Gateway */}
        <g transform="translate(200, 210)">
          <rect
            x="-35"
            y="0"
            width="70"
            height="100"
            rx="8"
            fill="#111"
            stroke={secondaryAccent}
            strokeWidth="2"
          />
          <text
            x="0"
            y="55"
            textAnchor="middle"
            fill={textColor}
            fontSize="12"
            fontWeight="600"
            className={styles.svgText}
          >
            API GW
          </text>
        </g>

        {/* 3. Auth Service */}
        <g transform="translate(320, 60)">
          <rect
            width="120"
            height="80"
            rx="8"
            fill="url(#hboxGradient)"
            stroke="rgba(255,255,255,0.2)"
          />
          <text
            x="60"
            y="30"
            textAnchor="middle"
            fill={textColor}
            fontSize="13"
            fontWeight="bold"
          >
            Auth Service
          </text>
          <rect x="20" y="45" width="80" height="4" rx="2" fill={accentColor} opacity="0.5" />
          <rect x="20" y="55" width="60" height="4" rx="2" fill={accentColor} opacity="0.3" />
        </g>

        {/* 4. Core API */}
        <g transform="translate(320, 220)">
          <rect
            width="120"
            height="80"
            rx="8"
            fill="url(#hboxGradient)"
            stroke="rgba(255,255,255,0.2)"
          />
          <text
            x="60"
            y="30"
            textAnchor="middle"
            fill={textColor}
            fontSize="13"
            fontWeight="bold"
          >
            Core API
          </text>
          <rect x="20" y="45" width="80" height="4" rx="2" fill={secondaryAccent} opacity="0.5" />
          <rect x="20" y="55" width="60" height="4" rx="2" fill={secondaryAccent} opacity="0.3" />
        </g>

        {/* 5. Data Service (New) */}
        <g transform="translate(320, 380)">
          <rect
            width="120"
            height="80"
            rx="8"
            fill="url(#hboxGradient)"
            stroke="rgba(255,255,255,0.2)"
          />
          <text
            x="60"
            y="30"
            textAnchor="middle"
            fill={textColor}
            fontSize="13"
            fontWeight="bold"
          >
            Data Service
          </text>
          <rect x="20" y="45" width="80" height="4" rx="2" fill={accentColor} opacity="0.5" />
          <rect x="20" y="55" width="60" height="4" rx="2" fill={accentColor} opacity="0.3" />
        </g>

        {/* 6. Distributed DB */}
        <g transform="translate(580, 60)">
          <path
            d="M0 15 C0 5 70 5 70 15 L70 75 C70 85 0 85 0 75 Z"
            fill="#1a1a1a"
            stroke={accentColor}
            strokeWidth="2"
          />
          <ellipse cx="35" cy="15" rx="35" ry="10" fill="none" stroke={accentColor} strokeWidth="2" strokeOpacity="0.5" />
          <path d="M0 45 C0 55 70 55 70 45" fill="none" stroke={accentColor} strokeWidth="2" strokeOpacity="0.5" />
          <text x="35" y="110" textAnchor="middle" fill={textColor} fontSize="12">
            Dist. DB
          </text>
        </g>

        {/* 7. Cache/Redis */}
        <g transform="translate(580, 150)">
          <rect
            width="70"
            height="55"
            rx="6"
            fill="#1a1a1a"
            stroke={secondaryAccent}
            strokeWidth="2"
          />
          <text x="35" y="32" textAnchor="middle" fill={textColor} fontSize="12">
            Redis
          </text>
        </g>

        {/* 8. Message Queue */}
        <g transform="translate(540, 395)">
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

        {/* 9. Internal Service */}
        <g transform="translate(720, 300)">
          <rect
            width="100"
            height="70"
            rx="8"
            fill="url(#hboxGradient)"
            stroke={lineColor}
          />
          <text x="50" y="40" textAnchor="middle" fill={textColor} fontSize="12">
            Internal Service
          </text>
        </g>

        {/* Animated Particles */}
        <circle r="3" fill="#fff" filter="url(#hglow)">
          <animateMotion
            dur="3s"
            repeatCount="indefinite"
            path="M110 260 L200 260 L320 100 L440 100 L580 100"
          />
        </circle>
        <circle r="3" fill={accentColor} filter="url(#hglow)">
          <animateMotion
            dur="4s"
            begin="1s"
            repeatCount="indefinite"
            path="M110 260 L200 260 L320 420 L440 420 L540 420 L600 420 L720 340"
          />
        </circle>
        <circle r="3" fill={secondaryAccent} filter="url(#hglow)">
          <animateMotion
            dur="3.5s"
            begin="0.5s"
            repeatCount="indefinite"
            path="M110 260 L200 260 L320 260 L440 260 L580 180"
          />
        </circle>
      </svg>

      {/* Vertical Layout - Mobile */}
      <svg
        viewBox="0 0 300 750"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${styles.svg} ${styles.svgVertical}`}
      >
        <SVGDefs prefix="v" />
        {/* Connecting Lines - Vertical */}
        <path d="M150 70 L150 110" stroke={lineColor} strokeWidth="2" />
        <path d="M150 180 L150 220" stroke={lineColor} strokeWidth="2" />
        <path d="M150 290 L150 330" stroke={lineColor} strokeWidth="2" />
        <path d="M150 400 L150 440" stroke={lineColor} strokeWidth="2" />
        <path d="M150 510 L80 550" stroke={lineColor} strokeWidth="2" />
        <path d="M150 510 L220 550" stroke={lineColor} strokeWidth="2" />
        <path d="M150 620 L150 660" stroke={lineColor} strokeWidth="2" />

        {/* 1. Client */}
        <g transform="translate(115, 20)">
          <rect
            width="70"
            height="50"
            rx="10"
            fill="url(#vboxGradient)"
            stroke={accentColor}
            strokeWidth="1"
          />
          <text
            x="35"
            y="30"
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
        <g transform="translate(115, 110)">
          <rect
            width="70"
            height="70"
            rx="8"
            fill="#111"
            stroke={secondaryAccent}
            strokeWidth="2"
          />
          <text
            x="35"
            y="40"
            textAnchor="middle"
            fill={textColor}
            fontSize="11"
            fontWeight="600"
            className={styles.svgText}
          >
            API GW
          </text>
        </g>

        {/* 3. Auth Service */}
        <g transform="translate(90, 220)">
          <rect
            width="120"
            height="70"
            rx="8"
            fill="url(#vboxGradient)"
            stroke="rgba(255,255,255,0.2)"
          />
          <text x="60" y="28" textAnchor="middle" fill={textColor} fontSize="12" fontWeight="bold">
            Auth Service
          </text>
          <rect x="20" y="42" width="80" height="4" rx="2" fill={accentColor} opacity="0.5" />
          <rect x="20" y="52" width="60" height="4" rx="2" fill={accentColor} opacity="0.3" />
        </g>

        {/* 4. Core API */}
        <g transform="translate(90, 330)">
          <rect
            width="120"
            height="70"
            rx="8"
            fill="url(#vboxGradient)"
            stroke="rgba(255,255,255,0.2)"
          />
          <text x="60" y="28" textAnchor="middle" fill={textColor} fontSize="12" fontWeight="bold">
            Core API
          </text>
          <rect x="20" y="42" width="80" height="4" rx="2" fill={secondaryAccent} opacity="0.5" />
          <rect x="20" y="52" width="60" height="4" rx="2" fill={secondaryAccent} opacity="0.3" />
        </g>

        {/* 5. Data Service */}
        <g transform="translate(90, 440)">
          <rect
            width="120"
            height="70"
            rx="8"
            fill="url(#vboxGradient)"
            stroke="rgba(255,255,255,0.2)"
          />
          <text x="60" y="28" textAnchor="middle" fill={textColor} fontSize="12" fontWeight="bold">
            Data Service
          </text>
          <rect x="20" y="42" width="80" height="4" rx="2" fill={accentColor} opacity="0.5" />
          <rect x="20" y="52" width="60" height="4" rx="2" fill={accentColor} opacity="0.3" />
        </g>

        {/* 6. Distributed DB */}
        <g transform="translate(30, 550)">
          <path
            d="M0 12 C0 4 50 4 50 12 L50 52 C50 60 0 60 0 52 Z"
            fill="#1a1a1a"
            stroke={accentColor}
            strokeWidth="2"
          />
          <ellipse cx="25" cy="12" rx="25" ry="8" fill="none" stroke={accentColor} strokeWidth="2" strokeOpacity="0.5" />
          <text x="25" y="78" textAnchor="middle" fill={textColor} fontSize="10">
            Dist. DB
          </text>
        </g>

        {/* 7. RabbitMQ */}
        <g transform="translate(200, 555)">
          <rect
            width="60"
            height="45"
            rx="4"
            fill="#222"
            stroke={secondaryAccent}
            strokeDasharray="4 2"
          />
          <text x="30" y="28" textAnchor="middle" fill={textColor} fontSize="10">
            RabbitMQ
          </text>
        </g>

        {/* 8. Internal Service */}
        <g transform="translate(100, 660)">
          <rect
            width="100"
            height="60"
            rx="8"
            fill="url(#vboxGradient)"
            stroke={lineColor}
          />
          <text x="50" y="35" textAnchor="middle" fill={textColor} fontSize="11">
            Internal Service
          </text>
        </g>

        {/* Animated Particles */}
        <circle r="3" fill="#fff" filter="url(#vglow)">
          <animateMotion
            dur="4s"
            repeatCount="indefinite"
            path="M150 70 L150 110 L150 180 L150 220 L150 290 L150 330 L150 400 L150 440 L150 510 L80 550"
          />
        </circle>
        <circle r="3" fill={accentColor} filter="url(#vglow)">
          <animateMotion
            dur="4.5s"
            begin="1s"
            repeatCount="indefinite"
            path="M150 70 L150 110 L150 180 L150 220 L150 290 L150 330 L150 400 L150 440 L150 510 L220 550 L150 620 L150 660"
          />
        </circle>
      </svg>
    </>
  );
};

export default SystemArchitecture;
