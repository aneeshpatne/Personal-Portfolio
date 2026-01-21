import styles from "../style/SystemArchitecture.module.css";

const Judge0FlowSVG = () => {
  const accentColor = "var(--gradient-mid)";
  const secondaryAccent = "var(--gradient-start)";
  const lineColor = "rgba(255, 255, 255, 0.15)";
  const textColor = "rgba(255, 255, 255, 0.9)";

  const SVGDefs = ({ prefix = "" }) => (
    <defs>
      <linearGradient id={`${prefix}sBoxGradient`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="rgba(255, 255, 255, 0.08)" />
        <stop offset="100%" stopColor="rgba(255, 255, 255, 0.02)" />
      </linearGradient>
      <filter id={`${prefix}sGlow`} x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="4" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <marker
        id={`${prefix}arrowhead`}
        markerWidth="10"
        markerHeight="7"
        refX="9"
        refY="3.5"
        orient="auto"
      >
        <polygon points="0 0, 10 3.5, 0 7" fill={lineColor} />
      </marker>
    </defs>
  );

  return (
    <>
      {/* Horizontal Layout (Desktop) */}
      <svg
        viewBox="0 0 900 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${styles.svg} ${styles.svgHorizontal}`}
        style={{ 
          marginTop: "2rem", 
          maxWidth: "900px", 
          marginInline: "auto"
        }}
      >
        <SVGDefs prefix="h" />

        {/* Connections - Main Flow Left to Right */}
        
        {/* Client -> Server */}
        <path d="M140 120 L200 120" stroke={lineColor} strokeWidth="2" markerEnd="url(#harrowhead)" />
        
        {/* Server -> Postgres (Down) */}
        <path d="M260 160 L260 200" stroke={lineColor} strokeWidth="2" markerEnd="url(#harrowhead)" />
        
        {/* Server -> RabbitMQ */}
        <path d="M320 120 L380 120" stroke={lineColor} strokeWidth="2" markerEnd="url(#harrowhead)" />
        
        {/* RabbitMQ -> Docker */}
        <path d="M480 120 L540 120" stroke={lineColor} strokeWidth="2" markerEnd="url(#harrowhead)" />
        
        {/* Docker -> Containers (Fan out) */}
        {/* Top */}
        <path d="M660 120 C690 120, 690 45, 720 45" stroke={lineColor} strokeWidth="2" markerEnd="url(#harrowhead)" />
        {/* Middle */}
        <path d="M660 120 L720 120" stroke={lineColor} strokeWidth="2" markerEnd="url(#harrowhead)" />
        {/* Bottom */}
        <path d="M660 120 C690 120, 690 195, 720 195" stroke={lineColor} strokeWidth="2" markerEnd="url(#harrowhead)" />

        {/* 1. Client Layer */}
        <g transform="translate(40, 85)">
          <rect width="100" height="70" rx="12" fill="url(#hsBoxGradient)" stroke={accentColor} strokeWidth="1" />
          <text x="50" y="35" textAnchor="middle" fill={textColor} fontSize="13" fontWeight="600" className={styles.svgText}>Client App</text>
          <text x="50" y="55" textAnchor="middle" fill={textColor} fontSize="10" opacity="0.7" className={styles.svgText}>HTTPS</text>
        </g>

        {/* 2. Spring Boot Server */}
        <g transform="translate(200, 80)">
          <rect width="120" height="80" rx="8" fill="#111" stroke={secondaryAccent} strokeWidth="2" />
          <text x="60" y="35" textAnchor="middle" fill={textColor} fontSize="14" fontWeight="600" className={styles.svgText}>Spring Boot</text>
          <text x="60" y="55" textAnchor="middle" fill={textColor} fontSize="11" opacity="0.7" className={styles.svgText}>API Gateway</text>
        </g>

        {/* 3. PostgreSQL (Below Server) */}
        <g transform="translate(210, 200)">
          <path d="M0 10 C0 4 100 4 100 10 L100 50 C100 56 0 56 0 50 Z" fill="#1a1a1a" stroke={accentColor} strokeWidth="1.5" />
          <ellipse cx="50" cy="10" rx="50" ry="6" fill="none" stroke={accentColor} strokeWidth="1.5" strokeOpacity="0.5" />
          <text x="50" y="35" textAnchor="middle" fill={textColor} fontSize="12" fontWeight="600" className={styles.svgText}>PostgreSQL</text>
          <text x="50" y="50" textAnchor="middle" fill={textColor} fontSize="10" opacity="0.7" className={styles.svgText}>User Data</text>
        </g>

        {/* 4. RabbitMQ */}
        <g transform="translate(380, 90)">
          <rect width="100" height="60" rx="6" fill="#222" stroke={lineColor} strokeDasharray="4 2" strokeWidth="1.5" />
          <text x="50" y="35" textAnchor="middle" fill={textColor} fontSize="13" fontWeight="600" className={styles.svgText}>RabbitMQ</text>
        </g>

        {/* 5. Docker Engine */}
        <g transform="translate(540, 80)">
          <rect width="120" height="80" rx="8" fill="url(#hsBoxGradient)" stroke="#0db7ed" strokeWidth="2" />
          <text x="60" y="35" textAnchor="middle" fill={textColor} fontSize="14" fontWeight="600" className={styles.svgText}>Docker</text>
          <text x="60" y="55" textAnchor="middle" fill={textColor} fontSize="11" opacity="0.7" className={styles.svgText}>Worker Host</text>
        </g>

        {/* 6. Isolated Containers */}
        {/* Container 1 */}
        <g transform="translate(720, 20)">
          <rect width="120" height="50" rx="6" fill="#1a1a1a" stroke={accentColor} strokeWidth="1" />
          <text x="60" y="30" textAnchor="middle" fill={textColor} fontSize="11" className={styles.svgText}>Isolated Container 1</text>
        </g>
        {/* Container 2 */}
        <g transform="translate(720, 95)">
          <rect width="120" height="50" rx="6" fill="#1a1a1a" stroke={accentColor} strokeWidth="1" />
          <text x="60" y="30" textAnchor="middle" fill={textColor} fontSize="11" className={styles.svgText}>Isolated Container 2</text>
        </g>
        {/* Container 3 */}
        <g transform="translate(720, 170)">
          <rect width="120" height="50" rx="6" fill="#1a1a1a" stroke={accentColor} strokeWidth="1" />
          <text x="60" y="30" textAnchor="middle" fill={textColor} fontSize="11" className={styles.svgText}>Isolated Container 3</text>
        </g>

        {/* Particles */}
        {/* C -> S */}
        <circle r="3" fill="#fff" filter="url(#hsGlow)"><animateMotion dur="3s" repeatCount="indefinite" path="M140 120 L200 120" /></circle>
        {/* S -> RMQ */}
        <circle r="3" fill={accentColor} filter="url(#hsGlow)"><animateMotion dur="3s" begin="0.5s" repeatCount="indefinite" path="M320 120 L380 120" /></circle>
        {/* RMQ -> Docker */}
        <circle r="3" fill={secondaryAccent} filter="url(#hsGlow)"><animateMotion dur="2s" begin="1.5s" repeatCount="indefinite" path="M480 120 L540 120" /></circle>
        {/* Docker -> C1 */}
        <circle r="2" fill="#fff" filter="url(#hsGlow)"><animateMotion dur="2s" begin="2s" repeatCount="indefinite" path="M660 120 C690 120, 690 45, 720 45" /></circle>
        {/* Docker -> C3 */}
        <circle r="2" fill="#fff" filter="url(#hsGlow)"><animateMotion dur="2s" begin="2.5s" repeatCount="indefinite" path="M660 120 C690 120, 690 195, 720 195" /></circle>
      </svg>


      {/* Vertical Layout (Mobile) */}
      <svg
        viewBox="0 0 360 680"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${styles.svg} ${styles.svgVertical}`}
        style={{ 
          marginTop: "2rem", 
          maxWidth: "400px", 
          marginInline: "auto"
        }}
      >
        <SVGDefs prefix="v" />

        {/* Connections */}
        <path d="M180 80 L180 120" stroke={lineColor} strokeWidth="2" markerEnd="url(#varrowhead)" /> {/* C -> S */}
        <path d="M250 160 L300 160" stroke={lineColor} strokeWidth="2" markerEnd="url(#varrowhead)" /> {/* S -> DB (Side) */}
        <path d="M180 200 L180 240" stroke={lineColor} strokeWidth="2" markerEnd="url(#varrowhead)" /> {/* S -> RMQ */}
        <path d="M180 300 L180 340" stroke={lineColor} strokeWidth="2" markerEnd="url(#varrowhead)" /> {/* RMQ -> Docker */}
        
        {/* Docker -> Containers */}
        <path d="M180 420 L180 460" stroke={lineColor} strokeWidth="2" markerEnd="url(#varrowhead)" />
        <path d="M180 420 C180 440, 60 440, 60 460" stroke={lineColor} strokeWidth="2" markerEnd="url(#varrowhead)" />
        <path d="M180 420 C180 440, 300 440, 300 460" stroke={lineColor} strokeWidth="2" markerEnd="url(#varrowhead)" />

        {/* 1. Client */}
        <g transform="translate(130, 20)">
          <rect width="100" height="60" rx="12" fill="url(#vsBoxGradient)" stroke={accentColor} strokeWidth="1" />
          <text x="50" y="35" textAnchor="middle" fill={textColor} fontSize="13" fontWeight="600" className={styles.svgText}>Client App</text>
        </g>

        {/* 2. Server */}
        <g transform="translate(110, 120)">
          <rect width="140" height="80" rx="8" fill="#111" stroke={secondaryAccent} strokeWidth="2" />
          <text x="70" y="35" textAnchor="middle" fill={textColor} fontSize="14" fontWeight="600" className={styles.svgText}>Spring Boot</text>
          <text x="70" y="55" textAnchor="middle" fill={textColor} fontSize="11" opacity="0.7" className={styles.svgText}>API Gateway</text>
        </g>

        {/* 3. Postgres (Right Side) */}
        <g transform="translate(260, 130)">
           {/* Small icon version */}
          <path d="M0 5 C0 2 50 2 50 5 L50 45 C50 48 0 48 0 45 Z" fill="#1a1a1a" stroke={accentColor} strokeWidth="1.5" />
          <ellipse cx="25" cy="5" rx="25" ry="3" fill="none" stroke={accentColor} strokeWidth="1.5" strokeOpacity="0.5" />
          <text x="25" y="30" textAnchor="middle" fill={textColor} fontSize="10" fontWeight="600" className={styles.svgText}>DB</text>
        </g>

        {/* 4. RabbitMQ */}
        <g transform="translate(130, 240)">
          <rect width="100" height="60" rx="6" fill="#222" stroke={lineColor} strokeDasharray="4 2" strokeWidth="1.5" />
          <text x="50" y="35" textAnchor="middle" fill={textColor} fontSize="13" fontWeight="600" className={styles.svgText}>RabbitMQ</text>
        </g>

        {/* 5. Docker */}
        <g transform="translate(110, 340)">
          <rect width="140" height="80" rx="8" fill="url(#vsBoxGradient)" stroke="#0db7ed" strokeWidth="2" />
          <text x="70" y="35" textAnchor="middle" fill={textColor} fontSize="14" fontWeight="600" className={styles.svgText}>Docker</text>
          <text x="70" y="55" textAnchor="middle" fill={textColor} fontSize="11" opacity="0.7" className={styles.svgText}>Worker Host</text>
        </g>

        {/* 6. Containers */}
        <g transform="translate(10, 460)">
          <rect width="100" height="50" rx="6" fill="#1a1a1a" stroke={accentColor} strokeWidth="1" />
          <text x="50" y="30" textAnchor="middle" fill={textColor} fontSize="10" className={styles.svgText}>Container 1</text>
        </g>
        <g transform="translate(130, 460)">
          <rect width="100" height="50" rx="6" fill="#1a1a1a" stroke={accentColor} strokeWidth="1" />
          <text x="50" y="30" textAnchor="middle" fill={textColor} fontSize="10" className={styles.svgText}>Container 2</text>
        </g>
        <g transform="translate(250, 460)">
          <rect width="100" height="50" rx="6" fill="#1a1a1a" stroke={accentColor} strokeWidth="1" />
          <text x="50" y="30" textAnchor="middle" fill={textColor} fontSize="10" className={styles.svgText}>Container 3</text>
        </g>

        {/* Particles */}
        <circle r="3" fill="#fff" filter="url(#vsGlow)"><animateMotion dur="2s" repeatCount="indefinite" path="M180 80 L180 120" /></circle>
        <circle r="3" fill={accentColor} filter="url(#vsGlow)"><animateMotion dur="2s" begin="0.5s" repeatCount="indefinite" path="M180 200 L180 240" /></circle>
        <circle r="3" fill={secondaryAccent} filter="url(#vsGlow)"><animateMotion dur="2s" begin="1s" repeatCount="indefinite" path="M180 300 L180 340" /></circle>
      </svg>
    </>
  );
};

export default Judge0FlowSVG;
