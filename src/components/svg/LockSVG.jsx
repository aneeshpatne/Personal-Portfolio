const LockSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="256"
      height="256"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ overflow: "visible", color: "#F8FAFC" }}
    >
      <defs></defs>

      {/* Shackle - Tall, Thin, Elegant Arch */}
      <path
        d="M8.5 10 V 6 C 8.5 4.067 10.067 2.5 12 2.5 C 13.933 2.5 15.5 4.067 15.5 6 V 10"
        stroke="rgba(255,255,255,0.5)"
      />

      {/* Body - Minimalist Rectangle with softened corners */}
      <rect
        x="6.5"
        y="10"
        width="11"
        height="12"
        rx="1"
        stroke="#fff"
        strokeOpacity="0.9"
      />

      {/* Core - Minimal vertical biometric scanner line */}
      <path d="M12 14.5 V 17.5" stroke="rgba(255,255,255,0.4)" strokeWidth="0.5" />

      {/* Light Trace - Lean point following the shackle path */}
      <circle r="0.4" fill="#fff">
        <animateMotion
          dur="4s"
          repeatCount="indefinite"
          path="M8.5 10 V 6 C 8.5 4.067 10.067 2.5 12 2.5 C 13.933 2.5 15.5 4.067 15.5 6 V 10"
        />
        <animate attributeName="opacity" values="0;0.9;0" keyTimes="0;0.5;1" dur="4s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
};

export default LockSVG;
