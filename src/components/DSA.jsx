import styles from "./style/DSA.module.css";
import DoughnutChart from "./chart";
import { Bug } from "lucide-react";
import { Fira_Code } from "next/font/google";
const ibm_font = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});
export default function DSA() {
  return (
    <div className={styles.Container}>
      <h1 className={`${styles.heading} ${ibm_font.className}`}>
        Coding <Bug size={30} />
      </h1>
      <div className={styles.Content}>
        <div className={styles.chart}>
          <DoughnutChart />
        </div>
        <div className={styles.topics}></div>
      </div>
    </div>
  );
}
