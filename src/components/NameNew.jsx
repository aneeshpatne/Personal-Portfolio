"use client";
import { LuGithub, LuLinkedin, LuCodeXml } from "react-icons/lu";
import styles from "./style/nameNew.module.css";
import { useEffect, useState } from "react";
const socials = [
  { name: "Github", icon: <LuGithub />, url: "github" },
  { name: "Linkedin", icon: <LuLinkedin />, url: "linkedin" },
  { name: "LeetCode", icon: <LuCodeXml />, url: "leetcode" },
];
export default function NameNew({ theme }) {
  const [idx, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 3000);
  }, []);
  return (
    <div className={styles.name}>
      <div className={styles.introduction}>
        <p className={styles.boldText}>Hi, I'm Aneesh</p>
        <p className={styles.secText}>
          I'm passionate about coding and building exciting projects
        </p>
        <div className={styles.skillBoxContainer}>
          <div className={styles.skillBox}>
            {socials.map((data, index) => {
              return (
                <Socials
                  key={index}
                  name={data.name}
                  icon={data.icon}
                  url={data.url}
                  state={idx}
                  theme={theme}
                />
              );
            })}
          </div>
        </div>
        <div className={styles.urlBox}>
          <span>aneeshpatne.com/</span>
          <div className={styles.urlAnimationWrapper}>
            <a
              href={socials[idx].url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}
              key={idx}
            >
              {socials[idx].url}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
function Socials({ name, icon, url, state, theme }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div
        className={`${styles.socialContainer} ${
          socials[state].name === name ? styles.active : ""
        } ${theme === "LightMode" ? styles.light : ""}`}
      >
        <div className={styles.socialIcon}>{icon}</div>
        <p className={styles.socialText}>{name}</p>
      </div>
    </a>
  );
}
