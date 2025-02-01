import styles from "./style/ProjectNew.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { TechStack } from "./WebDev";
import { mapper } from "./data";

export const project = [
  {
    id: "asapfiles",
    title: "ASAPFiles",
    techStack: ["Next.js", "Express.js", "WebSocket"],
    description:
      "Real-time file sharing app enabling low-latency, bidirectional communication through efficient chunk-based file transmission.",
    image: "/assets/img/asapFiles.png",
    startDate: "Dec 2024",
    endDate: "Present",
  },
  {
    id: "resumeai",
    title: "Resume.AI",
    techStack: [
      "Large Language Models (LLM)",
      "Next.js",
      "Vector Databases",
      "WebSocket",
      "ChromaDB",
    ],
    description:
      "Dynamic resume chatbot integrating LLMs and RAG to effectively showcase my professional capabilities.",
    image: "/assets/img/resumeAI.png",
    startDate: "Nov 2024",
    endDate: "Jan 2025",
  },
  {
    id: "tldr",
    title: "TLDR",
    techStack: [
      "Large Language Models (LLM)",
      "Flask",
      "REST APIs",
      "JavaScript",
      "Python",
    ],
    description:
      "Chrome extension summarizing web pages by leveraging LLM and Flask for concise, clear summaries.",
    image: "/assets/img/tldr.png",
    startDate: "Jan 2025",
    endDate: "Jan 2025",
  },
  {
    id: "urlshortener",
    title: "URL Shortener",
    techStack: ["Express.js", "MongoDB", "Next.js", "Vercel"],
    description:
      "URL shortening service built with Express.js, MongoDB, and Next.js for efficient, shareable links.",
    image: "/assets/img/urlShortener.png",
    startDate: "Nov 2024",
    endDate: "Nov 2024",
  },
  {
    id: "personalportfolio",
    title: "Personal Portfolio",
    techStack: ["React", "Next.js", "Framer Motion"],
    description:
      "Elegant and responsive personal portfolio website showcasing my skills and projects.",
    image: "/assets/img/personalPortfolio.png",
    startDate: "Jun 2024",
    endDate: "Feb 2025",
  },
  {
    id: "vishv",
    title: "Vishv",
    techStack: ["React.js", "Django", "GCP", "Firebase", "Google Maps API"],
    description:
      "Awareness platform for UN's 21 Sustainable Goals with multilingual support and accessibility features.",
    image: "/assets/img/vishv.png",
    startDate: "Jan 2024",
    endDate: "Apr 2024",
  },
  {
    id: "naturenest",
    title: "NatureNest",
    techStack: ["React.js", "Django", "SQL", "GCP"],
    description:
      "Garden community app tracking member activities, harvests, and plots with real-time data updates.",
    image: "/assets/img/natureNest.png",
    startDate: "Dec 2023",
    endDate: "Feb 2024",
  },
  {
    id: "iot-weather-prediction",
    title: "IoT and ML-Based Weather Prediction",
    techStack: ["IoT", "ESP8266", "Machine Learning"],
    description:
      "Weather prediction system using IoT sensors and ML models, optimized with ensemble learning.",
    image: "/assets/img/iotWeatherPrediction.png",
    startDate: "Jun 2022",
    endDate: "Jun 2023",
  },
  {
    id: "football-data-manager",
    title: "MongoDB-Based Football Data Manager",
    techStack: ["MongoDB", "Node.js", "JavaScript", "HTML", "CSS"],
    description:
      "A CRUD application for efficient football data management, leveraging MongoDB for scalable storage.",
    image: "/assets/img/footballDataManager.png",
    startDate: null,
    endDate: "Apr 2023",
  },
  {
    id: "face-recognition-attendance",
    title: "ML-Based Face Attendance",
    techStack: [
      "Machine Learning",
      "DLIB",
      "KNN",
      "Python",
      "Digital Image Processing",
    ],
    description:
      "Face recognition attendance system ensuring precise identification and secure tracking via CSV storage.",
    image: "/assets/img/faceRecognitionAttendance.png",
    startDate: null,
    endDate: "Feb 2023",
  },
  {
    id: "trex-circuits-game",
    title: "T.rex: Electronics Circuits Game",
    techStack: ["HTML", "JavaScript", "CSS"],
    description:
      "Educational HTML/JS game testing players' FET knowledge through a fun, interactive, dino-inspired challenge.",
    image: "/assets/img/trexCircuitsGame.png",
    startDate: "Nov 2022",
    endDate: "Dec 2022",
  },
  {
    id: "save-time",
    title: "Save Time - UX Design Project",
    techStack: ["Figma", "HTML", "CSS", "JavaScript"],
    description:
      "Productivity app designed in Figma with a responsive HTML/CSS layout and interactive UI elements.",
    image: "/assets/img/saveTime.png",
    startDate: null,
    endDate: "Jan 2022",
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
        {project.map((project, index) => (
          <ProjectContainer
            key={index}
            stack={project.techStack}
            name={project.title}
            description={project.description}
            image={project.image}
          />
        ))}
      </div>
    </div>
  );
}

export function ProjectContainer({ name, stack, description, image }) {
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
          <p>{description}</p>
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
