import styles from "./style/WebDev.module.css";
import { Lexend, Space_Grotesk } from "next/font/google";
import Marquee from "react-fast-marquee";
import {
  SiAmazon,
  SiCloudflare,
  SiCss3,
  SiDjango,
  SiExpress,
  SiFirebase,
  SiFlask,
  SiFramer,
  SiGooglecloud,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedis,
  SiSqlite,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiNextdotjs,
} from "react-icons/si";
import { FaJava, FaRocket, FaRobot } from "react-icons/fa";
import { TbDatabase, TbLink } from "react-icons/tb";

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

const cloud = ["Firebase", "GCP", "AWS", "Vercel", "Cloudflare"];
const databases = [
  { name: "PostgreSQL", note: "Relational database" },
  { name: "MongoDB", note: "Document store" },
  { name: "Redis", note: "In-memory cache" },
  { name: "SQLite", note: "Embedded database" },
];
const ai = [
  { name: "Automated Chatbot", icon: <FaRobot size={16} /> },
  { name: "Vercel AI SDK", icon: <SiVercel size={16} /> },
  { name: "LangChain", icon: <TbLink size={16} /> },
  { name: "RAG Pipelines", icon: <FaRocket size={16} /> },
  { name: "Prompt Engineering", icon: <TbLink size={16} /> },
];
const languages = [
  { name: "Python", icon: <SiPython size={16} /> },
  { name: "JavaScript", icon: <SiJavascript size={16} /> },
  { name: "TypeScript", icon: <SiTypescript size={16} /> },
  { name: "Java", icon: <FaJava size={16} /> },
  { name: "SQL", icon: <TbDatabase size={16} /> },
];

const marqueeSkills = [
  { name: "Next.js", icon: <SiNextdotjs size={16} /> },
  { name: "React", icon: <SiReact size={16} /> },
  { name: "JavaScript", icon: <SiJavascript size={16} /> },
  { name: "HTML", icon: <SiHtml5 size={16} /> },
  { name: "CSS", icon: <SiCss3 size={16} /> },
  { name: "Tailwind", icon: <SiTailwindcss size={16} /> },
  { name: "Framer Motion", icon: <SiFramer size={16} /> },
  { name: "Node.js", icon: <SiNodedotjs size={16} /> },
  { name: "Express", icon: <SiExpress size={16} /> },
  { name: "Flask", icon: <SiFlask size={16} /> },
  { name: "FastAPI", icon: <FaRocket size={16} /> },
  { name: "Django", icon: <SiDjango size={16} /> },
  { name: "Firebase", icon: <SiFirebase size={16} /> },
  { name: "GCP", icon: <SiGooglecloud size={16} /> },
  { name: "AWS", icon: <SiAmazon size={16} /> },
  { name: "Vercel", icon: <SiVercel size={16} /> },
  { name: "Cloudflare", icon: <SiCloudflare size={16} /> },
  { name: "PostgreSQL", icon: <SiPostgresql size={16} /> },
  { name: "MongoDB", icon: <SiMongodb size={16} /> },
  { name: "Redis", icon: <SiRedis size={16} /> },
  { name: "SQLite", icon: <SiSqlite size={16} /> },
  { name: "Automated Chatbot", icon: <FaRobot size={16} /> },
  { name: "Vercel AI SDK", icon: <SiVercel size={16} /> },
  { name: "LangChain", icon: <TbLink size={16} /> },
  { name: "RAG Pipelines", icon: <FaRocket size={16} /> },
  { name: "Prompt Engineering", icon: <TbLink size={16} /> },
  { name: "Python", icon: <SiPython size={16} /> },
  { name: "TypeScript", icon: <SiTypescript size={16} /> },
  { name: "Java", icon: <FaJava size={16} /> },
  { name: "SQL", icon: <TbDatabase size={16} /> },
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
          <div className={styles.skillBox3}>
            {cloud.map((item) => (
              <div key={item} className={styles.skill2}>
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.style4}>
          <div className={styles.title}>
            <span className={styles.titleText}>Database</span>
          </div>
          <div className={styles.logo}>
            <img src="/assets/img/database.svg" alt="" />
          </div>
          <div className={styles.skillBox4}>
            {databases.map((item) => (
              <div key={item.name} className={styles.skill3}>
                <span className={styles.skill3Title}>{item.name}</span>
                <span className={styles.skill3Note}>{item.note}</span>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.style5}>
          <div className={styles.title}>
            <span className={styles.titleText}>AI & Intelligence</span>
          </div>
          <div className={styles.logo}>
            <img src="/assets/img/psychology.svg" alt="" />
          </div>
          <div className={styles.skillBox5}>
            {ai.map((item) => (
              <div key={item.name} className={styles.skill4}>
                <span className={styles.skill4Icon}>{item.icon}</span>
                <span className={styles.skill4Title}>{item.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.style6}>
          <div className={styles.title}>
            <span className={styles.titleText}>Languages</span>
          </div>
          <div className={styles.logo}>
            <img src="/assets/img/code.svg" alt="" />
          </div>
          <div className={styles.skillBox6}>
            {languages.map((item) => (
              <div key={item.name} className={styles.skill5}>
                <span className={styles.skill5Icon}>{item.icon}</span>
                <span className={styles.skill5Title}>{item.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.style7}>
          <div className={styles.title}>
            <span className={styles.titleText}>Across the Stack</span>
          </div>
          <div className={styles.logo}>
            <img src="/assets/img/neurology.svg" alt="" />
          </div>
          {/* <div className={styles.skillBox7}>
            <Marquee
              gradient={false}
              speed={75}
              autoFill
              className={styles.marquee}
            >
              {marqueeSkills.map((item, index) => (
                <div
                  key={`${item.name}-${index}`}
                  className={styles.marqueeItem}
                >
                  <div className={styles.marqueeLogo}>{item.icon}</div>
                  <div className={styles.marqueeName}>{item.name}</div>
                </div>
              ))}
            </Marquee>
          </div> */}
        </div>
      </div>
    </section>
  );
}
