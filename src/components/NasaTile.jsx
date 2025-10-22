import Image from "next/image";
import styles from "./style/nasaTile.module.css";
import { Instrument_Serif } from "next/font/google";
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
});

export default async function NasaTile() {
  const res = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY}`,
    // Using dynamic fetch with no-store to prevent blocking
    { cache: "no-store" }
  );

  if (!res.ok) return <div className="tile">Failed to load NASA APOD</div>;
  const data = await res.json();

  // Only use title, url and date from the API response
  const title = data.title ?? "NASA APOD";
  const date = data.date ?? "";
  const imageSrc = data.url ?? null; // use url instead of hdurl

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
        <h1 className={`${styles.headerText} ${instrumentSerif.className}`}>
          Limitless Ambition
        </h1>
        <div className={styles.imageWrapper}>
          <Image
            src={imageSrc}
            alt={title}
            fill
            sizes="(min-width: 1024px) 25vw, 100vw"
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority
          />
        </div>

        <div className={styles.topShade} />
        <div className={styles.overlay}>
          <div className={styles.title}>{title}</div>
          {date && <div className={styles.date}>{date}</div>}
        </div>
      </div>
    </div>
  );
}
