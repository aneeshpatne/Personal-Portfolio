import styles from "./style/WebDev.module.css";
import { mapper } from "./data.jsx";

// Flat list of skills (now rendered statically server-side)
const skills = [
  { name: "React", cat: "Web UI" },
  { name: "Next.js", cat: "Web UI" },
  { name: "Sveltekit", cat: "Web UI" },
  { name: "HTML", cat: "Web UI" },
  { name: "CSS", cat: "Web UI" },
  { name: "Tailwind CSS", cat: "Web UI" },
  { name: "Node.js", cat: "Backend & APIs" },
  { name: "Express.js", cat: "Backend & APIs" },
  { name: "FastAPI", cat: "Backend & APIs" },
  { name: "Flask", cat: "Backend & APIs" },
  { name: "Kotlin", cat: "Mobile" },
  { name: "React Native", cat: "Mobile" },
  { name: "MySQL", cat: "Databases" },
  { name: "PostgreSQL", cat: "Databases" },
  { name: "MongoDB", cat: "Databases" },
  { name: "SQLite", cat: "Databases" },
  { name: "ChromaDB", cat: "Databases" },
  { name: "Redis", cat: "Databases" },
];

const categoryOrder = ["Web UI", "Backend & APIs", "Mobile", "Databases"];

export default function WebDev() {
  return (
    <div className={styles.Container}>
      <h1 className={styles.Text}>
        &lt;<span className={styles.web}>Full&nbsp;Stack</span> Dev
        <span className={styles.bigText}>elopment</span>/&gt;
      </h1>
      <p className={styles.secText}>
        elegant UIs, resilient services, smart data & modern mobile experiences.
      </p>
      <div className={styles.content}>
        <div className={styles.right}>
          <div className={styles.groupsWrapper}>
            {categoryOrder.map((cat) => (
              <CategoryGroup
                key={cat}
                title={cat}
                items={skills
                  .filter((s) => s.cat === cat)
                  .sort((a, b) => a.name.localeCompare(b.name))}
              />
            ))}
          </div>
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

export { TechStack1 };

function CategoryGroup({ title, items }) {
  if (!items.length) return null;
  return (
    <div className={styles.categoryGroup}>
      <div className={styles.categoryTitle}>{title}</div>
      <div className={styles.skillBoxContent}>
        {items.map((s, idx) => (
          <TechStack
            key={idx}
            name={s.name}
            color={mapper[s.name]?.color}
            icon={mapper[s.name]?.icon}
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
