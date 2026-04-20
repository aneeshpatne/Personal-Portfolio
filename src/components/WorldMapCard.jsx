import WorldMapCardLoader from "./WorldMapCardLoader";
import styles from "./style/WorldMapCard.module.css";

const DUMMY_POINTS = {
  weather: [
    { lat: 19.076, lng: 72.8777, label: "Mumbai rain" },
    { lat: 13.0827, lng: 80.2707, label: "Chennai coast" },
  ],
  concern: [
    { lat: 26.9124, lng: 75.7873, label: "Jaipur watch" },
    { lat: 23.2599, lng: 77.4126, label: "Bhopal concern" },
  ],
  conflict: [
    { lat: 34.0837, lng: 74.7973, label: "Srinagar tension" },
  ],
  emergency: [
    { lat: 28.7041, lng: 77.1025, label: "Delhi emergency" },
  ],
};

function normalizePointGroups(groups = {}) {
  const categories = ["weather", "concern", "conflict", "emergency"];

  return categories.reduce((acc, category) => {
    const points = Array.isArray(groups?.[category]) ? groups[category] : [];

    acc[category] = points
      .map((point) => ({
        lat: Number(point?.lat),
        lng: Number(point?.lng),
        label: typeof point?.label === "string" ? point.label : "",
      }))
      .filter(
        (point) => Number.isFinite(point.lat) && Number.isFinite(point.lng),
      );

    return acc;
  }, {});
}

export async function WorldMapCard({ pointGroups = DUMMY_POINTS }) {
  const normalizedPointGroups = normalizePointGroups(pointGroups);

  return (
    <div className={styles.card}>
      <div className={styles.innerWrapper}>
        <div className={styles.header}>
          <div className={styles.leftGroup}>
            <span className={styles.liveBadge}>Live</span>
          </div>
          <span className={styles.apiBadge}>Powered by Intel API</span>
        </div>

        <div className={styles.content}>
          <div className={styles.mapStage}>
            <WorldMapCardLoader pointGroups={normalizedPointGroups} />
            <div className={styles.mapGlow} />
            <div className={styles.scanline} />
          </div>
        </div>
      </div>

      <div className={styles.footerWrapper}>
        <div className={styles.cautionContainer}>
          <span className={styles.cautionHeader}>POWERED BY INTEL API</span>
          <p className={styles.cautionText}>
            Every effort has been made to depict India correctly using
            <strong> Survey of India</strong> outline data. Aneesh fully
            respects India&apos;s boundaries as defined by Survey of India. If any
            incorrect boundary depiction may be visible in the underlying base
            map tiles, it is solely attributable to the map provider and does
            not reflect Aneesh&apos;s views or intent.
          </p>
        </div>
      </div>
    </div>
  );
}
