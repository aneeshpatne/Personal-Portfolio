import { Instrument_Serif } from "next/font/google";
import styles from "./style/LLM_new.module.css";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
});

export function LLM_new() {
  return (
    <div className={`${instrumentSerif.className} ${styles.title}`}>
      <h1 className={styles.Heading}>Artificial Intelligence</h1>
    </div>
  );
}
