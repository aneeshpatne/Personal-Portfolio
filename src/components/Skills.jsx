import React from "react";
import styles from "./style/Skill.module.css";

const Skills = () => {
  return (
    <div className={styles.container}>
      {/* Eyebrow title with animated gradient lines */}
      <div className={styles.lineContainer}>
        <span className={`${styles.gradientLine} ${styles.left}`} />
        <span className={styles.eyebrow}>What I&apos;m Good At</span>
        <span className={`${styles.gradientLine} ${styles.right}`} />
      </div>
    </div>
  );
};

export default Skills;
