import Image from "next/image";
import styles from "./style/nasaTile.module.css";
import { Instrument_Serif } from "next/font/google";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
});

export default function NasaTile() {
  return (
    <div className={styles.tile}>
      <div className={styles.container}>
        <h1 className={`${styles.headerText} ${instrumentSerif.className}`}>
          Limitless Ambition
        </h1>
        <div className={styles.imageWrapper}>
          <Image
            src="/assets/img/space.png"
            alt="Space"
            fill
            sizes="(min-width: 1024px) 25vw, 100vw"
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority
          />
        </div>

        <div className={styles.topShade} />
        <div className={styles.overlay}>
          <div className={styles.title}>
            NGC 6960: The Witch&apos;s Broom Nebula
          </div>
        </div>
      </div>
    </div>
  );
}
