import styles from "./style/WebDev.module.css";
import Image from "next/image";
import TechStackName from "./techStackNameItem";
import { Instrument_Serif, Space_Grotesk } from "next/font/google";
import CardMarqee from "./CardMarqee";
import TechStackItem from "./TechStackItem";
import NasaTile from "./NasaTile";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export default function WebDev() {
  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <h1 className={`${styles.title} ${instrumentSerif.className}`}>
          Development
        </h1>
        <p className={`${styles.subtitle} ${spaceGrotesk.className}`}>
          Crafting digital experiences with cutting-edge technologies and pixel-perfect precision.
        </p>
      </header>

      <div className={styles.bentoGrid}>
        <div className={`${styles.bentoCard} ${styles.marqueeCard}`}>
          <CardMarqee />
        </div>

        <div className={`${styles.bentoCard} ${styles.techStackCard}`}>
          <TechStackItem />
        </div>

        <div className={`${styles.bentoCard} ${styles.nasaCard}`}>
          <NasaTile />
        </div>
      </div>
    </section>
  );
}


