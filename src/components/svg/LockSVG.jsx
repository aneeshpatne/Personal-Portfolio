const LockSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="200"
      height="200"
      fill="none"
      strokeWidth="0.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{
        overflow: "visible",
        filter: "drop-shadow(0px 8px 16px rgba(255,255,255,0.1))",
      }}
    >
      <defs>
        <linearGradient id="lock-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(255, 255, 255, 1)" />
          <stop offset="100%" stopColor="rgba(255, 255, 255, 0.2)" />
        </linearGradient>
      </defs>

      {/* Elegant tall curved shackle */}
      <path
        d="M7 11V7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7V11"
        stroke="url(#lock-gradient)"
        strokeOpacity="0.7"
      />

      {/* Ultra-minimalist body with soft rounded edges */}
      <rect
        x="4"
        y="11"
        width="16"
        height="11"
        rx="2.5"
        stroke="url(#lock-gradient)"
      />

      {/* Sleek abstract center dot instead of traditional keyhole */}
      <circle
        cx="12"
        cy="16.5"
        r="1.25"
        stroke="none"
        fill="rgba(255,255,255,0.9)"
      />

      {/* Ethereal glowing orb following the shackle */}
      <circle r="0.6" fill="#fff" style={{ filter: "blur(0.5px)" }}>
        <animateMotion
          dur="5s"
          repeatCount="indefinite"
          path="M7 11V7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7V11"
        />
        <animate
          attributeName="opacity"
          values="0;0.8;0"
          keyTimes="0;0.5;1"
          dur="5s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
};

export default LockSVG;
