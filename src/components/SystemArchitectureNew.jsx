import { Inter, Lexend } from "next/font/google";
import { FaJava } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
import styles from "./style/SystemArchitectureNew.module.css";
import LockSVG from "./svg/LockSVG";
import SurakshaFlowSVG from "./svg/SurakshaFlowSVG";

const selectedWorks = [
  {
    id: "suraksha",
    category: "BACKEND SYSTEMS / 2025",
    title: "Suraksha",
    Visual: LockSVG,
    Flowchart: SurakshaFlowSVG,
    techStacks: [
      { name: "SpringBoot", Icon: SiSpringboot },
      { name: "Java", Icon: FaJava },
    ],
    description:
      "Suraksha is an enterprise, multi-tenant auth service built on Spring Boot. It supports email/password, magic links, optional OTP 2FA, RS256 JWTs, refresh rotation, and org-level isolation. PostgreSQL stores data, Redis caches tokens/OTPs, and RabbitMQ delivers email.",
  },
];

const lexend = Lexend({
  subsets: ["latin"],
  weight: "600",
  style: ["normal"],
  variable: "--font-instrument-serif",
});
const inter = Inter({
  subsets: ["latin"],
  weight: "300",
  style: ["normal"],
  variable: "--font-instrument-serif",
});
export function SystemArchitectureNew() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={`${styles.pageTitle} ${lexend.className}`}>
          <span>Selected</span>
          <span className={styles.secondaryText}>Works</span>
        </div>
      </header>
      {selectedWorks.map(
        ({ id, category, title, Visual, Flowchart, techStacks, description }) => (
          <div className={styles.projectWrapper} key={id}>
            <div className={styles.projectContainer}>
              <div className={styles.imageContainer}>
                <Visual />
              </div>
              <div className={styles.textContainer}>
                <span className={inter.className}>{category}</span>
                <h1 className={`${styles.title} ${lexend.className}`}>{title}</h1>
                <div className={styles.techStackContainer}>
                  {techStacks.map(({ name, Icon }) => (
                    <div className={styles.techStackItem} key={name}>
                      <div className={styles.techStackLogo}>
                        <Icon
                          className={styles.techStackIcon}
                          aria-hidden="true"
                        />
                      </div>
                      <div className={styles.techStackName}>{name}</div>
                    </div>
                  ))}
                </div>
                <p className={styles.ProjectText}>
                  {description}
                </p>
              </div>
            </div>
            <div className={styles.bottomContainer}>
              <Flowchart />
            </div>
          </div>
        )
      )}
    </div>
  );
}
