import { Lexend } from "next/font/google";
import styles from "./style/SystemArchitectureNew.module.css";
const lexend = Lexend({
  subsets: ["latin"],
  weight: "600",
  style: ["normal"],
  variable: "--font-instrument-serif",
});

export function SystemArchitectureNew() {
  return (
    <div>
      <div className={`${styles.text} ${lexend.className}`}>
        <span>Selected</span>
        <span>Works</span>
      </div>
    </div>
  );
}
