import styles from "./style/ProjectNew.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
export default function ProjectNew({ theme }) {
  return (
    <div className={styles.projects}>
      <div className={styles.projectTitleContainer}>
        <motion.h1
          className={styles.projectTitle}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span
            className={`${styles.gradientText}  ${
              theme === "LightMode" ? styles.LightMode : ""
            }`}
          >
            Projects
          </span>
        </motion.h1>
        <motion.div
          className={`${styles.subtitleContainer} ${
            theme === "LightMode" ? styles.LightMode : ""
          }`}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <p
            className={`${styles.projectSubtitle}   ${
              theme === "LightMode" ? styles.LightMode : ""
            }`}
          >
            Quantifying my progress!
          </p>
        </motion.div>
      </div>
      <div className={styles.projectBox}>
        <ProjectContainer theme={theme} />
        <ProjectContainer theme={theme} />
        <ProjectContainer theme={theme} />
        <ProjectContainer theme={theme} />
      </div>
    </div>
  );
}

export function ProjectContainer({ theme }) {
  return (
    <div className={styles.projectContainer}>
      <div className={styles.ImageContaier}>
        <Image
          src={"/assets/img/personalPortfolio.png"}
          width={280}
          height={180}
          style={{ objectFit: "cover" }}
          draggable={false}
          alt="Project Image"
        />
        <div className={styles.overlay}>
          <h2 className={styles.overlayText}>Example Project</h2>
        </div>
      </div>
      <div className={styles.lowerContainer}>
        <div className={styles.projectTechStackContainer}>
          <ProjectTechStack
            name={"React"}
            color={"#1A365D"}
            lightColor={"#E6F3FF"}
            theme={theme}
          />
          <ProjectTechStack name={"React"} theme={theme} />
          <ProjectTechStack name={"React"} theme={theme} />
        </div>
        <div className={styles.projectDescription}>
          <p>
            Elegant and responsive personal portfolio website showcasing my
            skills and projects.
          </p>
        </div>
        <button
          className={`${styles.projectLearnMore} ${
            theme === "LightMode" ? styles.LightMode : ""
          }`}
          onClick={() => {
            console.log("Learn More");
          }}
        >
          <p className={`${styles.projectLearnMoreText}`}>Learn More</p>
          <ExternalLink size={20} />
        </button>
      </div>
    </div>
  );
}
export function ProjectTechStack({ name, color, lightColor, theme }) {
  return (
    <div
      className={styles.projectTechStack}
      style={{ backgroundColor: theme === "LightMode" ? lightColor : color }}
    >
      <p>{name}</p>
    </div>
  );
}
