import { Instrument_Serif } from "next/font/google";
import styles from "./style/LLM_new.module.css";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
});

export function LLM_new() {
  return (
    <div className={styles.LLMContainer}>
      <div className={styles.HeadingContainer}>
        <h1 className={`${styles.Heading}  ${instrumentSerif.className}`}>
          Artificial Intelligence
        </h1>
        <p className={styles.Subtext}>I have built Smart Systems with Artificial Intelligence</p>
      </div>
    </div>
  );
}
