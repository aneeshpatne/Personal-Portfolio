import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

function hashToMuted(str = "") {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (h * 33 + str.charCodeAt(i)) >>> 0;
  const hue = h % 360;
  return `hsl(${hue} 22% 54%)`;
}

// Turn a slug like "my-cool-project" into "My Cool Project"
function formatSlug(slug = "") {
  return slug
    .replace(/[-_]+/g, " ")
    .split(" ")
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ")
    .trim();
}

export default function Image({ params }) {
  const slug = params?.slug || "untitled";
  const accent = hashToMuted(slug);
  const projectTitle = formatSlug(slug) || "Untitled";
  const shortTagline = "Explore build details, stack choices & learnings";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(180deg,#0f1115 0%,#12151b 55%,#14181e 100%)",
          color: "#e5e7eb",
          display: "flex",
          fontFamily:
            'system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif',
          letterSpacing: "-0.015em",
          padding: "88px 140px 84px",
          boxSizing: "border-box",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)",
            backgroundSize: "72px 72px,72px 72px",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: 300,
            height: 300,
            background: `radial-gradient(circle at 100% 0%, ${accent}33 0%, transparent 70%)`,
            opacity: 0.35,
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 118,
            top: 108,
            width: 420,
            height: 420,
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: "50%",
            opacity: 0.5,
          }}
        />
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              left: 92,
              top: 110 + i * 90,
              width: 10,
              height: 10,
              background: i === 0 ? accent : "#1e242c",
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.15)",
              opacity: i === 0 ? 0.9 : 0.55,
            }}
          />
        ))}
        <div
          style={{
            position: "absolute",
            left: 96,
            top: 72,
            bottom: 72,
            width: 3,
            background: accent,
            borderRadius: 2,
            opacity: 0.55,
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 28,
            zIndex: 10,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 14,
              maxWidth: 880,
            }}
          >
            <div
              style={{
                fontSize: 56,
                fontWeight: 600,
                lineHeight: 1.05,
                color: accent,
                letterSpacing: "-0.5px",
                display: "flex",
              }}
            >
              Project by Aneesh Patne
            </div>
            <div
              style={{
                fontSize: 20,
                color: "#94a3b8",
                fontWeight: 400,
                display: "flex",
              }}
            >
              ID: {slug}
            </div>
            <div
              style={{
                fontSize: 18,
                color: "#64748b",
                fontWeight: 400,
                display: "flex",
                maxWidth: 760,
              }}
            >
              {shortTagline}
            </div>
            {/* Removed large project title per request */}
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 64,
            left: 140,
            display: "flex",
            gap: 10,
          }}
        >
          {["#334048", "#2a333b", "#22292f"].map((c, i) => (
            <div
              key={i}
              style={{
                width: 46,
                height: 6,
                background: i === 0 ? accent : c,
                borderRadius: 4,
                opacity: i === 0 ? 0.9 : 0.55,
              }}
            />
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
