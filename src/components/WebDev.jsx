import styles from "./style/WebDev.module.css";
import { Lexend, Space_Grotesk } from "next/font/google";
import { SiDjango, SiExpress, SiFlask, SiNodedotjs } from "react-icons/si";
import { FaRocket } from "react-icons/fa";

const frontend = [
  "Next.js",
  "React",
  "JavaScript",
  "HTML",
  "CSS",
  "Tailwind",
  "Framer Motion",
];

const backend = [
  { name: "Node.js", icon: <SiNodedotjs size={18} /> },
  { name: "Express", icon: <SiExpress size={18} /> },
  { name: "Flask", icon: <SiFlask size={18} /> },
  { name: "FastAPI", icon: <FaRocket size={18} /> },
  { name: "Django", icon: <SiDjango size={18} /> },
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
        <div className={styles.style2}>
          <div className={styles.title}>
            <span className={styles.titleText}>Backend</span>
          </div>
          <div className={styles.logo}>
            <img src="/assets/img/dns.svg" alt="" />
          </div>
          <div className={styles.skillBox2}>
            {backend.map((item) => (
              <div key={item.name} className={styles.skill1}>
                {item.name}
                <div className={styles.skillLogo}>{item.icon}</div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.style3}>
          <div className={styles.title}>
            <span className={styles.titleText}>Cloud</span>
          </div>
          <div className={styles.logo}>
            <img src="/assets/img/cloud.svg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
