import styles from "./style/TechBadge.module.css";

export default function TechBadge({ name, color = null, icon = null }) {
  return (
    <div className={styles.badge} style={{ backgroundColor: color }}>
      <div
        className={styles.logo}
        style={{ display: icon ? "block" : "none" }}
      >
        {icon}
      </div>
      {name}
    </div>
  );
}
