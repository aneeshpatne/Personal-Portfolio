import styles from "./style/DSA.module.css";
import DoughnutChart from "./chart";
import { Bug } from "lucide-react";
import { Fira_Code } from "next/font/google";
import TechBadge from "./TechBadge";
import { HeatMap } from "./HeatMap";
import { Weather } from "./Weather";
import { Suspense } from "react";

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
        <div className={styles.LeftPanel}>
           <div className={styles.chart}>
            <DoughnutChart />
           </div>
        </div>
        
        <div className={styles.RightPanel}>
          <div className={styles.HeatMapContainer}>
             <Suspense fallback={<div>Loading activity...</div>}>
                <HeatMap />
              </Suspense>
          </div>
          <div className={styles.WeatherContainer}>
             <Suspense fallback={<div>Loading weather...</div>}>
                <Weather />
              </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}