import styles from "../style/SystemArchitecture.module.css";

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
        <path d="M440 260 L580 220" stroke={lineColor} strokeWidth="2" />
        <path d="M440 260 L580 335" stroke={lineColor} strokeWidth="2" />
        <path d="M440 420 L540 420" stroke={lineColor} strokeWidth="2" />
        <path d="M640 335 L720 335" stroke={lineColor} strokeWidth="2" />

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

        {/* Auth DB */}
        <g transform="translate(580, 60)">
          <path
            d="M0 15 C0 5 70 5 70 15 L70 75 C70 85 0 85 0 75 Z"
            fill="#1a1a1a"
            stroke={accentColor}
            strokeWidth="2"
          />
          <ellipse
            cx="35"
            cy="15"
            rx="35"
            ry="10"
            fill="none"
            stroke={accentColor}
            strokeWidth="2"
            strokeOpacity="0.5"
          />
          <path
            d="M0 45 C0 55 70 55 70 45"
            fill="none"
            stroke={accentColor}
            strokeWidth="2"
            strokeOpacity="0.5"
          />
          <text
            x="35"
            y="100"
            textAnchor="middle"
            fill={textColor}
            fontSize="12"
          >
            Auth DB
          </text>
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

        {/* 6. Distributed DB */}
        <g transform="translate(540, 380)">
          <path
            d="M0 15 C0 5 70 5 70 15 L70 75 C70 85 0 85 0 75 Z"
            fill="#1a1a1a"
            stroke={accentColor}
            strokeWidth="2"
          />
          <ellipse
            cx="35"
            cy="15"
            rx="35"
            ry="10"
            fill="none"
            stroke={accentColor}
            strokeWidth="2"
            strokeOpacity="0.5"
          />
          <path
            d="M0 45 C0 55 70 55 70 45"
            fill="none"
            stroke={accentColor}
            strokeWidth="2"
            strokeOpacity="0.5"
          />
          <text
            x="35"
            y="110"
            textAnchor="middle"
            fill={textColor}
            fontSize="12"
          >
            Dist. DB
          </text>
        </g>

        {/* 7. Cache/Redis */}
        <g transform="translate(580, 190)">
          <rect
            width="70"
            height="55"
            rx="6"
            fill="#1a1a1a"
            stroke={secondaryAccent}
            strokeWidth="2"
          />
          <text
            x="35"
            y="32"
            textAnchor="middle"
            fill={textColor}
            fontSize="12"
          >
            Redis
          </text>
        </g>

        {/* 8. Message Queue */}
        <g transform="translate(580, 310)">
          <rect
            width="60"
            height="50"
            rx="4"
            fill="#222"
            stroke={secondaryAccent}
            strokeDasharray="4 2"
          />
          <text
            x="30"
            y="30"
            textAnchor="middle"
            fill={textColor}
            fontSize="11"
          >
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
          <text
            x="50"
            y="40"
            textAnchor="middle"
            fill={textColor}
            fontSize="12"
          >
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
            path="M110 260 L200 260 L320 260 L440 260 L580 335 L640 335 L720 335"
          />
        </circle>
        <circle r="3" fill={secondaryAccent} filter="url(#hglow)">
          <animateMotion
            dur="3.5s"
            begin="0.5s"
            repeatCount="indefinite"
            path="M110 260 L200 260 L320 260 L440 260 L580 220"
          />
        </circle>
        <circle r="3" fill="#fff" filter="url(#hglow)">
          <animateMotion
            dur="4s"
            begin="2s"
            repeatCount="indefinite"
            path="M110 260 L200 260 L320 420 L440 420 L540 420"
          />
        </circle>
      </svg>

      {/* Vertical Layout - Mobile */}
      <svg
        viewBox="0 0 380 820"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${styles.svg} ${styles.svgVertical}`}
      >
        <SVGDefs prefix="v" />
        {/* Connecting Lines - Fan-out from API */}
        <path d="M190 70 L190 100" stroke={lineColor} strokeWidth="2" />
        <path d="M190 170 L80 210" stroke={lineColor} strokeWidth="2" />
        <path d="M190 170 L200 210" stroke={lineColor} strokeWidth="2" />
        <path d="M190 170 L320 210" stroke={lineColor} strokeWidth="2" />

        {/* Service Connectors */}
        <path d="M80 290 L40 340" stroke={lineColor} strokeWidth="2" />
        <path d="M200 290 L150 340" stroke={lineColor} strokeWidth="2" />
        <path d="M200 290 L250 340" stroke={lineColor} strokeWidth="2" />
        <path d="M320 290 L375 330" stroke={lineColor} strokeWidth="2" />
        <path d="M250 400 L210 450" stroke={lineColor} strokeWidth="2" />

        {/* 1. Client */}
        <g transform="translate(155, 20)">
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
        <g transform="translate(155, 100)">
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
        <g transform="translate(25, 210)">
          <rect
            width="110"
            height="80"
            rx="8"
            fill="url(#vboxGradient)"
            stroke="rgba(255,255,255,0.2)"
          />
          <text
            x="55"
            y="30"
            textAnchor="middle"
            fill={textColor}
            fontSize="12"
            fontWeight="bold"
          >
            Auth Service
          </text>
          <rect
            x="15"
            y="48"
            width="80"
            height="4"
            rx="2"
            fill={accentColor}
            opacity="0.5"
          />
          <rect
            x="25"
            y="58"
            width="60"
            height="4"
            rx="2"
            fill={accentColor}
            opacity="0.3"
          />
        </g>

        {/* Auth DB - Side */}
        <g transform="translate(15, 340)">
          <path
            d="M0 10 C0 3 50 3 50 10 L50 55 C50 62 0 62 0 55 Z"
            fill="#1a1a1a"
            stroke={accentColor}
            strokeWidth="2"
          />
          <ellipse
            cx="25"
            cy="10"
            rx="25"
            ry="7"
            fill="none"
            stroke={accentColor}
            strokeWidth="2"
            strokeOpacity="0.5"
          />
          <path
            d="M0 33 C0 40 50 40 50 33"
            fill="none"
            stroke={accentColor}
            strokeWidth="2"
            strokeOpacity="0.5"
          />
          <text x="25" y="72" textAnchor="middle" fill={textColor} fontSize="9">
            Auth DB
          </text>
        </g>

        {/* 4. Core API */}
        <g transform="translate(145, 210)">
          <rect
            width="110"
            height="80"
            rx="8"
            fill="url(#vboxGradient)"
            stroke="rgba(255,255,255,0.2)"
          />
          <text
            x="55"
            y="30"
            textAnchor="middle"
            fill={textColor}
            fontSize="12"
            fontWeight="bold"
          >
            Core API
          </text>
          <rect
            x="15"
            y="48"
            width="80"
            height="4"
            rx="2"
            fill={secondaryAccent}
            opacity="0.5"
          />
          <rect
            x="25"
            y="58"
            width="60"
            height="4"
            rx="2"
            fill={secondaryAccent}
            opacity="0.3"
          />
        </g>

        {/* Redis - Side */}
        <g transform="translate(120, 340)">
          <rect
            width="55"
            height="60"
            rx="6"
            fill="#1a1a1a"
            stroke={secondaryAccent}
            strokeWidth="2"
          />
          <text
            x="27.5"
            y="36"
            textAnchor="middle"
            fill={textColor}
            fontSize="10"
          >
            Redis
          </text>
        </g>

        {/* 5. Data Service */}
        <g transform="translate(265, 210)">
          <rect
            width="110"
            height="80"
            rx="8"
            fill="url(#vboxGradient)"
            stroke="rgba(255,255,255,0.2)"
          />
          <text
            x="55"
            y="30"
            textAnchor="middle"
            fill={textColor}
            fontSize="12"
            fontWeight="bold"
          >
            Data Service
          </text>
          <rect
            x="15"
            y="48"
            width="80"
            height="4"
            rx="2"
            fill={accentColor}
            opacity="0.5"
          />
          <rect
            x="25"
            y="58"
            width="60"
            height="4"
            rx="2"
            fill={accentColor}
            opacity="0.3"
          />
        </g>

        {/* RabbitMQ - Side */}
        <g transform="translate(220, 340)">
          <rect
            width="60"
            height="60"
            rx="4"
            fill="#222"
            stroke={secondaryAccent}
            strokeDasharray="4 2"
          />
          <text x="30" y="36" textAnchor="middle" fill={textColor} fontSize="9">
            RabbitMQ
          </text>
        </g>

        {/* 6. Distributed DB */}
        <g transform="translate(340, 330)">
          <path
            d="M0 12 C0 4 70 4 70 12 L70 70 C70 78 0 78 0 70 Z"
            fill="#1a1a1a"
            stroke={accentColor}
            strokeWidth="2"
          />
          <ellipse
            cx="35"
            cy="12"
            rx="35"
            ry="8"
            fill="none"
            stroke={accentColor}
            strokeWidth="2"
            strokeOpacity="0.5"
          />
          <path
            d="M0 40 C0 48 70 48 70 40"
            fill="none"
            stroke={accentColor}
            strokeWidth="2"
            strokeOpacity="0.5"
          />
          <text
            x="35"
            y="100"
            textAnchor="middle"
            fill={textColor}
            fontSize="10"
          >
            Dist. DB
          </text>
        </g>

        {/* 7. Internal Service */}
        <g transform="translate(160, 450)">
          <rect
            width="100"
            height="70"
            rx="8"
            fill="url(#vboxGradient)"
            stroke={lineColor}
          />
          <text
            x="50"
            y="40"
            textAnchor="middle"
            fill={textColor}
            fontSize="11"
          >
            Internal Service
          </text>
        </g>

        {/* Animated Particles */}
        <circle r="3" fill="#fff" filter="url(#vglow)">
          <animateMotion
            dur="3s"
            repeatCount="indefinite"
            path="M190 70 L190 100 L190 170 L80 210 L80 290 L40 340"
          />
        </circle>
        <circle r="3" fill={accentColor} filter="url(#vglow)">
          <animateMotion
            dur="4s"
            begin="1s"
            repeatCount="indefinite"
            path="M190 70 L190 100 L190 170 L200 210 L200 290 L150 340"
          />
        </circle>
        <circle r="3" fill={secondaryAccent} filter="url(#vglow)">
          <animateMotion
            dur="3.5s"
            begin="0.5s"
            repeatCount="indefinite"
            path="M190 70 L190 100 L190 170 L200 210 L200 290 L250 340 L250 400 L210 450"
          />
        </circle>
        <circle r="3" fill="#fff" filter="url(#vglow)">
          <animateMotion
            dur="4.5s"
            begin="2s"
            repeatCount="indefinite"
            path="M190 70 L190 100 L190 170 L320 210 L320 290 L375 330"
          />
        </circle>
      </svg>
    </>
  );
};

export default ArchitectureSVG;
