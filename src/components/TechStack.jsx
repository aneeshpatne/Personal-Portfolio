import styles from "./style/techStack.module.css";
export default function TechStack() {
  const tech = ["React", "Next.js", "Tailwind", "Node", "MongoDB"];
  return (
    <aside className={styles.stack}>
      <h3 className={styles.title}>TECH STACK</h3>
      <div className={styles.list}>
        {tech.map((t) => (
          <div key={t} className={styles.item}>
            {t}
          </div>
        ))}
      </div>
    </aside>
  );
}
