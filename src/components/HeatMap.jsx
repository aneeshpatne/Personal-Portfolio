import { ActivityCalendar } from "react-activity-calendar";
import styles from "./style/HeatMap.module.css";
import { Fira_Code } from "next/font/google";
import { HeatMapClient } from "./HeatMapClient";

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export async function HeatMap() {
  const apiKey = process.env.ANEESH_API_KEY;

  const response = await fetch("https://api.aneeshpatne.com/api/v1/stats", {
    headers: {
      authorization: `Bearer ${apiKey}`,
    },
    next: {
      revalidate: 86400,
    },
  });

  if (!response.ok) {
    throw new Error(`API request failed with status ${response.status}`);
  }

  const fetchedData = await response.json();

  const data = [
    ...fetchedData,
    {
      date: "2026-12-31",
      count: 0,
      level: 0,
    },
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.calendarBox}>
        <HeatMapClient data={data} />
      </div>
      <p className={`${styles.caption} ${firaCode.className}`}>
        <span className={styles.dot}></span>
        <span className={styles.yearHighlight}>2026 So far</span>
        <span className={styles.separator}>•</span>
        Github, Leetcode, CSES, Codeforces
      </p>
    </div>
  );
}
