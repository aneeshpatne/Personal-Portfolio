import styles from "./style/WebDev.module.css";
import Image from "next/image";
import TechStackName from "./techStackNameItem";
import { Instrument_Serif, Space_Grotesk } from "next/font/google";
import CardMarqee from "./CardMarqee";
import TechStackItem from "./TechStackItem";

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
    <div className={styles.Container}>
      <div className={styles.heading}>
        <div className={styles.headingMedia}>
          <Image
            src="/assets/img/retro_heading.png"
            alt="Retro graphic"
            fill={true}
            className={styles.headingImg}
            style={{ objectFit: "fill" }}
          />
        </div>
        <div className={styles.headingOverlay} aria-hidden="true" />
        <h1 className={`${styles.headingText} ${instrumentSerif.className}`}>
          Development
        </h1>
      </div>
      <div className={`${styles.mainContainer} ${spaceGrotesk.className}`}>
        <div className={styles.gridContainer}>
          <div className={styles.techStackTextItem}>
            <TechStackName />
          </div>
          <div className={styles.marqueeItem}>
            <CardMarqee />
          </div>
          <div className={styles.techStackItem}>
            <TechStackItem />
          </div>
        </div>
      </div>
    </div>
  );
}

function TechStack({ name, color = null, icon = null }) {
  return (
    <div className={styles.techStack} style={{ backgroundColor: color }}>
      <div
        className={styles.techStackLogo}
        style={{ display: icon ? "block" : "none" }}
      >
        {icon}
      </div>
      {name}
    </div>
  );
}

export { TechStack };

function TechStack1({ name, color = null, icon = null }) {
  return (
    <div
      className={styles.techStack1}
      style={{
        backgroundColor: color,
        borderColor: color ?? "var(--dark-bg-accent)",
      }}
    >
      <div
        className={styles.techStackLogo1}
        style={{ display: icon ? "flex" : "none" }}
      >
        {icon}
      </div>
      <span className={styles.techStackName}>{name}</span>
    </div>
  );
}

export { TechStack1 };
