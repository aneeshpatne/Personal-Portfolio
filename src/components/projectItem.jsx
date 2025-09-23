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
      <span className={styles.featured}>Featured Project</span>
      <h1 className={`${styles.heading} ${instrumentSerif.className}`}>
        Sandesh
      </h1>
    </div>
  );
}
