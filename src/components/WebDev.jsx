import styles from "./style/WebDev.module.css";
import { mapper } from "./data.jsx";
const data = [
  {
    name: "Frontend",
    tech: ["Next.js", "React", "Sveltekit", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    name: "Backend",
    tech: ["Node.js", "Express.js", "FastAPI", "Flask"],
  },
  {
    name: "DBMS",
    tech: ["MySQL", "PostgreSQL", "MongoDB", "SQLite", "ChromaDB", "Redis"],
  },
];
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
        Creating responsive and modern web solutions!
      </p>
      <div className={styles.content}>
        <div className={styles.right}>
          {data.map((d, index) => (
            <SkillBox name={d.name} tech={d.tech} key={index} />
          ))}
        </div>
        <div className={styles.left}>
          <div className={`${styles.word} ${styles.stylish}`}>STYLISH</div>
          <div className={`${styles.word} ${styles.elegant}`}>ELEGANT</div>
          <div className={`${styles.word} ${styles.performant}`}>
            PERFORMANT
          </div>
        </div>
      </div>
    </div>
  );
}
function SkillBox({ name, tech }) {
  return (
    <div className={styles.skillBox}>
      <div className={styles.skillBoxHeader}>{name}</div>
      <div className={styles.skillBoxContent}>
        {tech.map((t, index) => (
          <TechStack
            name={t}
            color={mapper[t]?.color}
            icon={mapper[t]?.icon}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
function TechStack({ name, color = null, icon = null }) {
  return (
    <div className={styles.techStack} style={{ backgroundColor: color }}>
      <div
        className={styles.techStackLogo}
        style={{ display: icon ? "block" : "none" }}
      >
        {icon}
      </div>
      {name}
    </div>
  );
}
1;
function TechStack1({ name, color = null, icon = null }) {
  return (
    <div
      className={styles.techStack1}
      style={{
        backgroundColor: color,
        borderColor: color ?? "var(--dark-bg-accent)",
      }}
    >
      <div
        className={styles.techStackLogo1}
        style={{ display: icon ? "flex" : "none" }}
      >
        {icon}
      </div>
      <span className={styles.techStackName}>{name}</span>
    </div>
  );
}

export { TechStack, TechStack1 };
