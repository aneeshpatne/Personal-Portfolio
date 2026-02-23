import { Instrument_Serif } from "next/font/google";
import { PM25 } from "./PM25";
import { News } from "./News";
import { Weather } from "./Weather";
import { ResumeAI } from "./ResumeAI";
import styles from "./style/APIShowCase.module.css";
import { WeatherGraph } from "./WeatherGraph";
import { BreakingNews } from "./BreakingNews";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export function APIShowCase() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={`${styles.title} ${instrumentSerif.className}`}>
          API showcase
        </h2>
        <p className={styles.subtitle}>
          Live snapshots from the APIs I have built.
        </p>
        <div className={styles.disclaimerContainer}>
          <div className={styles.indicator}>
            <span className={styles.ping}></span>
            <span className={styles.dot}></span>
          </div>
          <span className={styles.disclaimerText}>
            Notice: This part of the webpage utilizes Incremental Static
            Regeneration (ISR). Displayed data may be cached; please refresh the
            page to fetch the latest data.
          </span>
        </div>
      </div>
      <div className={styles.container}>
        <BreakingNews />
        <News />
        <Weather />
        <WeatherGraph />
        <PM25 />
        <ResumeAI />
      </div>
    </section>
  );
}
