import styles from "./style/techStack.module.css";
export default function TechStack() {
  const tech = ["React", "Next.js", "Tailwind", "Node", "MongoDB"];
  return (
    <aside className={styles.stack}>
      <h3 className={styles.title}>Tech Stack</h3>
      <ul className={styles.list}>
        {tech.map((t) => (
          <li key={t} className={styles.item}>
            {t}
          </li>
        ))}
      </ul>
    </aside>
  );
}
