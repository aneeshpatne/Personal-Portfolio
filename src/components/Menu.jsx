"use client";
import { useEffect, useState } from "react";
import styles from "./style/menu.module.css";
const sections = ["home", "skills", "project"];
export default function Menu() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.MenuContainer}>
      <MenuItem title="Home" active={activeSection === "home"} />
      <MenuItem title="Skills" active={activeSection === "skills"} />
      <MenuItem title="Project" active={activeSection === "project"} />
    </div>
  );
}
function MenuItem({ title, active }) {
  const handleClick = () => {
    const id = title.toLowerCase();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div
      onClick={handleClick}
      className={`${styles.menuItem} ${active ? styles.active : ""}`}
    >
      <h1>{title}</h1>
    </div>
  );
}
