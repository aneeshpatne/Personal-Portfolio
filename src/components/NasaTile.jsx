// app/components/NasaTile.jsx  (Server Component)
import Image from "next/image";
import styles from "./style/nasaTile.module.css";

export default async function NasaTile() {
  const res = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY}`
    // refresh every 24h (ISR). Use { cache: "no-store" } if you want it fresh each request.
    // { next: { revalidate: 60 * 60 * 24 } }
  );

  if (!res.ok) return <div className="tile">Failed to load NASA APOD</div>;
  const data = await res.json();

  // Only use title, url and date from the API response
  const title = data.title ?? "NASA APOD";
  const date = data.date ?? "";
  const imageSrc = data.url ?? null; // use url instead of hdurl

  // If no url or media is not an image, show a simple fallback with title + date
  if (!imageSrc || data.media_type !== "image") {
    return (
      <div className={`${styles.tile} ${styles.fallback}`}>
        <div>
          <p className={styles.fallbackTitle}>{title}</p>
          {date && <p className={styles.date}>{date}</p>}
          <p style={{ marginTop: 8 }}>Image not available</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.tile}>
      <div className={styles.container}>
        {/* Image layer (lower z-index) */}
        <div className={styles.imageWrapper}>
          <Image
            src={imageSrc}
            alt={title}
            fill
            sizes="(min-width: 1024px) 25vw, 100vw"
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority
            unoptimized
          />
        </div>

        {/* Overlay header on top of the image */}
        <div className={styles.overlay}>
          <div className={styles.title}>{title}</div>
          {date && <div className={styles.date}>{date}</div>}
        </div>
      </div>
    </div>
  );
}
