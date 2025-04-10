"use client";
import { Fira_Code } from "next/font/google";
import { LuGithub, LuLinkedin, LuCodeXml } from "react-icons/lu";
import styles from "./style/nameNew.module.css";
import { useEffect, useState } from "react";
import BlobsBackground from "./gradient";
const ibm_font = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});
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

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      className={`${styles.name} ${
        theme === "LightMode" ? styles.lightMode : ""
      }`}
      style={{ position: "relative", overflow: "hidden" }} // Important
    >
      <BlobsBackground />
      <div className={styles.upperText}>
        <div className={styles.introWrapper}>
          <p className={styles.introName}>Hi, I&apos;m Aneesh</p>
          {/* <p className={styles.introText}>
            Passionate about{" "}
            <span className={styles.gradientText}>Full Stack Dev</span>,{" "}
            <span className={styles.gradientText}>LLM solutions</span>, and{" "}
            <span className={styles.gradientText}>Data Structures</span>.
          </p> */}
          <p className={`${styles.introTextSmall} ${ibm_font.className}`}>
            I Build Stuff
          </p>
        </div>
      </div>
      <div className={styles.introduction}>
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
        <div className={ibm_font.className}>
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
