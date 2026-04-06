import styles from "./style/WebDev.module.css";
import { Lexend, Space_Grotesk } from "next/font/google";

const frontend = [
  "Next.js",
  "React",
  "JavaScript",
  "HTML",
  "CSS",
  "Tailwind",
  "Framer Motion",
];
const lexend = Lexend({
  subsets: ["latin"],
  weight: "600",
  style: ["normal"],
  variable: "--font-instrument-serif",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export default function WebDev() {
  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <h1 className={`${styles.pageTitle} ${lexend.className}`}>
          Development
        </h1>
      </header>

      <div className={styles.bentoGrid}>
        <div className={styles.style1}>
          <div className={styles.title}>
            <span className={styles.titleText}>Frontend</span>
          </div>
          <div className={styles.logo}>
            <img src="/assets/img/layers.svg" alt="" />
          </div>
          <div className={styles.skillBox}>
            {frontend.map((item) => (
              <div key={item} className={styles.skill}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
