import styles from "./style/WebDev.module.css";
import Image from "next/image";
import TechStackName from "./techStackNameItem";
import { Lexend, Space_Grotesk } from "next/font/google";
import CardMarqee from "./CardMarqee";
import TechStackItem from "./TechStackItem";
import NasaTile from "./NasaTile";

const lexend = Lexend({
  subsets: ["latin"],
  weight: "600",
  style: ["normal"],
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
        <h1 className={`${styles.pageTitle} ${lexend.className}`}>
          Development
        </h1>
      </header>

      <div className={styles.bentoGrid}>
        <div className={styles.frontend}>
          <div className={styles.title}>
            <span className={styles.titleText}>Frontend</span>
          </div>
          <div className={styles.logo}>
            <img src="/assets/img/layers.svg" />
          </div>
        </div>
      </div>
    </section>
  );
}
