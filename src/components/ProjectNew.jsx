import styles from "./style/ProjectNew.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { TechStack } from "./WebDev";
import { mapper } from "./data";
const data = [
  {
    id: "personalportfolio",
    title: "Personal Portfolio",
    techStack: ["React", "Next.js", "Framer Motion"],
    description:
      "Elegant and responsive personal portfolio website showcasing my skills and projects.",
    image: "/assets/img/personalPortfolio.png",
  },
];
export default function ProjectNew() {
  return (
    <div className={styles.projects}>
      <div className={styles.projectTitleContainer}>
        <motion.h1
          className={styles.projectTitle}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className={styles.gradientText}>Projects</span>
        </motion.h1>
        <motion.div
          className={styles.subtitleContainer}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <p className={styles.projectSubtitle}>Quantifying my progress!</p>
        </motion.div>
      </div>
      <div className={styles.projectBox}>
        {data.map((project, index) => (
          <ProjectContainer
            key={index}
            stack={project.techStack}
            name={project.title}
          />
        ))}
      </div>
    </div>
  );
}

export function ProjectContainer({ name, stack }) {
  return (
    <div className={styles.projectContainer}>
      <div className={styles.ImageContaier}>
        <Image
          src={"/assets/img/personalPortfolio.png"}
          width={300}
          height={180}
          style={{ objectFit: "cover" }}
          draggable={false}
          alt="Project Image"
        />
        <div className={styles.overlay}>
          <h2 className={styles.overlayText}>{name}</h2>
        </div>
      </div>
      <div className={styles.lowerContainer}>
        <div className={styles.projectTechStackContainer}>
          {stack.map((tech, index) => (
            <TechStack
              key={index}
              name={tech}
              color={mapper[tech]?.color}
              icon={mapper[tech]?.icon}
            />
          ))}
        </div>
        <div className={styles.projectDescription}>
          <p>
            Elegant and responsive personal portfolio website showcasing my
            skills and projects.
          </p>
        </div>
        <button
          className={styles.projectLearnMore}
          onClick={() => {
            console.log("Learn More");
          }}
        >
          <p className={styles.projectLearnMoreText}>Learn More</p>
          <ExternalLink size={20} />
        </button>
      </div>
    </div>
  );
}
export function ProjectTechStack({ name, color }) {
  return (
    <div className={styles.projectTechStack} style={{ backgroundColor: color }}>
      <p>{name}</p>
    </div>
  );
}
