import styles from "./style/WebDev.module.css";
import { FileCode } from "lucide-react";
const data = {
  name: "Web Development",
  skills: [
    {
      name: "Frontend",
      tech: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"],
    },
    {
      name: "Backend",
      tech: [
        "Node.js",
        "Express.js",
        "Django",
        "Flask",
        "Spring Boot",
        "ASP.NET Core",
      ],
    },
    {
      name: "DBMS",
      tech: [
        "MySQL",
        "PostgreSQL",
        "MongoDB",
        "SQLite",
        "Firebase",
        "DynamoDB",
      ],
    },
  ],
};
export default function WebDev() {
  return (
    <div className={styles.Container}>
      <h1 className={styles.Text}>
        &lt;
        <span className={styles.webWrapper}>
          <span className={styles.web}>Web</span>
        </span>{" "}
        Dev<span className={styles.bigText}>elopment</span>/&gt;
      </h1>
      <p className={styles.secText}>
        Creating responsive and modern web solutions
      </p>
      <div className={styles.content}>
        <div className={styles.left}>
          <div className={`${styles.word} ${styles.stylish}`}>STYLISH</div>
          <div className={`${styles.word} ${styles.elegant}`}>ELEGANT</div>
          <div className={`${styles.word} ${styles.performant}`}>
            PERFORMANT
          </div>
        </div>
        <div className={styles.right}>
          {data.map((skill) => (
            <TechStack name={skill} />
          ))}
        </div>
      </div>
    </div>
  );
}
function SkillBox({ name }) {
  return (
    <div className={styles.skillBox}>
      <div className={styles.skillBoxHeader}>{name}</div>
      <div className={styles.skillBoxContent}>
        <TechStack name={"HTML"} color={"#2c1f1a"} />
        <TechStack name={"CSS"} color={"#1a1f2c"} />
        <TechStack name={"JavaScript"} color={"#2c2a1a"} />
        <TechStack name={"React"} color={"#1a2c2c"} />
        <TechStack name={"Next.js"} color={"#1a1a1a"} />
        <TechStack name={"Tailwind CSS"} color={"#1a262c"} />
      </div>
    </div>
  );
}
function TechStack({ name, color }) {
  return (
    <div className={styles.techStack} style={{ backgroundColor: color }}>
      <div className={styles.techStackLogo}>
        <FileCode size={16} />
      </div>
      {name}
    </div>
  );
}
