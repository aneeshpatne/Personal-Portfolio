import Image from "next/image";
import styles from "./style/MainItem.module.css";
import { Instrument_Serif } from "next/font/google";
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
});

export function MainItem() {
  return (
    <div className={styles.container}>
      <div className={styles.bg}>
        <Image
          src="/assets/img/retro_highres.png"
          alt="Retro graphic"
          fill
          sizes="250px"
          style={{ objectFit: "cover" }}
        />
      </div>
      <h1 className={`${styles.heading} ${instrumentSerif.className}`}>
        Full <br />
        Portfolio
      </h1>

      <div className={styles.arrow} aria-hidden>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 12h14"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13 6l6 6-6 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}
