"use client";
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
} from "react-icons/si";

export default function CardMarqee() {
  const items = [
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
  ];

  const displayed = items.filter((name) => ICON_MAP[name]);

  const speed = 10;

  return (
    <div className={styles.cardMarqeeInner}>
      <div className={styles.marqueeContaier}>
        <Marquee autoFill={false} gradient={false} speed={speed}>
          {displayed.map((name) => (
            <MemoItem key={name} name={name} />
          ))}
        </Marquee>
      </div>
    </div>
  );
}
const ICON_MAP = {
  // Frontend
  nextjs: { Icon: SiNextdotjs, color: "#FFFFFF", title: "Next.js" },
  react: { Icon: SiReact, color: "#61DAFB", title: "React" },
  tailwind: { Icon: SiTailwindcss, color: "#38BDF8", title: "Tailwind CSS" },

  nodejs: { Icon: SiNodedotjs, color: "#8CC84B", title: "Node.js" },
  django: { Icon: SiDjango, color: "#2CA977", title: "Django" },
  fastapi: { Icon: SiFastapi, color: "#00C7B7", title: "FastAPI" },

  postgres: { Icon: SiPostgresql, color: "#4EA1EC", title: "PostgreSQL" },
  mongodb: { Icon: SiMongodb, color: "#4DB33D", title: "MongoDB" },

  docker: { Icon: SiDocker, color: "#2496ED", title: "Docker" },
  gcp: { Icon: SiGooglecloud, color: "#FFFFFF", title: "Google Cloud" },

  redis: { Icon: SiRedis, color: "#FF4438", title: "Redis" },
};

function Item({ name }) {
  const entry = ICON_MAP[name] || {
    Icon: SiGithub,
    color: "#F5F5F5",
    title: name,
  };
  const { Icon, color, title } = entry;

  return (
    <div className={styles.social} aria-label={title}>
      <Icon className={`${styles.icon} ${styles.iconBg}`} color={color} />
    </div>
  );
}

const MemoItem = memo(Item);
