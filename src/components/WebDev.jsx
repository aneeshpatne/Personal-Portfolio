import styles from "./style/WebDev.module.css";
import { Lexend, Space_Grotesk } from "next/font/google";
import Marquee from "react-fast-marquee";
import {
  SiAmazon,
  SiCloudflare,
  SiCss3,
  SiDjango,
  SiExpress,
  SiFastapi,
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
  { name: "Next.js", icon: <SiNextdotjs size={16} color="#f8fafc" /> },
  { name: "React", icon: <SiReact size={16} color="#61dafb" /> },
  { name: "JavaScript", icon: <SiJavascript size={16} color="#f7df1e" /> },
  { name: "HTML", icon: <SiHtml5 size={16} color="#e34f26" /> },
  { name: "CSS", icon: <SiCss3 size={16} color="#1572b6" /> },
  { name: "Tailwind", icon: <SiTailwindcss size={16} color="#06b6d4" /> },
  { name: "Framer Motion", icon: <SiFramer size={16} color="#f8fafc" /> },
];

const backend = [
  { name: "Node.js", icon: <SiNodedotjs size={18} color="#5fa04e" /> },
  { name: "Express", icon: <SiExpress size={18} color="#f8fafc" /> },
  { name: "Flask", icon: <SiFlask size={18} color="#f8fafc" /> },
  { name: "FastAPI", icon: <SiFastapi size={18} color="#009688" /> },
  { name: "Django", icon: <SiDjango size={18} color="#44b78b" /> },
];

const cloud = ["Firebase", "GCP", "AWS", "Vercel", "Cloudflare"];
const databases = [
  { name: "PostgreSQL", note: "Relational database" },
  { name: "MongoDB", note: "Document store" },
  { name: "Redis", note: "In-memory cache" },
  { name: "SQLite", note: "Embedded database" },
];
const ai = [
  { name: "Automated Chatbot", icon: <FaRobot size={16} color="#10b981" /> },
  { name: "Vercel AI SDK", icon: <SiVercel size={16} color="#f8fafc" /> },
  { name: "LangChain", icon: <TbLink size={16} color="#1c3c3c" /> },
  { name: "RAG Pipelines", icon: <FaRocket size={16} color="#f97316" /> },
  { name: "Prompt Engineering", icon: <TbLink size={16} color="#38bdf8" /> },
];
const languages = [
  { name: "Python", icon: <SiPython size={16} color="#3776ab" /> },
  { name: "JavaScript", icon: <SiJavascript size={16} color="#f7df1e" /> },
  { name: "TypeScript", icon: <SiTypescript size={16} color="#3178c6" /> },
  { name: "Java", icon: <FaJava size={16} color="#f89820" /> },
  { name: "SQL", icon: <TbDatabase size={16} color="#60a5fa" /> },
];

const marqueeSkills = [
  { name: "Next.js", icon: <SiNextdotjs size={16} color="#f8fafc" /> },
  { name: "React", icon: <SiReact size={16} color="#61dafb" /> },
  { name: "JavaScript", icon: <SiJavascript size={16} color="#f7df1e" /> },
  { name: "HTML", icon: <SiHtml5 size={16} color="#e34f26" /> },
  { name: "CSS", icon: <SiCss3 size={16} color="#1572b6" /> },
  { name: "Tailwind", icon: <SiTailwindcss size={16} color="#06b6d4" /> },
  { name: "Framer Motion", icon: <SiFramer size={16} color="#f8fafc" /> },
  { name: "Node.js", icon: <SiNodedotjs size={16} color="#5fa04e" /> },
  { name: "Express", icon: <SiExpress size={16} color="#f8fafc" /> },
  { name: "Flask", icon: <SiFlask size={16} color="#f8fafc" /> },
  { name: "FastAPI", icon: <SiFastapi size={16} color="#009688" /> },
  { name: "Django", icon: <SiDjango size={16} color="#44b78b" /> },
  { name: "Firebase", icon: <SiFirebase size={16} color="#ffca28" /> },
  { name: "GCP", icon: <SiGooglecloud size={16} color="#4285f4" /> },
  { name: "AWS", icon: <SiAmazon size={16} color="#ff9900" /> },
  { name: "Vercel", icon: <SiVercel size={16} color="#f8fafc" /> },
  { name: "Cloudflare", icon: <SiCloudflare size={16} color="#f38020" /> },
  { name: "PostgreSQL", icon: <SiPostgresql size={16} color="#4169e1" /> },
  { name: "MongoDB", icon: <SiMongodb size={16} color="#47a248" /> },
  { name: "Redis", icon: <SiRedis size={16} color="#ff4438" /> },
  { name: "SQLite", icon: <SiSqlite size={16} color="#003b57" /> },
  { name: "Automated Chatbot", icon: <FaRobot size={16} color="#10b981" /> },
  { name: "Vercel AI SDK", icon: <SiVercel size={16} color="#f8fafc" /> },
  { name: "LangChain", icon: <TbLink size={16} color="#1c3c3c" /> },
  { name: "RAG Pipelines", icon: <FaRocket size={16} color="#f97316" /> },
  { name: "Prompt Engineering", icon: <TbLink size={16} color="#38bdf8" /> },
  { name: "Python", icon: <SiPython size={16} color="#3776ab" /> },
  { name: "TypeScript", icon: <SiTypescript size={16} color="#3178c6" /> },
  { name: "Java", icon: <FaJava size={16} color="#f89820" /> },
  { name: "SQL", icon: <TbDatabase size={16} color="#60a5fa" /> },
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
          <div className={`${styles.cardArt} ${styles.cardArtFrontend}`}>
            <img src="/assets/svg/frontend.svg" alt="" />
          </div>
          <div className={styles.skillBox}>
            {frontend.map((item) => (
              <div key={item.name} className={styles.skill}>
                <span className={styles.skillIcon}>{item.icon}</span>
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.style2}>
          <div className={styles.title}>
            <span className={styles.titleText}>Backend</span>
          </div>
          <div className={styles.logo}>
            <SiNodedotjs color="#5fa04e" />
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
          <div className={`${styles.cardArt} ${styles.cardArtCloud}`}>
            <img src="/assets/svg/cloud.svg" alt="" />
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
            <SiPostgresql color="#4169e1" />
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
          <div className={`${styles.cardArt} ${styles.cardArtAi}`}>
            <img src="/assets/svg/ai.svg" alt="" />
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
            <SiTypescript color="#3178c6" />
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
        {/* <div className={styles.style7}>
          <div className={styles.title}>
            <span className={styles.titleText}>Across the Stack</span>
          </div>
          <div className={styles.logo}>
            <img src="/assets/img/neurology.svg" alt="" />
          </div>
          <div className={styles.skillBox7}>
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
          </div>
        </div> */}
      </div>
    </section>
  );
}
