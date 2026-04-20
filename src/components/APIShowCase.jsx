import { Instrument_Serif, Lexend } from "next/font/google";
import { PM25 } from "./PM25";
import { News } from "./News";
import { Weather } from "./Weather";
import { ResumeAI } from "./ResumeAI";
import styles from "./style/APIShowCase.module.css";
import { WeatherGraph } from "./WeatherGraph";
import { BreakingNews } from "./BreakingNews";
import { Status } from "./Status";
import { IntelWorld } from "./IntelWorld";
import { IntelIndia } from "./IntelIndia";
import { WorldMapCard } from "./WorldMapCard";

const instrumentSerif = Lexend({
  subsets: ["latin"],
  weight: "500",
  display: "swap",
});

export function APIShowCase() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={`${styles.title} ${instrumentSerif.className}`}>
          API Showcase
        </h2>
        <p className={styles.subtitle}>
          Live snapshots from the APIs I have built.
        </p>
      </div>
      <div className={styles.container}>
        <IntelWorld />
        <IntelIndia />
        <BreakingNews />
        <News />
        <Weather />
        <WorldMapCard />
        <WeatherGraph />
        <PM25 />
        <ResumeAI />
        <Status />
      </div>
    </section>
  );
}
