import styles from "./style/techStack.module.css";

export default function TechStack() {
  const tech = {
    Frontend: [
      "Next.js",
      "React",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind",
      "Framer Motion",
    ],
    Backend: ["Node.js", "Express", "Flask", "FastAPI", "Django"],
    Databases: ["PostgreSQL", "MongoDB", "Redis", "Vector DB"],
    "Cloud & Services": ["Firebase", "GCP", "Vercel", "Auth"],
    "AI & ML": [
      "LLMs",
      "Machine Learning",
      "RAG",
      "LangChain",
      "Vercel AI SDK",
    ],
    "IoT & Embedded": ["IoT", "Embedded", "ESP8266"],
    "Other Skills": [
      "Python",
      "Kotlin",
      "Android",
      "WebSockets",
      "Web Scraping",
      "Playwright",
      "Elasticsearch",
      "Security",
      "Cryptography",
      "Digital Image Processing",
      "UX",
      "UI Design",
      "Figma",
      "Git",
    ],
  };

  return (
    <aside className={styles.stack}>
      <h3 className={styles.title}>TECH STACK</h3>
      <div className={styles.list}>
        {Object.entries(tech).map(([category, items]) => (
          <section key={category} className={styles.category}>
            <h4 className={styles.categoryTitle}>{category}</h4>
            <div className={styles.categoryList}>
              {items.map((t) => (
                <div key={t} className={styles.item}>
                  {t}
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </aside>
  );
}
