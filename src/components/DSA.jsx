import styles from "./style/DSA.module.css";
import { Bug } from "lucide-react";
import { Fira_Code } from "next/font/google";
import { HeatMap } from "./HeatMap";
import { Weather } from "./Weather";
import { Suspense } from "react";
import { Chart } from "./Chart";

const ibm_font = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});
export default function DSA() {
  return (
    <div className={styles.Container}>
      <div className={styles.Content}>
        <div className={styles.LeftPanel}>
          <div className={styles.chart}>
            <Chart />
          </div>
        </div>
        <div className={styles.RightPanel}>
          <div className={styles.HeatMapContainer}>
            <Suspense fallback={<div>Loading activity...</div>}>
              <HeatMap />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
