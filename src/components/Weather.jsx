import styles from "./style/Weather.module.css";
import { Fira_Code } from "next/font/google";
import { Thermometer, Droplets, Gauge } from "lucide-react";

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export async function Weather() {
  const apiKey = process.env.ANEESH_API_KEY;
  let weatherData = null;

  try {
    const response = await fetch("https://api.aneeshpatne.com/api/v1/weather", {
      headers: {
        authorization: `Bearer ${apiKey}`,
      },
      next: {
        revalidate: 3600, 
      },
    });

    if (response.ok) {
      weatherData = await response.json();
    }
  } catch (error) {
    console.error("Failed to fetch weather data:", error);
  }

  const { temp, humidity, pressure } = weatherData || {};

  return (
    <div className={styles.wrapper}>
      <div className={`${styles.weatherCard} ${firaCode.className}`}>
        
        <div className={styles.statGroup}>
          <div className={styles.iconWrapper}>
            <Thermometer size={20} strokeWidth={2.5} />
          </div>
          <div className={styles.info}>
            <span className={styles.label}>Temperature</span>
            <div className={styles.valueContainer}>
              <span className={styles.value}>{temp ?? "--"}</span>
              <span className={styles.unit}>°C</span>
            </div>
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.statGroup}>
          <div className={styles.iconWrapper}>
            <Droplets size={20} strokeWidth={2.5} />
          </div>
          <div className={styles.info}>
            <span className={styles.label}>Humidity</span>
            <div className={styles.valueContainer}>
              <span className={styles.value}>{humidity ?? "--"}</span>
              <span className={styles.unit}>%</span>
            </div>
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.statGroup}>
          <div className={styles.iconWrapper}>
            <Gauge size={20} strokeWidth={2.5} />
          </div>
          <div className={styles.info}>
            <span className={styles.label}>Pressure</span>
            <div className={styles.valueContainer}>
              <span className={styles.value}>{pressure ?? "--"}</span>
              <span className={styles.unit}>hPa</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
