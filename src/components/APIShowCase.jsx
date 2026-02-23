import { Instrument_Serif } from "next/font/google";
import { PM25 } from "./PM25";
import { News } from "./News";
import { Weather } from "./Weather";
import { ResumeAI } from "./ResumeAI";
import styles from "./style/APIShowCase.module.css";
import { WeatherGraph } from "./WeatherGraph";

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
      </div>
      <div className={styles.container}>
        <News />
        <Weather />
        <WeatherGraph />
        <PM25 />
        <ResumeAI />
      </div>
    </section>
  );
}
