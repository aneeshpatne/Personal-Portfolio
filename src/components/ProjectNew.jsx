"use client";
import styles from "./style/ProjectNew.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { TechStack } from "./WebDev";
import { mapper } from "./data";
import { useState, useEffect } from "react";
import Link from "next/link";
import Loading from "@/app/loading";

export default function ProjectNew() {
  const [mounted, setMounted] = useState(false);
  const [project, setProject] = useState([]);
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/data/`)
      .then((response) => response.json())
      .then((data) => {
        const processed = data.map((project) => ({
          ...project,
          techStack: project.techStack.split(",").map((tech) => tech.trim()),
        }));
        setProject(processed);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
    setMounted(true);
  }, []);
  if (!mounted) return <Loading />;
  return (
    <div className={styles.projects}>
      <Title />
      <div className={styles.projectBox}>
        {project.map((project, index) => (
          <ProjectContainer
            key={index}
            stack={project.techStack}
            name={project.title}
            description={project.description}
            image={project.image}
            id={project.id}
          />
        ))}
      </div>
    </div>
  );
}
function ReadMoreText({ text, wordlimit = 13, speed = 50 }) {
  const words = text.split(" ");
  const truncatedText =
    words.length > wordlimit
      ? words.slice(0, wordlimit).join(" ") + "..."
      : text;
  const [isExpanded, setIsExpanded] = useState(false);
  const [displayText, setDisplayText] = useState(truncatedText);

  useEffect(() => {
    let interval;

    if (isExpanded) {
      let i = truncatedText.length;
      interval = setInterval(() => {
        if (i < text.length) {
          setDisplayText(text.slice(0, i + 1));
          i++;
        } else {
          clearInterval(interval);
        }
      }, speed);
    }
    return () => clearInterval(interval);
  }, [isExpanded]);
  useEffect(() => {
    let interval;
    if (!isExpanded) {
      let i = text.length;
      let interval = setInterval(() => {
        if (i > truncatedText.length) {
          setDisplayText(text.slice(0, i - 1));
          i--;
        } else {
          clearInterval(interval);
        }
      }, speed);
    }
    return () => clearInterval(interval);
  }, [isExpanded]);
  return (
    <p>
      {displayText}
      {words.length > wordlimit && (
        <button
          className={styles.readMore}
          onClick={() => setIsExpanded((prev) => !prev)}
        >
          {isExpanded ? "Read Less" : "Read More"}
        </button>
      )}
    </p>
  );
}

export function ProjectContainer({ name, stack, description, image, id }) {
  return (
    <div className={styles.projectContainer}>
      <div className={styles.ImageContaier}>
        <Image
          src={image}
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
          <ReadMoreText text={description} />
        </div>
        <Link className={styles.projectLearnMore} href={`project/${id}`}>
          <p className={styles.projectLearnMoreText}>Learn More</p>
          <ExternalLink size={20} />
        </Link>
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

function Title() {
  return (
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
  );
}
