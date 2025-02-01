import styles from "./style/WebDev.module.css";
import {
  FileCode,
  Box,
  Atom,
  Database,
  Server,
  Code2,
  Cpu,
  Hexagon,
  Layout,
  Palette,
  Blocks,
  Layers,
  Container,
  CircuitBoard,
} from "lucide-react";

export const mapper = {
  "Next.js": {
    color: "#1a1a1a",
    icon: <Box size={16} />,
  },
  React: {
    color: "#1a2c2c",
    icon: <Atom size={16} />,
  },
  Sveltekit: {
    color: "#2c1a1a",
    icon: <Hexagon size={16} />,
  },
  HTML: {
    color: "#2c1f1a",
    icon: <Layout size={16} />,
  },
  CSS: {
    color: "#1a1f2c",
    icon: <Palette size={16} />,
  },
  "Tailwind CSS": {
    color: "#1a262c",
    icon: <Blocks size={16} />,
  },
  "Node.js": {
    color: "#1a2c1a",
    icon: <Server size={16} />,
  },
  "Express.js": {
    color: "#1a1a1c",
    icon: <Code2 size={16} />,
  },
  FastAPI: {
    color: "#2c1a29",
    icon: <Cpu size={16} />,
  },
  Flask: {
    color: "#1c1c1c",
    icon: <Container size={16} />,
  },
  MySQL: {
    color: "#1a1f2c",
    icon: <Database size={16} />,
  },
  PostgreSQL: {
    color: "#1a2c2c",
    icon: <Database size={16} />,
  },
  MongoDB: {
    color: "#1a2c1a",
    icon: <Layers size={16} />,
  },
  SQLite: {
    color: "#1f1a2c",
    icon: <Database size={16} />,
  },
  ChromaDB: {
    color: "#2c1a2c",
    icon: <CircuitBoard size={16} />,
  },
  Redis: {
    color: "#2c1a1a",
    icon: <Database size={16} />,
  },
};
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
          {data.map((d, index) => (
            <SkillBox name={d.name} tech={d.tech} key={index} />
          ))}
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
export { TechStack };
