"use client";
import { Instrument_Serif } from "next/font/google";
import styles from "./style/LLM_new.module.css";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
});

const headings = [
  "Automated Systems",
  "End to End Pipelines",
  "Model Agnostic",
  "Agentic Workflows",
  "Predictive Analytics",
];

export function LLM_new() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % headings.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.LLMContainer}>
      <div className={styles.HeadingContainer}>
        <h1 className={`${styles.Heading}  ${instrumentSerif.className}`}>
          Artificial Intelligence
        </h1>
        <p className={styles.Subtext}>
          Building Smart Systems with Artificial Intelligence
        </p>
      </div>
      <div className={styles.Item}>
        <p className={styles.ItemText}>
          I build intelligent AI systems with data ingestion pipelines, RAG
          architectures, vector databases, multi-LLM orchestration, real-time
          streaming, and agentic tool calling.
        </p>
        <h1 className={styles.HeadingText}>
          <AnimatePresence mode="wait">
            <motion.div
              key={headings[index]}
              initial={{ opacity: 0, scale: 0.92, filter: "blur(6px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 1.06, filter: "blur(6px)" }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              {headings[index]}
            </motion.div>
          </AnimatePresence>
        </h1>
        <p className={`${styles.projectText} ${instrumentSerif.className}`}>
          Some of My AI Powered Creations
        </p>
        <p className={styles.MausamText}>
          Mausam is a AI weather intelligence platform that has a data pipeline
          to fetch and process radar images, combines it with live weather data
          to generate consise reporting. It invokes tools to send mail, send
          message on telegram and issue alerts based on weather conditions.
        </p>
        {/* Mausam Pipeline Flowchart */}
        <svg
          viewBox="0 0 860 320"
          className={styles.FlowchartSvg}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Premium Glass Gradient */}
            <linearGradient
              id="glassGradient"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop offset="0%" stopColor="rgba(255,255,255,0.08)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.02)" />
            </linearGradient>

            {/* Subtle Glow - Elegant & Minimal */}
            <filter
              id="subtleGlow"
              x="-50%"
              y="-50%"
              width="200%"
              height="200%"
            >
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feComposite
                in="coloredBlur"
                operator="over"
                in2="SourceGraphic"
              />
            </filter>

            {/* Refined Arrow Marker - Sharper & smaller */}
            <marker
              id="arrowhead"
              markerWidth="6"
              markerHeight="6"
              refX="5"
              refY="3"
              orient="auto"
            >
              <path
                d="M 0 0 L 6 3 L 0 6"
                fill="none"
                stroke="rgba(255,255,255,0.3)"
                strokeWidth="1"
              />
            </marker>
          </defs>

          {/* Connection lines - Ultra-thin & sleek */}
          <g stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="none">
            {/* Images to R2 */}
            <line
              x1="110"
              y1="85"
              x2="170"
              y2="85"
              markerEnd="url(#arrowhead)"
            />

            {/* R2 to LLM */}
            <line
              x1="280"
              y1="85"
              x2="340"
              y2="85"
              markerEnd="url(#arrowhead)"
            />

            {/* LLM to Tools Hub */}
            <line
              x1="450"
              y1="85"
              x2="500"
              y2="85"
              markerEnd="url(#arrowhead)"
            />

            {/* Tools Hub to Tools */}
            <path
              d="M 610 85 C 650 85, 650 27.5, 720 27.5"
              markerEnd="url(#arrowhead)"
            />
            <path
              d="M 610 85 C 650 85, 650 92.5, 720 92.5"
              markerEnd="url(#arrowhead)"
            />
            <path
              d="M 610 85 C 650 85, 650 157.5, 720 157.5"
              markerEnd="url(#arrowhead)"
            />

            {/* Live Data to LLM */}
            <line
              x1="400"
              y1="200"
              x2="400"
              y2="140"
              markerEnd="url(#arrowhead)"
              strokeDasharray="3,3"
              stroke="rgba(34,197,94,0.3)"
            />

            {/* LLM to PostgreSQL */}
            <path
              d="M 450 85 L 470 85 Q 490 85, 490 105 L 490 220 Q 490 242.5, 530 242.5"
              markerEnd="url(#arrowhead)"
            />

            {/* PostgreSQL to Webpage */}
            <line
              x1="640"
              y1="242.5"
              x2="690"
              y2="242.5"
              markerEnd="url(#arrowhead)"
            />
          </g>

          {/* Animated Particles - Glowing & Vivid */}
          <g>
            <circle r="3" fill="#60a5fa" filter="url(#subtleGlow)">
              <animateMotion dur="4s" repeatCount="indefinite">
                <mpath href="#mainPath" />
              </animateMotion>
            </circle>

            <circle r="3" fill="#a78bfa" filter="url(#subtleGlow)">
              <animateMotion dur="5s" repeatCount="indefinite" begin="2s">
                <mpath href="#dbPath" />
              </animateMotion>
            </circle>
          </g>

          <path
            id="mainPath"
            d="M 65 85 L 230 85 L 400 85 L 560 85 L 610 85 C 650 85, 650 92.5, 730 92.5"
            fill="none"
            stroke="none"
          />
          <path
            id="dbPath"
            d="M 65 85 L 230 85 L 400 85 L 450 85 L 470 85 Q 490 85, 490 105 L 490 220 Q 490 242.5, 530 242.5 L 585 242.5 L 755 242.5"
            fill="none"
            stroke="none"
          />

          {/* Node: Images */}
          <g transform="translate(20, 50)">
            <rect
              width="90"
              height="70"
              rx="12"
              fill="url(#glassGradient)"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="1"
            />
            <text
              x="45"
              y="28"
              textAnchor="middle"
              fill="rgba(255,255,255,0.9)"
              fontSize="18"
            >
              📷
            </text>
            <text
              x="45"
              y="52"
              textAnchor="middle"
              fill="rgba(255,255,255,0.7)"
              fontSize="13"
              fontWeight="400"
              letterSpacing="0.5"
            >
              Images
            </text>
          </g>

          {/* Node: R2 */}
          <g transform="translate(180, 50)">
            <rect
              width="100"
              height="70"
              rx="12"
              fill="url(#glassGradient)"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="1"
            />
            <text
              x="50"
              y="28"
              textAnchor="middle"
              fill="#fdba74"
              fontSize="15"
              fontWeight="500"
              letterSpacing="0.5"
            >
              R2
            </text>
            <text
              x="50"
              y="52"
              textAnchor="middle"
              fill="rgba(255,255,255,0.6)"
              fontSize="11"
              fontWeight="300"
            >
              Storage
            </text>
          </g>

          {/* Node: LLM */}
          <g transform="translate(350, 40)">
            <rect
              width="100"
              height="90"
              rx="16"
              fill="rgba(139,92,246,0.05)"
              stroke="rgba(139,92,246,0.3)"
              strokeWidth="1"
              filter="url(#subtleGlow)"
            />
            <text
              x="50"
              y="32"
              textAnchor="middle"
              fill="#a78bfa"
              fontSize="22"
            >
              🧠
            </text>
            <text
              x="50"
              y="56"
              textAnchor="middle"
              fill="#ddd6fe"
              fontSize="15"
              fontWeight="500"
              letterSpacing="0.5"
            >
              LLM
            </text>
            <text
              x="50"
              y="76"
              textAnchor="middle"
              fill="rgba(255,255,255,0.5)"
              fontSize="10"
              fontWeight="300"
            >
              Processing
            </text>
          </g>

          {/* Node: Live Data */}
          <g transform="translate(350, 200)">
            <rect
              width="100"
              height="70"
              rx="12"
              fill="url(#glassGradient)"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="1"
            />
            <text
              x="50"
              y="28"
              textAnchor="middle"
              fill="#86efac"
              fontSize="16"
            >
              🌡️
            </text>
            <text
              x="50"
              y="52"
              textAnchor="middle"
              fill="rgba(255,255,255,0.7)"
              fontSize="12"
              fontWeight="400"
            >
              Live Data
            </text>
          </g>

          {/* Node: Tools Hub */}
          <g transform="translate(510, 55)">
            <rect
              width="100"
              height="60"
              rx="12"
              fill="url(#glassGradient)"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="1"
            />
            <text x="50" y="24" textAnchor="middle" fill="#fff" fontSize="16">
              ⚡
            </text>
            <text
              x="50"
              y="46"
              textAnchor="middle"
              fill="rgba(255,255,255,0.7)"
              fontSize="12"
              fontWeight="400"
            >
              Tools
            </text>
          </g>

          {/* Tool: Telegram */}
          <g transform="translate(730, 0)">
            <rect
              width="100"
              height="55"
              rx="10"
              fill="url(#glassGradient)"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="1"
            />
            <text
              x="50"
              y="22"
              textAnchor="middle"
              fill="#60a5fa"
              fontSize="14"
            >
              ✈️
            </text>
            <text
              x="50"
              y="42"
              textAnchor="middle"
              fill="rgba(255,255,255,0.6)"
              fontSize="11"
              fontWeight="300"
            >
              Telegram
            </text>
          </g>

          {/* Tool: Mail */}
          <g transform="translate(730, 65)">
            <rect
              width="100"
              height="55"
              rx="10"
              fill="url(#glassGradient)"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="1"
            />
            <text
              x="50"
              y="22"
              textAnchor="middle"
              fill="#f87171"
              fontSize="14"
            >
              ✉️
            </text>
            <text
              x="50"
              y="42"
              textAnchor="middle"
              fill="rgba(255,255,255,0.6)"
              fontSize="11"
              fontWeight="300"
            >
              Mail
            </text>
          </g>

          {/* Tool: Alert */}
          <g transform="translate(730, 130)">
            <rect
              width="100"
              height="55"
              rx="10"
              fill="url(#glassGradient)"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="1"
            />
            <text
              x="50"
              y="22"
              textAnchor="middle"
              fill="#facc15"
              fontSize="14"
            >
              🔔
            </text>
            <text
              x="50"
              y="42"
              textAnchor="middle"
              fill="rgba(255,255,255,0.6)"
              fontSize="11"
              fontWeight="300"
            >
              Alert
            </text>
          </g>

          {/* Node: PostgreSQL */}
          <g transform="translate(530, 210)">
            <rect
              width="110"
              height="65"
              rx="12"
              fill="url(#glassGradient)"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="1"
            />
            <text
              x="55"
              y="26"
              textAnchor="middle"
              fill="#60a5fa"
              fontSize="16"
            >
              🗄️
            </text>
            <text
              x="55"
              y="50"
              textAnchor="middle"
              fill="rgba(255,255,255,0.7)"
              fontSize="12"
              fontWeight="400"
            >
              PostgreSQL
            </text>
          </g>

          {/* Node: Webpage */}
          <g transform="translate(700,220)">
            <rect
              width="110"
              height="55"
              rx="10"
              fill="url(#glassGradient)"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="1"
            />
            <text
              x="55"
              y="22"
              textAnchor="middle"
              fill="#4ade80"
              fontSize="14"
            >
              🌐
            </text>
            <text
              x="55"
              y="42"
              textAnchor="middle"
              fill="rgba(255,255,255,0.7)"
              fontSize="11"
              fontWeight="300"
            >
              Webpage
            </text>
          </g>

          {/* Branch Labels */}
          <text
            x="550"
            y="20"
            fill="rgba(255,255,255,0.5)"
            fontSize="11"
            fontStyle="italic"
          >
            notifications
          </text>
          <text
            x="500"
            y="200"
            fill="rgba(255,255,255,0.5)"
            fontSize="11"
            fontStyle="italic"
          >
            reporting
          </text>
        </svg>
      </div>
    </div>
  );
}
