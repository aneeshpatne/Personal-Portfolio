"use client";
import { Github, Linkedin, Code2 } from "lucide-react";
import styles from "./style/nameNew.module.css";
export default function NameNew() {
  const socials = [
    { name: "Github", icon: <Github />, url: "github" },
    { name: "Linkedin", icon: <Linkedin />, url: "linkedin" },
    { name: "LeetCode", icon: <Code2 />, url: "leetcode" },
  ];
  return (
    <div className={styles.name}>
      <div className={styles.introduction}>
        <p className={styles.boldText}>Hi, I'm Aneesh</p>
        <p className={styles.secText}>
          I'm passionate about coding and building exciting projects
        </p>
      </div>
    </div>
  );
}
