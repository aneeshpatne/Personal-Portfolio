import { Instrument_Serif, Space_Grotesk } from "next/font/google";
import styles from "./style/techStackNameItem.module.css";
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
});

export default function TechStackName() {
  return (
    <h1 className={`${styles.headingText} ${instrumentSerif.className}`}>
      Tech Stack
    </h1>
  );
}
