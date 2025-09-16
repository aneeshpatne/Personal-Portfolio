import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Map slug deterministically to one of the site gradient colors
function hashToIndex(str = "", mod = 3) {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) >>> 0;
  return h % mod;
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

function truncate(str = "", max = 170) {
  if (str.length <= max) return str;
  return str.slice(0, max - 1).trimEnd() + "…";
}

function formatDateRange(start, end) {
  if (!start && !end) return null;
  try {
    const fmt = (d) => {
      if (!d) return null;
      const date = new Date(d);
      if (isNaN(date)) return null;
      const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      return `${months[date.getUTCMonth()]} ${date.getUTCFullYear()}`;
    };
    const a = fmt(start);
    const b = fmt(end);
    if (a && b) return `${a} – ${b}`;
    return a || b;
  } catch {
    return null;
  }
}

export default async function Image({ params }) {
  const slug = params?.slug || "untitled";
  // Palette derived from globals.css
  const gradientStops = ["#60a5fa", "#22d3ee", "#5eead4"]; // start, mid, end
  const accent = gradientStops[hashToIndex(slug, gradientStops.length)];
  const accentAlpha = accent + "33"; // 20% opacity hex overlay
  const fallbackTitle = formatSlug(slug) || "Untitled";
  const defaultTagline = "Explore build details, stack choices & learnings";

  // Build base URL (works locally + in production). Fallback to localhost.
  const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  let projectData = null;
  try {
    const res = await fetch(`${base}/project/og-data/${slug}`, {
      // Leverage caching so many OG hits don't hammer DB
      headers: { Accept: "application/json" },
      next: { revalidate: 60 * 60 * 24 }, // 24h
    });
    if (res.ok) {
      projectData = await res.json();
    }
  } catch (e) {
    // swallow – keep graceful fallback
  }

  const title = projectData?.title?.trim() || fallbackTitle;
  const descriptionRaw =
    projectData?.description || projectData?.LLMdump || defaultTagline;
  const description = truncate(
    (descriptionRaw || defaultTagline)
      .toString()
      .replace(/\r?\n+/g, " ")
      .replace(/\s+/g, " ")
      .trim() || defaultTagline,
    180
  );

  const techStack = (projectData?.techStack || "")
    .split(/[,|]/)
    .map((t) => t.trim())
    .filter(Boolean)
    .slice(0, 5);

  const dateRange = formatDateRange(
    projectData?.startDate,
    projectData?.endDate
  );

  // Resolve project image (supports absolute URL or /public relative path)
  let imageUrl = null;
  if (projectData?.image) {
    const img = projectData.image.trim();
    if (/^https?:\/\//i.test(img)) imageUrl = img; // already absolute
    else {
      // ensure single leading slash then prefix base
      const normalized = img.startsWith("/") ? img : `/${img}`;
      imageUrl = `${base}${normalized}`;
    }
  }

  // contentMaxWidth no longer needed after layout simplification

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          padding: "54px 56px 54px 60px",
          boxSizing: "border-box",
          fontFamily:
            'system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif',
          background:
            "linear-gradient(135deg,#0c0c0d 0%, #11161c 55%, #0d1115 100%)",
          color: "#e5e7eb",
          position: "relative",
        }}
      >
        {/* Left Column */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            minWidth: 0,
            gap: 24,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div
              style={{
                fontSize: 16,
                fontWeight: 600,
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: accent,
                display: "flex",
              }}
            >
              Project
            </div>
            <div
              style={{
                fontSize: 54,
                fontWeight: 600,
                lineHeight: 1.05,
                color: accent,
                display: "flex",
              }}
            >
              {title}
            </div>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {techStack.map((t) => (
              <div
                key={t}
                style={{
                  display: "flex",
                  fontSize: 16,
                  padding: "6px 12px 7px",
                  background: "#182129",
                  border: `1px solid ${accentAlpha}`,
                  color: "#dde5ec",
                  borderRadius: 999,
                  fontWeight: 500,
                }}
              >
                {t}
              </div>
            ))}
            {dateRange && (
              <div
                style={{
                  display: "flex",
                  fontSize: 15,
                  padding: "6px 12px 7px",
                  background: "#151d24",
                  border: "1px solid #1e2831",
                  color: "#8fa2b0",
                  borderRadius: 999,
                }}
              >
                {dateRange}
              </div>
            )}
            {projectData?.topic && (
              <div
                style={{
                  display: "flex",
                  fontSize: 15,
                  padding: "6px 12px 7px",
                  background: "#1c242b",
                  border: "1px solid #1e2831",
                  color: "#9fb4c2",
                  borderRadius: 8,
                }}
              >
                {projectData.topic}
              </div>
            )}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 20,
              lineHeight: 1.35,
              color: "#9fb2c0",
              maxWidth: 680,
            }}
          >
            {description}
          </div>
          <div
            style={{
              display: "flex",
              gap: 14,
              fontSize: 17,
              fontWeight: 500,
              color: "#607487",
            }}
          >
            <span style={{ color: accent }}>@AneeshPatne</span>
            <span style={{ opacity: 0.55 }}>/{slug}</span>
          </div>
        </div>
        {/* Right Column - Image */}
        <div
          style={{
            width: 380,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {imageUrl ? (
            <div
              style={{
                display: "flex",
                position: "relative",
                width: 360,
                height: 360,
                borderRadius: 32,
                overflow: "hidden",
                border: "1px solid #1e2831",
                background: "#121b22",
              }}
            >
              <img
                src={imageUrl}
                width={360}
                height={360}
                alt={title}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </div>
          ) : (
            <div
              style={{
                display: "flex",
                width: 340,
                height: 340,
                borderRadius: 28,
                border: "1px dashed #2a3943",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 16,
                color: "#5d7382",
              }}
            >
              No Image
            </div>
          )}
        </div>
        {/* Logo */}
        <div
          style={{
            position: "absolute",
            bottom: 20,
            right: 24,
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 13,
              letterSpacing: "1px",
              color: "#6d8090",
              fontWeight: 500,
            }}
          >
            aneeshpatne.com
          </div>
          <div
            style={{
              display: "flex",
              width: 44,
              height: 44,
              borderRadius: 12,
              overflow: "hidden",
              border: "1px solid #1e2831",
              background: "#10181f",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {(() => {
              try {
                const absoluteLogo = `${base.replace(
                  /\/$/,
                  ""
                )}/assets/img/logo.png`;
                return (
                  <img
                    src={absoluteLogo}
                    width={44}
                    height={44}
                    alt="Logo"
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                );
              } catch {
                return (
                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                      height: "100%",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 16,
                      fontWeight: 600,
                      color: accent,
                      background: "#0d1319",
                    }}
                  >
                    AP
                  </div>
                );
              }
            })()}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
