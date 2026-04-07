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
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={`${styles.pageTitle} ${lexend.className}`}>
          <span>Selected</span>
          <span className={styles.secondaryText}>Works</span>
        </div>
      </header>
      <div className={styles.projectContainer}></div>
    </div>
  );
}
