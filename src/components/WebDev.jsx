import styles from "./style/WebDev.module.css";
import { mapper } from "./data.jsx";
import Image from "next/image";
import { Instrument_Serif } from "next/font/google";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
});

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
      <div className={styles.heading}>
        <div className={styles.headingMedia}>
          <Image
            src="/assets/img/retro_heading.png"
            alt="Retro graphic"
            fill={true}
            className={styles.headingImg}
            style={{ objectFit: "fill" }}
          />
        </div>
        <div className={styles.headingOverlay} aria-hidden="true" />
        <h1 className={`${styles.headingText} ${instrumentSerif.className}`}>
          Development
        </h1>
      </div>
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
