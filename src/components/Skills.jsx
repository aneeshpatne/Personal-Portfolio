import React from "react";
import styles from "./style/Skill.module.css";

const Skills = () => {
  return (
    <div className={styles.container}>
      {/* Gradient Line Animations */}
      <div className={styles.lineContainer}>
        <div className={`${styles.gradientLine} ${styles.left}`}></div>
        <h1 className={`${styles.text}`}>SKILLS</h1>
        <div className={`${styles.gradientLine} ${styles.right}`}></div>
      </div>
    </div>
  );
};

export default Skills;
