import { Instrument_Serif, Space_Grotesk } from "next/font/google";
import styles from "./style/techStackNameItem.module.css";
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
});

export default function TechStackName() {
  return (
    <div className={`${styles.headingTextContainer}`}>
      <div className={styles.inner}>
        <div className={styles.iconContainer} aria-hidden="true">
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="3"
              y="3"
              width="18"
              height="3.5"
              rx="0.8"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <rect
              x="5"
              y="9"
              width="14"
              height="3.2"
              rx="0.8"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <rect
              x="7"
              y="14.6"
              width="10"
              height="3"
              rx="0.8"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
        </div>
        <h1 className={styles.headingText}>Tech Stack</h1>
      </div>
    </div>
  );
}
