import styles from "../style/SystemArchitecture.module.css";

const SurakshaFlowSVG = () => {
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
        viewBox="0 0 740 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${styles.svg} ${styles.svgHorizontal}`}
        style={{ 
          marginTop: "2rem", 
          maxWidth: "740px", 
          marginInline: "auto"
        }}
      >
        <SVGDefs prefix="h" />

        {/* Connections - Left to Right */}
        <path d="M120 120 L160 120" stroke={lineColor} strokeWidth="2" markerEnd="url(#harrowhead)" />
        <path d="M300 120 L340 120" stroke={lineColor} strokeWidth="2" markerEnd="url(#harrowhead)" />
        <path d="M540 100 L580 60" stroke={lineColor} strokeWidth="2" markerEnd="url(#harrowhead)" />
        <path d="M540 120 L620 120" stroke={lineColor} strokeWidth="2" markerEnd="url(#harrowhead)" />
        <path d="M540 140 L580 180" stroke={lineColor} strokeWidth="2" markerEnd="url(#harrowhead)" />

        {/* 1. Client Layer */}
        <g transform="translate(20, 85)">
          <rect width="100" height="70" rx="12" fill="url(#hsBoxGradient)" stroke={accentColor} strokeWidth="1" />
          <text x="50" y="35" textAnchor="middle" fill={textColor} fontSize="13" fontWeight="600" className={styles.svgText}>Client App</text>
          <text x="50" y="55" textAnchor="middle" fill={textColor} fontSize="10" opacity="0.7" className={styles.svgText}>HTTPS</text>
        </g>

        {/* 2. API Gateway Layer */}
        <g transform="translate(160, 80)">
          <rect width="140" height="80" rx="8" fill="#111" stroke={secondaryAccent} strokeWidth="2" />
          <text x="70" y="35" textAnchor="middle" fill={textColor} fontSize="14" fontWeight="600" className={styles.svgText}>Spring Boot API</text>
          <text x="70" y="55" textAnchor="middle" fill={textColor} fontSize="11" opacity="0.7" className={styles.svgText}>Gateway / JWKS</text>
        </g>

        {/* 3. Service Layer */}
        <g transform="translate(340, 80)">
          <rect width="200" height="80" rx="8" fill="url(#hsBoxGradient)" stroke="rgba(255,255,255,0.2)" />
          <rect x="60" y="0" width="80" height="4" fill={accentColor} opacity="0.8" />
          <text x="100" y="35" textAnchor="middle" fill={textColor} fontSize="14" fontWeight="bold" className={styles.svgText}>Auth Services</text>
          <text x="100" y="55" textAnchor="middle" fill={textColor} fontSize="11" opacity="0.7" className={styles.svgText}>JWT • Hashing • Org</text>
        </g>

        {/* 4. Data & External Layers */}
        <g transform="translate(580, 20)">
          <rect width="100" height="60" rx="6" fill="#1a1a1a" stroke={secondaryAccent} strokeWidth="1.5" />
          <text x="50" y="35" textAnchor="middle" fill={textColor} fontSize="12" fontWeight="600" className={styles.svgText}>Redis</text>
          <text x="50" y="50" textAnchor="middle" fill={textColor} fontSize="10" opacity="0.7" className={styles.svgText}>Tokens / Cache</text>
        </g>
        <g transform="translate(620, 90)">
          <path d="M0 10 C0 4 80 4 80 10 L80 50 C80 56 0 56 0 50 Z" fill="#1a1a1a" stroke={accentColor} strokeWidth="1.5" />
          <ellipse cx="40" cy="10" rx="40" ry="6" fill="none" stroke={accentColor} strokeWidth="1.5" strokeOpacity="0.5" />
          <text x="40" y="35" textAnchor="middle" fill={textColor} fontSize="12" fontWeight="600" className={styles.svgText}>PostgreSQL</text>
          <text x="40" y="50" textAnchor="middle" fill={textColor} fontSize="10" opacity="0.7" className={styles.svgText}>User Data</text>
        </g>
        <g transform="translate(580, 160)">
          <rect width="100" height="60" rx="6" fill="#222" stroke={lineColor} strokeDasharray="4 2" strokeWidth="1.5" />
          <text x="50" y="35" textAnchor="middle" fill={textColor} fontSize="12" fontWeight="600" className={styles.svgText}>RabbitMQ</text>
          <text x="50" y="50" textAnchor="middle" fill={textColor} fontSize="10" opacity="0.7" className={styles.svgText}>→ SMTP</text>
        </g>

        {/* Particles */}
        <circle r="3" fill="#fff" filter="url(#hsGlow)"><animateMotion dur="3s" repeatCount="indefinite" path="M120 120 L160 120" /></circle>
        <circle r="3" fill={accentColor} filter="url(#hsGlow)"><animateMotion dur="3s" begin="1s" repeatCount="indefinite" path="M300 120 L340 120" /></circle>
        <circle r="3" fill={secondaryAccent} filter="url(#hsGlow)"><animateMotion dur="2s" begin="1.5s" repeatCount="indefinite" path="M540 100 L580 60" /></circle>
      </svg>

      {/* Vertical Layout (Mobile) */}
      <svg
        viewBox="180 0 440 450"
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
        <path d="M400 90 L400 130" stroke={lineColor} strokeWidth="2" markerEnd="url(#varrowhead)" />
        <path d="M400 210 L400 250" stroke={lineColor} strokeWidth="2" markerEnd="url(#varrowhead)" />
        <path d="M340 300 L250 300 L250 370" stroke={lineColor} strokeWidth="2" markerEnd="url(#varrowhead)" />
        <path d="M400 330 L400 370" stroke={lineColor} strokeWidth="2" markerEnd="url(#varrowhead)" />
        <path d="M460 300 L550 300 L550 370" stroke={lineColor} strokeWidth="2" markerEnd="url(#varrowhead)" />

        {/* 1. Client Layer */}
        <g transform="translate(350, 20)">
          <rect width="100" height="70" rx="12" fill="url(#vsBoxGradient)" stroke={accentColor} strokeWidth="1" />
          <text x="50" y="35" textAnchor="middle" fill={textColor} fontSize="13" fontWeight="600" className={styles.svgText}>Client App</text>
          <text x="50" y="55" textAnchor="middle" fill={textColor} fontSize="10" opacity="0.7" className={styles.svgText}>HTTPS</text>
        </g>

        {/* 2. API Gateway Layer */}
        <g transform="translate(330, 130)">
          <rect width="140" height="80" rx="8" fill="#111" stroke={secondaryAccent} strokeWidth="2" />
          <text x="70" y="35" textAnchor="middle" fill={textColor} fontSize="14" fontWeight="600" className={styles.svgText}>Spring Boot API</text>
          <text x="70" y="55" textAnchor="middle" fill={textColor} fontSize="11" opacity="0.7" className={styles.svgText}>Gateway / JWKS</text>
        </g>

        {/* 3. Service Layer */}
        <g transform="translate(300, 250)">
          <rect width="200" height="80" rx="8" fill="url(#vsBoxGradient)" stroke="rgba(255,255,255,0.2)" />
          <rect x="60" y="0" width="80" height="4" fill={accentColor} opacity="0.8" />
          <text x="100" y="35" textAnchor="middle" fill={textColor} fontSize="14" fontWeight="bold" className={styles.svgText}>Auth Services</text>
          <text x="100" y="55" textAnchor="middle" fill={textColor} fontSize="11" opacity="0.7" className={styles.svgText}>JWT • Hashing • Org</text>
        </g>

        {/* 4. Data & External Layers */}
        <g transform="translate(200, 370)">
          <rect width="100" height="60" rx="6" fill="#1a1a1a" stroke={secondaryAccent} strokeWidth="1.5" />
          <text x="50" y="35" textAnchor="middle" fill={textColor} fontSize="12" fontWeight="600" className={styles.svgText}>Redis</text>
          <text x="50" y="50" textAnchor="middle" fill={textColor} fontSize="10" opacity="0.7" className={styles.svgText}>Tokens / Cache</text>
        </g>
        <g transform="translate(360, 370)">
          <path d="M0 10 C0 4 80 4 80 10 L80 50 C80 56 0 56 0 50 Z" fill="#1a1a1a" stroke={accentColor} strokeWidth="1.5" />
          <ellipse cx="40" cy="10" rx="40" ry="6" fill="none" stroke={accentColor} strokeWidth="1.5" strokeOpacity="0.5" />
          <text x="40" y="35" textAnchor="middle" fill={textColor} fontSize="12" fontWeight="600" className={styles.svgText}>PostgreSQL</text>
          <text x="40" y="50" textAnchor="middle" fill={textColor} fontSize="10" opacity="0.7" className={styles.svgText}>User Data</text>
        </g>
        <g transform="translate(500, 370)">
          <rect width="100" height="60" rx="6" fill="#222" stroke={lineColor} strokeDasharray="4 2" strokeWidth="1.5" />
          <text x="50" y="35" textAnchor="middle" fill={textColor} fontSize="12" fontWeight="600" className={styles.svgText}>RabbitMQ</text>
          <text x="50" y="50" textAnchor="middle" fill={textColor} fontSize="10" opacity="0.7" className={styles.svgText}>→ SMTP</text>
        </g>

        {/* Particles */}
        <circle r="3" fill="#fff" filter="url(#vsGlow)"><animateMotion dur="3s" repeatCount="indefinite" path="M400 90 L400 130" /></circle>
        <circle r="3" fill={accentColor} filter="url(#vsGlow)"><animateMotion dur="3s" begin="1s" repeatCount="indefinite" path="M400 210 L400 250" /></circle>
        <circle r="3" fill={secondaryAccent} filter="url(#vsGlow)"><animateMotion dur="2s" begin="1.5s" repeatCount="indefinite" path="M340 300 L250 300 L250 370" /></circle>
      </svg>
    </>
  );
};

export default SurakshaFlowSVG;
