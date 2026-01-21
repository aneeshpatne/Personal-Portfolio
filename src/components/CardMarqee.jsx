"use client";
import React, { memo, useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import styles from "./style/cardMarqee.module.css";

const ICONS = [
  { name: "nextjs", title: "Next.js", src: "/assets/img/nextjs.svg" },
  { name: "react", title: "React", src: "/assets/img/react.svg" },
  { name: "tailwind", title: "Tailwind CSS", src: "/assets/img/tailwind.svg" },
  { name: "nodejs", title: "Node.js", src: "/assets/img/nodejs.svg" },
  { name: "django", title: "Django", src: "/assets/img/django.svg" },
  { name: "fastapi", title: "FastAPI", src: "/assets/img/fastapi.svg" },
  { name: "postgres", title: "PostgreSQL", src: "/assets/img/postgres.svg" },
  { name: "mongodb", title: "MongoDB", src: "/assets/img/mongodb.svg" },
  { name: "docker", title: "Docker", src: "/assets/img/docker.svg" },
  { name: "gcp", title: "Google Cloud", src: "/assets/img/gcp.svg" },
  { name: "redis", title: "Redis", src: "/assets/img/redis.svg" },
];

const WANT = [
  "nextjs",
  "react",
  "tailwind",
  "nodejs",
  "django",
  "fastapi",
  "postgres",
  "mongodb",
  "docker",
  "gcp",
  "redis",
];

const DISPLAY = ICONS.filter((i) => WANT.includes(i.name));

// Memoize individual items
const Item = memo(({ title, src }) => {
  return (
    <div
      className={styles.social}
      aria-label={title}
      style={{
        transform: "translateZ(0)",
        contain: "layout style paint",
      }}
    >
      <img
        src={src}
        alt={title}
        width={24}
        height={24}
        className={styles.icon}
        loading="eager"
        decoding="async"
        draggable="false"
      />
      <span style={{ userSelect: "none" }}>{title}</span>
    </div>
  );
});

Item.displayName = "MarqueeItem";

export default function CardMarqee() {
  return (
    <div className={styles.cardMarqeeInner}>
      <div className={styles.marqueeContaier}>
        <Marquee
          gradient={false}
          speed={50}
          autoFill={false}
          style={{ willChange: "transform" }}
        >
          {DISPLAY.map((item) => (
            <Item key={item.name} {...item} />
          ))}
        </Marquee>
      </div>
    </div>
  );
}
