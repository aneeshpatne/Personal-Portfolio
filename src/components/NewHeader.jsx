"use client";
import styles from "./style/newHeader.module.css";
import { Moon, Sun } from "lucide-react";
export default function NewHeader({ theme, ThemeToggle }) {
  return (
    <div className={styles.headerContainer}>
      <button
        className={`${styles.themeToggle} ${
          theme === "LightMode" ? styles.LightMode : ""
        }`}
        onClick={ThemeToggle}
      >
        {theme === "LightMode" ? <Sun size={20} /> : <Moon size={20} />}
      </button>
    </div>
  );
}
