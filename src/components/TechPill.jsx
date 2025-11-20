import styles from "./style/TechPill.module.css";

export default function TechPill({ name, color = null, icon = null }) {
  return (
    <div
      className={styles.pill}
      style={{
        backgroundColor: color,
        borderColor: color ?? "var(--dark-bg-accent)",
      }}
    >
      <div
        className={styles.logo}
        style={{ display: icon ? "flex" : "none" }}
      >
        {icon}
      </div>
      <span className={styles.name}>{name}</span>
    </div>
  );
}
