import React from "react";

export default function PracticeCoderSVG(props) {
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
      {...props}
    >
      <defs>
        <linearGradient
          id="practice-coder-gradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="rgba(255, 255, 255, 1)" />
          <stop offset="100%" stopColor="rgba(255, 255, 255, 0.2)" />
        </linearGradient>
      </defs>

      <rect
        x="4"
        y="5"
        width="16"
        height="12"
        rx="2.5"
        stroke="url(#practice-coder-gradient)"
      />
      <path
        d="M9.1 10L7.4 11.5L9.1 13"
        stroke="url(#practice-coder-gradient)"
        strokeOpacity="0.7"
      />
      <path
        d="M14.9 10L16.6 11.5L14.9 13"
        stroke="url(#practice-coder-gradient)"
        strokeOpacity="0.7"
      />
      <path
        d="M12.9 9.6L11.3 13.4"
        stroke="url(#practice-coder-gradient)"
        strokeOpacity="0.85"
      />
      <path
        d="M9 19H15"
        stroke="url(#practice-coder-gradient)"
        strokeOpacity="0.6"
      />
      <path
        d="M12 17V19"
        stroke="url(#practice-coder-gradient)"
        strokeOpacity="0.6"
      />

      <circle r="0.6" fill="#fff" style={{ filter: "blur(0.5px)" }}>
        <animateMotion
          dur="5s"
          repeatCount="indefinite"
          path="M4.9 17.15H19.1M19.1 17.15V4.85M19.1 4.85H4.9M4.9 4.85V17.15"
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
}
