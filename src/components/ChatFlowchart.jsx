import styles from "./style/LLM_new.module.css";

const FlowchartDefs = ({ prefix = "" }) => (
  <defs>
    {/* Premium Glass Gradient */}
    <linearGradient
      id={`${prefix}ChatGlassGradient`}
      x1="0%"
      y1="0%"
      x2="0%"
      y2="100%"
    >
      <stop offset="0%" stopColor="rgba(255,255,255,0.08)" />
      <stop offset="100%" stopColor="rgba(255,255,255,0.02)" />
    </linearGradient>

    {/* Subtle Glow */}
    <filter
      id={`${prefix}ChatSubtleGlow`}
      x="-50%"
      y="-50%"
      width="200%"
      height="200%"
    >
      <feGaussianBlur stdDeviation="3" result="coloredBlur" />
      <feComposite in="coloredBlur" operator="over" in2="SourceGraphic" />
    </filter>

    {/* Arrow Marker */}
    <marker
      id={`${prefix}ChatArrowhead`}
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

export function ChatFlowchart() {
  return (
    <div className={styles.FlowchartWrapper}>
      {/* Horizontal Layout (Desktop) */}
      <svg
        viewBox="0 0 600 240"
        className={`${styles.FlowchartSvg} ${styles.FlowchartSvgHorizontal}`}
        xmlns="http://www.w3.org/2000/svg"
        style={{ maxWidth: "800px" }}
      >
        <FlowchartDefs prefix="h" />

        {/* Connections */}
        <g stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="none">
          {/* Client -> Router */}
          <line
            x1="120"
            y1="120"
            x2="190"
            y2="120"
            markerEnd="url(#hChatArrowhead)"
          />

          <path
            d="M 310 120 C 350 120, 360 60, 400 60"
            markerEnd="url(#hChatArrowhead)"
          />

          {/* Router -> Provider Middle (Anthropic) */}
          <line
            x1="310"
            y1="120"
            x2="400"
            y2="120"
            markerEnd="url(#hChatArrowhead)"
          />

          {/* Router -> Provider Bottom (Google) */}
          <path
            d="M 310 120 C 350 120, 360 180, 400 180"
            markerEnd="url(#hChatArrowhead)"
          />
        </g>

        {/* Animated Particles */}
        <g>
          {/* Path 1: Top */}
          <circle r="3" fill="#60a5fa" filter="url(#hChatSubtleGlow)">
            <animateMotion dur="3s" repeatCount="indefinite">
              <mpath href="#hChatPath1" />
            </animateMotion>
          </circle>
          {/* Path 2: Middle */}
          <circle r="3" fill="#a78bfa" filter="url(#hChatSubtleGlow)">
            <animateMotion dur="4s" repeatCount="indefinite" begin="1s">
              <mpath href="#hChatPath2" />
            </animateMotion>
          </circle>
          {/* Path 3: Bottom */}
          <circle r="3" fill="#34d399" filter="url(#hChatSubtleGlow)">
            <animateMotion dur="3.5s" repeatCount="indefinite" begin="0.5s">
              <mpath href="#hChatPath3" />
            </animateMotion>
          </circle>
        </g>

        {/* Hidden Motion Paths */}
        <path
          id="hChatPath1"
          d="M 20 120 L 190 120 L 310 120 C 350 120, 360 60, 400 60"
          fill="none"
          stroke="none"
        />
        <path
          id="hChatPath2"
          d="M 20 120 L 190 120 L 310 120 L 400 120"
          fill="none"
          stroke="none"
        />
        <path
          id="hChatPath3"
          d="M 20 120 L 190 120 L 310 120 C 350 120, 360 180, 400 180"
          fill="none"
          stroke="none"
        />

        {/* Node: Client */}
        <g transform="translate(20, 90)">
          <rect
            width="100"
            height="60"
            rx="12"
            fill="url(#hChatGlassGradient)"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="1"
          />
          <text x="50" y="25" textAnchor="middle" fill="#fff" fontSize="16">
            💬
          </text>
          <text
            x="50"
            y="48"
            textAnchor="middle"
            fill="rgba(255,255,255,0.8)"
            fontSize="12"
          >
            User Chat
          </text>
        </g>

        {/* Node: Router */}
        <g transform="translate(190, 85)">
          <rect
            width="120"
            height="70"
            rx="12"
            fill="url(#hChatGlassGradient)"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="1"
          />
          <text x="60" y="28" textAnchor="middle" fill="#facc15" fontSize="18">
            ⚙️
          </text>
          <text
            x="60"
            y="52"
            textAnchor="middle"
            fill="rgba(255,255,255,0.9)"
            fontSize="13"
            fontWeight="500"
          >
            Router & Auth
          </text>
        </g>

        {/* Node: OpenAI */}
        <g transform="translate(400, 30)">
          <rect
            width="110"
            height="50"
            rx="10"
            fill="url(#hChatGlassGradient)"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="1"
          />
          <text x="25" y="32" textAnchor="middle" fill="#10a37f" fontSize="16">
            🤖
          </text>
          <text
            x="65"
            y="32"
            textAnchor="middle"
            fill="rgba(255,255,255,0.7)"
            fontSize="12"
          >
            OpenAI API
          </text>
        </g>

        {/* Node: Anthropic */}
        <g transform="translate(400, 95)">
          <rect
            width="130"
            height="50"
            rx="10"
            fill="url(#hChatGlassGradient)"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="1"
          />
          <text x="25" y="32" textAnchor="middle" fill="#d97757" fontSize="16">
            🧠
          </text>
          <text
            x="85"
            y="32"
            textAnchor="middle"
            fill="rgba(255,255,255,0.7)"
            fontSize="12"
          >
            Anthropic API
          </text>
        </g>

        {/* Node: Gemini */}
        <g transform="translate(400, 160)">
          <rect
            width="110"
            height="50"
            rx="10"
            fill="url(#hChatGlassGradient)"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="1"
          />
          <text x="25" y="32" textAnchor="middle" fill="#4285f4" fontSize="16">
            ✨
          </text>
          <text
            x="65"
            y="32"
            textAnchor="middle"
            fill="rgba(255,255,255,0.7)"
            fontSize="12"
          >
            Gemini API
          </text>
        </g>
      </svg>

      {/* Vertical Layout (Mobile) */}
      <svg
        viewBox="0 0 320 500"
        className={`${styles.FlowchartSvg} ${styles.FlowchartSvgVertical}`}
        xmlns="http://www.w3.org/2000/svg"
        style={{ maxWidth: "280px" }}
      >
        <FlowchartDefs prefix="v" />

        <g stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="none">
          {/* Client -> Router */}
          <line
            x1="160"
            y1="80"
            x2="160"
            y2="130"
            markerEnd="url(#vChatArrowhead)"
          />

          {/* Router -> Split Logic */}
          {/* Main vertical line down from router */}
          <line x1="160" y1="200" x2="160" y2="240" />

          {/* Branch Left to OpenAI */}
          <path
            d="M 160 240 L 80 240 L 80 280"
            markerEnd="url(#vChatArrowhead)"
          />

          {/* Branch Center to Anthropic (longer down) */}
          <path d="M 160 240 L 160 340" markerEnd="url(#vChatArrowhead)" />

          {/* Branch Right to Gemini */}
          <path
            d="M 160 240 L 240 240 L 240 280"
            markerEnd="url(#vChatArrowhead)"
          />
        </g>

        {/* Node: Client */}
        <g transform="translate(110, 20)">
          <rect
            width="100"
            height="60"
            rx="12"
            fill="url(#vChatGlassGradient)"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="1"
          />
          <text x="50" y="25" textAnchor="middle" fill="#fff" fontSize="16">
            💬
          </text>
          <text
            x="50"
            y="48"
            textAnchor="middle"
            fill="rgba(255,255,255,0.8)"
            fontSize="12"
          >
            User Chat
          </text>
        </g>

        {/* Node: Router */}
        <g transform="translate(100, 130)">
          <rect
            width="120"
            height="70"
            rx="12"
            fill="url(#vChatGlassGradient)"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="1"
          />
          <text x="60" y="28" textAnchor="middle" fill="#facc15" fontSize="18">
            ⚙️
          </text>
          <text
            x="60"
            y="52"
            textAnchor="middle"
            fill="rgba(255,255,255,0.9)"
            fontSize="13"
            fontWeight="500"
          >
            Router & Auth
          </text>
        </g>

        {/* Node: OpenAI (Left) */}
        <g transform="translate(30, 280)">
          <rect
            width="100"
            height="50"
            rx="10"
            fill="url(#vChatGlassGradient)"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="1"
          />
          <text x="50" y="20" textAnchor="middle" fill="#10a37f" fontSize="14">
            🤖
          </text>
          <text
            x="50"
            y="40"
            textAnchor="middle"
            fill="rgba(255,255,255,0.7)"
            fontSize="11"
          >
            GPT-4o
          </text>
        </g>

        {/* Node: Gemini (Right) */}
        <g transform="translate(190, 280)">
          <rect
            width="100"
            height="50"
            rx="10"
            fill="url(#vChatGlassGradient)"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="1"
          />
          <text x="50" y="20" textAnchor="middle" fill="#4285f4" fontSize="14">
            ✨
          </text>
          <text
            x="50"
            y="40"
            textAnchor="middle"
            fill="rgba(255,255,255,0.7)"
            fontSize="11"
          >
            Gemini
          </text>
        </g>

        {/* Node: Anthropic (Center Bottom) */}
        <g transform="translate(110, 340)">
          <rect
            width="100"
            height="50"
            rx="10"
            fill="url(#vChatGlassGradient)"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="1"
          />
          <text x="50" y="20" textAnchor="middle" fill="#d97757" fontSize="14">
            🧠
          </text>
          <text
            x="50"
            y="40"
            textAnchor="middle"
            fill="rgba(255,255,255,0.7)"
            fontSize="11"
          >
            Claude 3.5
          </text>
        </g>
      </svg>
    </div>
  );
}
