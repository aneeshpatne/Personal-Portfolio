import React, { memo } from "react";
import styles from "./style/cardMarqee.module.css";
import Marquee from "react-fast-marquee";
import {
  SiGithub,
  SiLinkedin,
  SiLeetcode,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiSvelte,
  SiNodedotjs,
  SiExpress,
  SiFastapi,
  SiFlask,
  SiDjango,
  SiKotlin,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiSqlite,
  SiDocker,
  SiGooglecloud,
  SiOpenai,
  SiHuggingface,
} from "react-icons/si";

export default function CardMarqee() {
  const items = [
    "github",
    "linkedin",
    "leetcode",
    "nextjs",
    "react",
    "tailwind",
    "sveltekit",
    "reactnative",
    "nodejs",
    "express",
    "fastapi",
    "flask",
    "django",
    "kotlin",
    "postgres",
    "mysql",
    "mongodb",
    "redis",
    "sqlite",
    "docker",
    "gcp",
    "openai",
    "huggingface",
  ];
  // For now: keep a fixed reduced speed to lower CPU/GPU cost on phones.
  const displayed = items; // show all items; we can slice this later if needed
  const speed = 20;

  return (
    <div className={styles.cardMarqeeInner}>
      <div className={styles.marqueeContaier}>
        <Marquee
          autoFill={true}
          gradient={false}
          pauseOnHover={true}
          pauseOnClick={true}
          speed={speed}
        >
          {displayed.map((name) => (
            <MemoItem key={name} name={name} />
          ))}
        </Marquee>
      </div>
    </div>
  );
}
// Move ICON_MAP out of the component so it's created once per module, not per render.
const ICON_MAP = {
  // Tools
  github: { Icon: SiGithub, color: "#F5F5F5", title: "GitHub" },
  linkedin: { Icon: SiLinkedin, color: "#0A66C2", title: "LinkedIn" },
  leetcode: { Icon: SiLeetcode, color: "#FFA116", title: "LeetCode" },

  // Frontend
  nextjs: { Icon: SiNextdotjs, color: "#FFFFFF", title: "Next.js" },
  react: { Icon: SiReact, color: "#61DAFB", title: "React" },
  tailwind: { Icon: SiTailwindcss, color: "#38BDF8", title: "Tailwind CSS" },
  sveltekit: { Icon: SiSvelte, color: "#FF3E00", title: "SvelteKit" },
  reactnative: { Icon: SiReact, color: "#61DAFB", title: "React Native" },

  // Backend
  nodejs: { Icon: SiNodedotjs, color: "#8CC84B", title: "Node.js" },
  express: { Icon: SiExpress, color: "#FFFFFF", title: "Express.js" },
  fastapi: { Icon: SiFastapi, color: "#00C7B7", title: "FastAPI" },
  flask: { Icon: SiFlask, color: "#FFFFFF", title: "Flask" },
  django: { Icon: SiDjango, color: "#2CA977", title: "Django" },
  kotlin: { Icon: SiKotlin, color: "#7F52FF", title: "Kotlin" },

  // Databases
  postgres: { Icon: SiPostgresql, color: "#4EA1EC", title: "PostgreSQL" },
  mysql: { Icon: SiMysql, color: "#00758F", title: "MySQL" },
  mongodb: { Icon: SiMongodb, color: "#4DB33D", title: "MongoDB" },
  redis: { Icon: SiRedis, color: "#FF4438", title: "Redis" },
  sqlite: { Icon: SiSqlite, color: "#56A4DA", title: "SQLite" },

  // Infra / Cloud
  docker: { Icon: SiDocker, color: "#2496ED", title: "Docker" },
  gcp: { Icon: SiGooglecloud, color: "#FFFFFF", title: "Google Cloud" },

  // AI / ML
  openai: { Icon: SiOpenai, color: "#A971FF", title: "OpenAI" },
  huggingface: { Icon: SiHuggingface, color: "#FFD21E", title: "Hugging Face" },
};

function Item({ name }) {
  const entry = ICON_MAP[name] || {
    Icon: SiGithub,
    color: "#F5F5F5",
    title: name,
  };
  const { Icon, color, title } = entry;

  // keep the DOM lightweight — prefer transform-based animation and hint the browser
  const iconWrapperStyle = { willChange: "transform" };

  return (
    <div className={styles.social} aria-label={title} title={title}>
      <span className={styles.iconBg} style={iconWrapperStyle}>
        <Icon className={styles.icon} color={color} />
      </span>
      <div className={styles.tooltip}>{title}</div>
    </div>
  );
}

// Memoize items to avoid unnecessary re-renders while the marquee animates
const MemoItem = memo(Item);
