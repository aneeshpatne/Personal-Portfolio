import { Instrument_Serif } from "next/font/google";
import styles from "./style/LLM_new.module.css";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
});

export function LLM_new() {
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
        <p className={styles.MausamText}>
          Mausam is a AI weather intelligence platform that has a data pipeline
          to fetch and process radar images, combines it with live weather data
          to generate consise reporting. It invokes tools to send mail, send
          message on telegram and issue alerts based on weather conditions.
        </p>

        {/* Mausam Pipeline Flowchart */}
        <svg
          viewBox="0 0 1100 420"
          className={styles.FlowchartSvg}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Gradient for nodes */}
            <linearGradient id="nodeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.12)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.04)" />
            </linearGradient>

            {/* Glow effect */}
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Arrow marker */}
            <marker
              id="arrowhead"
              markerWidth="10"
              markerHeight="8"
              refX="9"
              refY="4"
              orient="auto"
            >
              <polygon
                points="0 0, 10 4, 0 8"
                fill="rgba(255,255,255,0.5)"
              />
            </marker>
          </defs>

          {/* Connection lines with arrows */}
          <g stroke="rgba(255,255,255,0.25)" strokeWidth="2" fill="none">
            {/* Images to R2 */}
            <line x1="110" y1="85" x2="170" y2="85" markerEnd="url(#arrowhead)" />
            {/* R2 to LLM */}
            <line x1="280" y1="85" x2="340" y2="85" markerEnd="url(#arrowhead)" />
            {/* LLM to Live Data */}
            <path d="M 450 85 L 510 85" markerEnd="url(#arrowhead)" />
            {/* Live Data back to LLM (curved feedback loop) */}
            <path d="M 560 120 Q 560 160, 450 160 Q 395 160, 395 120" markerEnd="url(#arrowhead)" strokeDasharray="5,5" stroke="rgba(34,197,94,0.4)" />
            
            {/* LLM splits into two branches */}
            {/* Branch 1: LLM to Tools */}
            <path d="M 450 60 Q 480 30, 640 30 L 700 30" markerEnd="url(#arrowhead)" />
            
            {/* Branch 2: LLM to PostgreSQL (direct) */}
            <path d="M 450 110 Q 480 180, 560 240 L 700 240" markerEnd="url(#arrowhead)" />
            
            {/* Tools branching to individual tools */}
            <line x1="800" y1="30" x2="860" y2="30" markerEnd="url(#arrowhead)" />
            <path d="M 800 30 Q 830 30, 860 80" markerEnd="url(#arrowhead)" />
            <path d="M 800 30 Q 830 50, 860 130" markerEnd="url(#arrowhead)" />
            
            {/* PostgreSQL to Webpage */}
            <line x1="810" y1="240" x2="810" y2="320" markerEnd="url(#arrowhead)" />
          </g>

          {/* Animated flowing particles */}
          <g>
            <circle r="4" fill="#60a5fa" filter="url(#glow)">
              <animateMotion dur="3s" repeatCount="indefinite">
                <mpath href="#mainPath" />
              </animateMotion>
            </circle>
            <circle r="4" fill="#8b5cf6" filter="url(#glow)">
              <animateMotion dur="4s" repeatCount="indefinite" begin="1s">
                <mpath href="#dbPath" />
              </animateMotion>
            </circle>
          </g>
          <path id="mainPath" d="M 20 85 L 450 85 Q 480 30, 640 30 L 800 30" fill="none" stroke="none" />
          <path id="dbPath" d="M 450 110 Q 480 180, 560 240 L 810 240 L 810 360" fill="none" stroke="none" />

          {/* Node: Images */}
          <g transform="translate(20, 50)">
            <rect
              width="90"
              height="70"
              rx="10"
              fill="url(#nodeGradient)"
              stroke="rgba(255,255,255,0.2)"
              strokeWidth="1.5"
            />
            <text x="45" y="28" textAnchor="middle" fill="rgba(255,255,255,0.95)" fontSize="18">
              📷
            </text>
            <text x="45" y="52" textAnchor="middle" fill="rgba(255,255,255,0.85)" fontSize="14" fontWeight="500">
              Images
            </text>
          </g>

          {/* Node: R2 */}
          <g transform="translate(180, 50)">
            <rect
              width="100"
              height="70"
              rx="10"
              fill="url(#nodeGradient)"
              stroke="rgba(249,115,22,0.5)"
              strokeWidth="1.5"
            />
            <text x="50" y="28" textAnchor="middle" fill="rgba(249,115,22,1)" fontSize="16" fontWeight="600">
              R2
            </text>
            <text x="50" y="52" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="12">
              Storage
            </text>
          </g>

          {/* Node: LLM (central, highlighted) */}
          <g transform="translate(350, 40)">
            <rect
              width="100"
              height="90"
              rx="12"
              fill="url(#nodeGradient)"
              stroke="rgba(139,92,246,0.6)"
              strokeWidth="2"
              filter="url(#glow)"
            />
            <text x="50" y="32" textAnchor="middle" fill="rgba(139,92,246,1)" fontSize="20">
              🧠
            </text>
            <text x="50" y="56" textAnchor="middle" fill="rgba(139,92,246,1)" fontSize="16" fontWeight="600">
              LLM
            </text>
            <text x="50" y="76" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="11">
              Processing
            </text>
          </g>

          {/* Node: Live Data */}
          <g transform="translate(510, 50)">
            <rect
              width="100"
              height="70"
              rx="10"
              fill="url(#nodeGradient)"
              stroke="rgba(34,197,94,0.5)"
              strokeWidth="1.5"
            />
            <text x="50" y="28" textAnchor="middle" fill="rgba(34,197,94,1)" fontSize="16">
              🌡️
            </text>
            <text x="50" y="52" textAnchor="middle" fill="rgba(255,255,255,0.85)" fontSize="13" fontWeight="500">
              Live Data
            </text>
          </g>

          {/* Node: Tools Hub */}
          <g transform="translate(700, 0)">
            <rect
              width="100"
              height="60"
              rx="10"
              fill="url(#nodeGradient)"
              stroke="rgba(255,255,255,0.3)"
              strokeWidth="1.5"
            />
            <text x="50" y="24" textAnchor="middle" fill="rgba(255,255,255,0.95)" fontSize="16">
              ⚡
            </text>
            <text x="50" y="46" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="13" fontWeight="500">
              Tools
            </text>
          </g>

          {/* Tool: Telegram */}
          <g transform="translate(870, 0)">
            <rect
              width="100"
              height="55"
              rx="8"
              fill="url(#nodeGradient)"
              stroke="rgba(59,130,246,0.5)"
              strokeWidth="1.5"
            />
            <text x="50" y="22" textAnchor="middle" fill="rgba(59,130,246,1)" fontSize="14">
              ✈️
            </text>
            <text x="50" y="42" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="12">
              Telegram
            </text>
          </g>

          {/* Tool: Mail */}
          <g transform="translate(870, 65)">
            <rect
              width="100"
              height="55"
              rx="8"
              fill="url(#nodeGradient)"
              stroke="rgba(239,68,68,0.5)"
              strokeWidth="1.5"
            />
            <text x="50" y="22" textAnchor="middle" fill="rgba(239,68,68,1)" fontSize="14">
              ✉️
            </text>
            <text x="50" y="42" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="12">
              Mail
            </text>
          </g>

          {/* Tool: Alert */}
          <g transform="translate(870, 130)">
            <rect
              width="100"
              height="55"
              rx="8"
              fill="url(#nodeGradient)"
              stroke="rgba(251,191,36,0.5)"
              strokeWidth="1.5"
            />
            <text x="50" y="22" textAnchor="middle" fill="rgba(251,191,36,1)" fontSize="14">
              🔔
            </text>
            <text x="50" y="42" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="12">
              Alert
            </text>
          </g>

          {/* Node: PostgreSQL */}
          <g transform="translate(710, 210)">
            <rect
              width="110"
              height="65"
              rx="10"
              fill="url(#nodeGradient)"
              stroke="rgba(59,130,246,0.5)"
              strokeWidth="1.5"
            />
            <text x="55" y="26" textAnchor="middle" fill="rgba(59,130,246,1)" fontSize="16">
              🗄️
            </text>
            <text x="55" y="50" textAnchor="middle" fill="rgba(255,255,255,0.85)" fontSize="13" fontWeight="500">
              PostgreSQL
            </text>
          </g>

          {/* Node: Webpage */}
          <g transform="translate(710, 325)">
            <rect
              width="110"
              height="55"
              rx="8"
              fill="url(#nodeGradient)"
              stroke="rgba(34,197,94,0.5)"
              strokeWidth="1.5"
            />
            <text x="55" y="22" textAnchor="middle" fill="rgba(34,197,94,1)" fontSize="14">
              🌐
            </text>
            <text x="55" y="42" textAnchor="middle" fill="rgba(255,255,255,0.85)" fontSize="12" fontWeight="500">
              Webpage
            </text>
          </g>

          {/* Branch Labels */}
          <text x="550" y="20" fill="rgba(255,255,255,0.5)" fontSize="11" fontStyle="italic">
            notifications
          </text>
          <text x="500" y="200" fill="rgba(255,255,255,0.5)" fontSize="11" fontStyle="italic">
            reporting
          </text>
        </svg>
      </div>
    </div>
  );
}
