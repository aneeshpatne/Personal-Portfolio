"use client";
import { LuGithub, LuLinkedin, LuCodeXml } from "react-icons/lu";
import styles from "./style/nameNew.module.css";
import { useEffect, useState } from "react";
export default function NameNew() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 3000);
  }, []);
  const socials = [
    { name: "Github", icon: <LuGithub />, url: "github" },
    { name: "Linkedin", icon: <LuLinkedin />, url: "linkedin" },
    { name: "LeetCode", icon: <LuCodeXml />, url: "leetcode" },
  ];
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
                />
              );
            })}
          </div>
        </div>
        <div className={styles.urlBox}>
          <a
            href={socials[index].url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            {"aneeshpatne.com/" + socials[index].url}
          </a>
        </div>
      </div>
    </div>
  );
}
function Socials({ name, icon, url }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div className={styles.socialContainer}>
        <div className={styles.socialIcon}>{icon}</div>
        <p className={styles.socialText}>{name}</p>
      </div>
    </a>
  );
}
