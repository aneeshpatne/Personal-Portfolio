import styles from "../style/SystemArchitecture.module.css";

const CCTVFlowSVG = () => {
  const accentColor = "var(--gradient-mid)";
  const secondaryAccent = "var(--gradient-start)";
  const lineColor = "rgba(255, 255, 255, 0.15)";
  const textColor = "rgba(255, 255, 255, 0.9)";

  const SVGDefs = ({ prefix = "" }) => (
    <defs>
      <linearGradient id={`${prefix}cBoxGradient`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="rgba(255, 255, 255, 0.08)" />
        <stop offset="100%" stopColor="rgba(255, 255, 255, 0.02)" />
      </linearGradient>
      <filter id={`${prefix}cGlow`} x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="4" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <marker
        id={`${prefix}carrowhead`}
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
        viewBox="0 0 740 340"
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

        {/* Labels & Separator */}
        <text x="50" y="20" fill={textColor} fontSize="10" fontWeight="bold" opacity="0.4" letterSpacing="0.1em">VIDEO PIPELINE</text>
        <line x1="50" y1="140" x2="690" y2="140" stroke={lineColor} strokeDasharray="5,8" strokeWidth="1" opacity="0.4" />
        <text x="50" y="160" fill={textColor} fontSize="10" fontWeight="bold" opacity="0.4" letterSpacing="0.1em">CONTROL & DATA PLANE</text>

        {/* --- Row 1: Video Pipeline (Centered Y ~ 70) --- */}
        
        {/* Connections */}
        {/* ESP(150) -> FFMPEG(210) */}
        <path d="M150 70 L210 70" stroke={lineColor} strokeWidth="2" markerEnd="url(#hcarrowhead)" />
        
        {/* FFMPEG(390) -> Outputs(480) */}
        {/* To RTSP (Top) */}
        <path d="M390 70 L435 70 L435 45 L480 45" stroke={lineColor} strokeWidth="2" markerEnd="url(#hcarrowhead)" />
        {/* To Storage (Bottom) */}
        <path d="M390 70 L435 70 L435 95 L480 95" stroke={lineColor} strokeWidth="2" markerEnd="url(#hcarrowhead)" />

        {/* Components */}
        <g transform="translate(50, 35)">
          <rect width="100" height="70" rx="12" fill="url(#hcBoxGradient)" stroke={accentColor} strokeWidth="1" />
          <text x="50" y="35" textAnchor="middle" fill={textColor} fontSize="13" fontWeight="600" className={styles.svgText}>ESP32-CAM</text>
          <text x="50" y="55" textAnchor="middle" fill={textColor} fontSize="10" opacity="0.7" className={styles.svgText}>Live Stream</text>
        </g>

        <g transform="translate(210, 30)">
          <rect width="180" height="80" rx="8" fill="#111" stroke={secondaryAccent} strokeWidth="2" />
          <text x="90" y="35" textAnchor="middle" fill={textColor} fontSize="14" fontWeight="600" className={styles.svgText}>FFMPEG Server</text>
          <text x="90" y="55" textAnchor="middle" fill={textColor} fontSize="11" opacity="0.7" className={styles.svgText}>Restream • Record</text>
        </g>

        <g transform="translate(480, 20)">
          <rect width="140" height="50" rx="6" fill="#1a1a1a" stroke={secondaryAccent} strokeWidth="1.5" />
          <text x="70" y="30" textAnchor="middle" fill={textColor} fontSize="12" fontWeight="600" className={styles.svgText}>RTSP Feed</text>
        </g>

        <g transform="translate(480, 80)">
          <path d="M0 10 C0 4 140 4 140 10 L140 40 C140 46 0 46 0 40 Z" fill="#1a1a1a" stroke={accentColor} strokeWidth="1.5" />
          <ellipse cx="70" cy="10" rx="70" ry="6" fill="none" stroke={accentColor} strokeWidth="1.5" strokeOpacity="0.5" />
          <text x="70" y="32" textAnchor="middle" fill={textColor} fontSize="12" fontWeight="600" className={styles.svgText}>Video Storage</text>
        </g>


        {/* --- Row 2: Control Plane (Centered Y ~ 240) --- */}

        {/* Connections */}
        {/* DB(150) -> FastAPI(210) */}
        <path d="M150 240 L210 240" stroke={lineColor} strokeWidth="2" markerEnd="url(#hcarrowhead)" />

        {/* FastAPI(390) -> Stack(480) - Vertical Bus */}
        <path d="M390 240 L435 240" stroke={lineColor} strokeWidth="2" /> {/* Main Stem */}
        <path d="M435 177 L435 303" stroke={lineColor} strokeWidth="2" /> {/* Vertical Bus Line */}
        
        {/* Branches to items */}
        <path d="M435 177 L480 177" stroke={lineColor} strokeWidth="2" markerEnd="url(#hcarrowhead)" />
        <path d="M435 219 L480 219" stroke={lineColor} strokeWidth="2" markerEnd="url(#hcarrowhead)" />
        <path d="M435 261 L480 261" stroke={lineColor} strokeWidth="2" markerEnd="url(#hcarrowhead)" />
        <path d="M435 303 L480 303" stroke={lineColor} strokeWidth="2" markerEnd="url(#hcarrowhead)" />

        {/* Components */}
        <g transform="translate(50, 225)">
          <path d="M0 8 C0 3 100 3 100 8 L100 32 C100 37 0 37 0 32 Z" fill="#1a1a1a" stroke={accentColor} strokeWidth="1.5" />
          <ellipse cx="50" cy="8" rx="50" ry="5" fill="none" stroke={accentColor} strokeWidth="1.5" strokeOpacity="0.5" />
          <text x="50" y="25" textAnchor="middle" fill={textColor} fontSize="11" fontWeight="600" className={styles.svgText}>DB / Logs</text>
        </g>

        <g transform="translate(210, 200)">
          <rect width="180" height="80" rx="8" fill="#111" stroke={accentColor} strokeWidth="2" strokeDasharray="4 2" />
          <text x="90" y="35" textAnchor="middle" fill={textColor} fontSize="14" fontWeight="600" className={styles.svgText}>FastAPI Service</text>
          <text x="90" y="55" textAnchor="middle" fill={textColor} fontSize="11" opacity="0.7" className={styles.svgText}>Logic • Detection</text>
        </g>

        {/* Stacked Outputs */}
        <g transform="translate(480, 160)">
          <rect width="140" height="34" rx="6" fill="#222" stroke={lineColor} strokeWidth="1.5" />
          <text x="70" y="21" textAnchor="middle" fill={textColor} fontSize="11" fontWeight="600" className={styles.svgText}>Vid by Motion</text>
        </g>
        <g transform="translate(480, 202)">
          <rect width="140" height="34" rx="6" fill="#222" stroke={lineColor} strokeWidth="1.5" />
          <text x="70" y="21" textAnchor="middle" fill={textColor} fontSize="11" fontWeight="600" className={styles.svgText}>Vid by Timestamp</text>
        </g>
        <g transform="translate(480, 244)">
          <rect width="140" height="34" rx="6" fill="#222" stroke={lineColor} strokeWidth="1.5" />
          <text x="70" y="21" textAnchor="middle" fill={textColor} fontSize="11" fontWeight="600" className={styles.svgText}>Motion Logs</text>
        </g>
        <g transform="translate(480, 286)">
          <rect width="140" height="34" rx="6" fill="#222" stroke={lineColor} strokeDasharray="4 2" strokeWidth="1.5" />
          <text x="70" y="21" textAnchor="middle" fill={textColor} fontSize="11" fontWeight="600" className={styles.svgText}>Telegram Bot</text>
        </g>

        {/* Particles */}
        <circle r="2.5" fill="#fff" filter="url(#hcGlow)"><animateMotion dur="2s" repeatCount="indefinite" path="M150 70 L210 70" /></circle>
        <circle r="2.5" fill={lineColor} filter="url(#hcGlow)"><animateMotion dur="3s" repeatCount="indefinite" path="M390 240 L435 240" /></circle>
        <circle r="2.5" fill={accentColor} filter="url(#hcGlow)"><animateMotion dur="4s" repeatCount="indefinite" path="M435 240 L435 177 L480 177" /></circle>
        <circle r="2.5" fill={accentColor} filter="url(#hcGlow)"><animateMotion dur="4s" begin="1s" repeatCount="indefinite" path="M435 240 L435 303 L480 303" /></circle>

      </svg>

      {/* Vertical Layout (Mobile) */}
      <svg
        viewBox="180 0 440 780"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${styles.svg} ${styles.svgVertical}`}
        style={{ 
          marginTop: "2rem", 
          maxWidth: "400px", 
          marginInline: "auto"
        }}
      >
        <SVGDefs prefix="vc" />

        {/* Video Pipeline Connections */}
        <path d="M400 90 L400 130" stroke={lineColor} strokeWidth="2" markerEnd="url(#vcarrowhead)" />
        {/* FFMPEG -> RTSP (Left) */}
        <path d="M340 210 L300 240" stroke={lineColor} strokeWidth="2" markerEnd="url(#vcarrowhead)" />
        {/* FFMPEG -> Storage (Right) */}
        <path d="M460 210 L500 240" stroke={lineColor} strokeWidth="2" markerEnd="url(#vcarrowhead)" />
        
        {/* Row 1 Components */}
        <g transform="translate(350, 20)">
          <rect width="100" height="70" rx="12" fill="url(#vccBoxGradient)" stroke={accentColor} strokeWidth="1" />
          <text x="50" y="35" textAnchor="middle" fill={textColor} fontSize="13" fontWeight="600" className={styles.svgText}>ESP32-CAM</text>
        </g>
        <g transform="translate(310, 130)">
          <rect width="180" height="80" rx="8" fill="#111" stroke={secondaryAccent} strokeWidth="2" />
          <text x="90" y="35" textAnchor="middle" fill={textColor} fontSize="14" fontWeight="600" className={styles.svgText}>FFMPEG Server</text>
        </g>
        
        {/* RTSP */}
        <g transform="translate(240, 240)">
          <rect width="100" height="60" rx="6" fill="#1a1a1a" stroke={secondaryAccent} strokeWidth="1.5" />
          <text x="50" y="35" textAnchor="middle" fill={textColor} fontSize="12" fontWeight="600" className={styles.svgText}>RTSP</text>
        </g>
        
        {/* Video Storage */}
        <g transform="translate(460, 240)">
          <path d="M0 10 C0 4 100 4 100 10 L100 50 C100 56 0 56 0 50 Z" fill="#1a1a1a" stroke={accentColor} strokeWidth="1.5" />
          <ellipse cx="50" cy="10" rx="50" ry="6" fill="none" stroke={accentColor} strokeWidth="1.5" strokeOpacity="0.5" />
          <text x="50" y="35" textAnchor="middle" fill={textColor} fontSize="12" fontWeight="600" className={styles.svgText}>Storage</text>
        </g>

        {/* Separator - Shifted Down */}
        <line x1="200" y1="340" x2="600" y2="340" stroke={lineColor} strokeDasharray="6,6" strokeWidth="2" opacity="0.6" />

        {/* DB Connection */}
        <path d="M400 420 V460" stroke={lineColor} strokeWidth="2" markerEnd="url(#vcarrowhead)" />

        {/* FastAPI Output Connections - Bus Style for Grid */}
        <path d="M400 520 V550" stroke={lineColor} strokeWidth="2" /> {/* Down from FastAPI */}
        <path d="M320 550 H480" stroke={lineColor} strokeWidth="2" /> {/* Horizontal Bus */}
        <path d="M320 550 V580" stroke={lineColor} strokeWidth="2" markerEnd="url(#vcarrowhead)" />
        <path d="M480 550 V580" stroke={lineColor} strokeWidth="2" markerEnd="url(#vcarrowhead)" />
        
        <path d="M400 520 V630" stroke={lineColor} strokeWidth="2" /> {/* Continue Down */}
        <path d="M320 630 H480" stroke={lineColor} strokeWidth="2" /> {/* Horizontal Bus 2 */}
        <path d="M320 630 V660" stroke={lineColor} strokeWidth="2" markerEnd="url(#vcarrowhead)" />
        <path d="M480 630 V660" stroke={lineColor} strokeWidth="2" markerEnd="url(#vcarrowhead)" />


        <g transform="translate(350, 380)">
           <path d="M0 8 C0 3 100 3 100 8 L100 32 C100 37 0 37 0 32 Z" fill="#1a1a1a" stroke={accentColor} strokeWidth="1.5" />
           <ellipse cx="50" cy="8" rx="50" ry="5" fill="none" stroke={accentColor} strokeWidth="1.5" strokeOpacity="0.5" />
           <text x="50" y="25" textAnchor="middle" fill={textColor} fontSize="11" fontWeight="600" className={styles.svgText}>DB / Logs</text>
        </g>
        <g transform="translate(310, 460)">
           <rect width="180" height="60" rx="8" fill="#111" stroke={accentColor} strokeWidth="2" strokeDasharray="4 2" />
           <text x="90" y="35" textAnchor="middle" fill={textColor} fontSize="14" fontWeight="600" className={styles.svgText}>FastAPI</text>
        </g>

        {/* 2x2 Grid Output Boxes */}
        {/* Row 1 */}
        <g transform="translate(260, 580)">
          <rect width="120" height="50" rx="6" fill="#222" stroke={lineColor} strokeWidth="1.5" />
          <text x="60" y="30" textAnchor="middle" fill={textColor} fontSize="11" fontWeight="600" className={styles.svgText}>Vid by Motion</text>
        </g>
        <g transform="translate(420, 580)">
          <rect width="120" height="50" rx="6" fill="#222" stroke={lineColor} strokeWidth="1.5" />
          <text x="60" y="30" textAnchor="middle" fill={textColor} fontSize="11" fontWeight="600" className={styles.svgText}>Vid by Time</text>
        </g>
        
        {/* Row 2 */}
        <g transform="translate(260, 660)">
          <rect width="120" height="50" rx="6" fill="#222" stroke={lineColor} strokeWidth="1.5" />
          <text x="60" y="30" textAnchor="middle" fill={textColor} fontSize="11" fontWeight="600" className={styles.svgText}>Motion Logs</text>
        </g>
        <g transform="translate(420, 660)">
          <rect width="120" height="50" rx="6" fill="#222" stroke={lineColor} strokeDasharray="4 2" strokeWidth="1.5" />
          <text x="60" y="30" textAnchor="middle" fill={textColor} fontSize="11" fontWeight="600" className={styles.svgText}>Telegram</text>
        </g>

        <circle r="3" fill="#fff" filter="url(#vccGlow)"><animateMotion dur="2s" repeatCount="indefinite" path="M400 90 L400 130" /></circle>
      </svg>
    </>
  );
};

export default CCTVFlowSVG;
