import styles from "./style/LLM_new.module.css";

const FlowchartDefs = ({ prefix = "" }) => (
  <defs>
    <linearGradient
      id={`${prefix}TkGlassGradient`}
      x1="0%"
      y1="0%"
      x2="0%"
      y2="100%"
    >
      <stop offset="0%" stopColor="rgba(255,255,255,0.08)" />
      <stop offset="100%" stopColor="rgba(255,255,255,0.02)" />
    </linearGradient>

    <filter
      id={`${prefix}TkSubtleGlow`}
      x="-50%"
      y="-50%"
      width="200%"
      height="200%"
    >
      <feGaussianBlur stdDeviation="3" result="coloredBlur" />
      <feComposite in="coloredBlur" operator="over" in2="SourceGraphic" />
    </filter>

    <marker
      id={`${prefix}TkArrowhead`}
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
);

export function TazaKhabarFlowchart() {
  return (
    <div className={styles.FlowchartWrapper}>
      {/* Horizontal Layout */}
      <svg
        viewBox="0 0 860 320"
        className={`${styles.FlowchartSvg} ${styles.FlowchartSvgHorizontal}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <FlowchartDefs prefix="h" />

        {/* Connections (Spokes) */}
        <g stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="none">
          {/* Center to Top (Emergency) */}
          <line x1="430" y1="120" x2="430" y2="75" markerEnd="url(#hTkArrowhead)" />
          
          {/* Center to Left (Web Search) */}
          <line x1="370" y1="160" x2="280" y2="160" markerEnd="url(#hTkArrowhead)" />
          
          {/* Center to Right (Report) */}
          <line x1="490" y1="160" x2="580" y2="160" markerEnd="url(#hTkArrowhead)" />

          {/* Center to Bottom Left (Mail) */}
          <line x1="400" y1="200" x2="340" y2="240" markerEnd="url(#hTkArrowhead)" />

          {/* Center to Bottom Right (Message) */}
          <line x1="460" y1="200" x2="520" y2="240" markerEnd="url(#hTkArrowhead)" />
        </g>

        {/* Central Agent Node */}
        <g transform="translate(370, 115)">
          <rect
            width="120"
            height="90"
            rx="16"
            fill="rgba(139,92,246,0.05)"
            stroke="rgba(139,92,246,0.3)"
            strokeWidth="1"
            filter="url(#hTkSubtleGlow)"
          />
          <text x="60" y="35" textAnchor="middle" fill="#a78bfa" fontSize="24">
            🤖
          </text>
          <text
            x="60"
            y="60"
            textAnchor="middle"
            fill="#ddd6fe"
            fontSize="16"
            fontWeight="500"
            letterSpacing="0.5"
          >
            Agent
          </text>
           <text
            x="60"
            y="78"
            textAnchor="middle"
            fill="rgba(255,255,255,0.5)"
            fontSize="11"
            fontWeight="300"
          >
            Orchestrator
          </text>
        </g>

        {/* Top Node: Emergency News */}
        <g transform="translate(370, 10)">
          <rect
            width="120"
            height="60"
            rx="12"
            fill="url(#hTkGlassGradient)"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="1"
          />
          <text x="60" y="25" textAnchor="middle" fill="#ef4444" fontSize="16">
            🚨
          </text>
          <text
            x="60"
            y="48"
            textAnchor="middle"
            fill="rgba(255,255,255,0.8)"
            fontSize="12"
            fontWeight="400"
          >
            Emergency News
          </text>
        </g>

        {/* Left Node: Web Search */}
        <g transform="translate(150, 130)">
          <rect
            width="120"
            height="60"
            rx="12"
            fill="url(#hTkGlassGradient)"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="1"
          />
          <text x="60" y="25" textAnchor="middle" fill="#3b82f6" fontSize="16">
            🔍
          </text>
          <text
            x="60"
            y="48"
            textAnchor="middle"
            fill="rgba(255,255,255,0.8)"
            fontSize="12"
            fontWeight="400"
          >
            Web Search
          </text>
        </g>

        {/* Right Node: Generate Report */}
        <g transform="translate(590, 130)">
          <rect
            width="120"
            height="60"
            rx="12"
            fill="url(#hTkGlassGradient)"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="1"
          />
          <text x="60" y="25" textAnchor="middle" fill="#10b981" fontSize="16">
            📄
          </text>
          <text
            x="60"
            y="48"
            textAnchor="middle"
            fill="rgba(255,255,255,0.8)"
            fontSize="12"
            fontWeight="400"
          >
            Generate Report
          </text>
        </g>

        {/* Bottom Left: Mail */}
        <g transform="translate(260, 240)">
          <rect
            width="100"
            height="55"
            rx="10"
            fill="url(#hTkGlassGradient)"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="1"
          />
          <text x="50" y="24" textAnchor="middle" fill="#f472b6" fontSize="14">
            ✉️
          </text>
          <text
            x="50"
            y="44"
            textAnchor="middle"
            fill="rgba(255,255,255,0.7)"
            fontSize="11"
            fontWeight="300"
          >
            Mail Tool
          </text>
        </g>

        {/* Bottom Right: Message */}
        <g transform="translate(500, 240)">
          <rect
            width="100"
            height="55"
            rx="10"
            fill="url(#hTkGlassGradient)"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="1"
          />
          <text x="50" y="24" textAnchor="middle" fill="#60a5fa" fontSize="14">
            💬
          </text>
          <text
            x="50"
            y="44"
            textAnchor="middle"
            fill="rgba(255,255,255,0.7)"
            fontSize="11"
            fontWeight="300"
          >
            Message Tool
          </text>
        </g>
      </svg>

      {/* Vertical Layout */}
      <svg
        viewBox="0 0 380 440"
        className={`${styles.FlowchartSvg} ${styles.FlowchartSvgVertical}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <FlowchartDefs prefix="v" />

        {/* Connections */}
        <g stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="none">
          {/* Center to Top (Emergency) */}
          <line
            x1="190"
            y1="200"
            x2="190"
            y2="85"
            markerEnd="url(#vTkArrowhead)"
          />

          {/* Center to Top-Left (Search) */}
          <line
            x1="160"
            y1="220"
            x2="90"
            y2="185"
            markerEnd="url(#vTkArrowhead)"
          />

          {/* Center to Top-Right (Mail) */}
          <line
            x1="220"
            y1="220"
            x2="290"
            y2="185"
            markerEnd="url(#vTkArrowhead)"
          />

          {/* Center to Bottom-Left (Message) */}
          <line
            x1="160"
            y1="280"
            x2="90"
            y2="325"
            markerEnd="url(#vTkArrowhead)"
          />

          {/* Center to Bottom-Right (Report) */}
          <line
            x1="220"
            y1="280"
            x2="290"
            y2="325"
            markerEnd="url(#vTkArrowhead)"
          />
        </g>

        {/* Central Agent Node */}
        <g transform="translate(130, 200)">
          <rect
            width="120"
            height="100"
            rx="16"
            fill="rgba(139,92,246,0.05)"
            stroke="rgba(139,92,246,0.3)"
            strokeWidth="1"
            filter="url(#vTkSubtleGlow)"
          />
          <text x="60" y="40" textAnchor="middle" fill="#a78bfa" fontSize="24">
            🤖
          </text>
          <text
            x="60"
            y="65"
            textAnchor="middle"
            fill="#ddd6fe"
            fontSize="16"
            fontWeight="500"
          >
            Agent
          </text>
          <text
            x="60"
            y="85"
            textAnchor="middle"
            fill="rgba(255,255,255,0.5)"
            fontSize="11"
            fontWeight="300"
          >
            Orchestrator
          </text>
        </g>

        {/* Top Center: Emergency */}
        <g transform="translate(130, 20)">
          <rect
            width="120"
            height="60"
            rx="10"
            fill="url(#vTkGlassGradient)"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="1"
          />
          <text x="60" y="24" textAnchor="middle" fill="#ef4444" fontSize="14">
            🚨
          </text>
          <text
            x="60"
            y="44"
            textAnchor="middle"
            fill="rgba(255,255,255,0.7)"
            fontSize="11"
            fontWeight="300"
          >
            Emergency News
          </text>
        </g>

        {/* Top Left: Search */}
        <g transform="translate(15, 120)">
          <rect
            width="100"
            height="60"
            rx="10"
            fill="url(#vTkGlassGradient)"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="1"
          />
          <text x="50" y="22" textAnchor="middle" fill="#3b82f6" fontSize="14">
            🔍
          </text>
          <text
            x="50"
            y="44"
            textAnchor="middle"
            fill="rgba(255,255,255,0.7)"
            fontSize="11"
            fontWeight="300"
          >
            Web Search
          </text>
        </g>

        {/* Top Right: Mail */}
        <g transform="translate(265, 120)">
          <rect
            width="100"
            height="60"
            rx="10"
            fill="url(#vTkGlassGradient)"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="1"
          />
          <text x="50" y="22" textAnchor="middle" fill="#f472b6" fontSize="14">
            ✉️
          </text>
          <text
            x="50"
            y="44"
            textAnchor="middle"
            fill="rgba(255,255,255,0.7)"
            fontSize="11"
            fontWeight="300"
          >
            Mail
          </text>
        </g>

        {/* Bottom Left: Message */}
        <g transform="translate(15, 330)">
          <rect
            width="100"
            height="60"
            rx="10"
            fill="url(#vTkGlassGradient)"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="1"
          />
          <text x="50" y="22" textAnchor="middle" fill="#60a5fa" fontSize="14">
            💬
          </text>
          <text
            x="50"
            y="44"
            textAnchor="middle"
            fill="rgba(255,255,255,0.7)"
            fontSize="11"
            fontWeight="300"
          >
            Message
          </text>
        </g>

        {/* Bottom Right: Report */}
        <g transform="translate(265, 330)">
          <rect
            width="100"
            height="60"
            rx="10"
            fill="url(#vTkGlassGradient)"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="1"
          />
          <text x="50" y="22" textAnchor="middle" fill="#10b981" fontSize="14">
            📄
          </text>
          <text
            x="50"
            y="44"
            textAnchor="middle"
            fill="rgba(255,255,255,0.7)"
            fontSize="11"
            fontWeight="300"
          >
            Generate Report
          </text>
        </g>
      </svg>
    </div>
  );
}
