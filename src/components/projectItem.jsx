import styles from "./style/projectItem.module.css";
import Image from "next/image";
import { Instrument_Serif } from "next/font/google";
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
});

export default function ProjectItem() {
  const title = "Mausam.AI";

  const getFontSizePx = (len) => {
    const maxPx = 38;
    const minPx = 12;
    const minLen = 10;
    const maxLen = 48;
    const clampedLen = Math.max(minLen, Math.min(len, maxLen));
    const ratio = (clampedLen - minLen) / (maxLen - minLen);
    return Math.round(maxPx - (maxPx - minPx) * ratio);
  };

  return (
    <div className={styles.projectContainer}>
      <Image
        src="/assets/img/projectretro.png"
        fill
        sizes="250px"
        alt="Retro Background"
        style={{ objectFit: "cover" }}
      />

      <div className={styles.overlay} />

      <div className={styles.featured}>
        <span className={styles.featuredText}>Featured Project</span>
      </div>
      <h1
        className={`${styles.heading} ${instrumentSerif.className}`}
        style={{
          fontSize: `${getFontSizePx(title.length)}px`,
          lineHeight: 1.1,
        }}
      >
        {title}
      </h1>
    </div>
  );
}
