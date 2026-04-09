import styles from "./style/TechPill.module.css";

export default function TechPill({ name, icon = null }) {
  return (
    <div className={styles.pill}>
      <div className={`${styles.logo} ${!icon ? styles.logoHidden : ""}`}>
        {icon}
      </div>
      <span className={styles.name}>{name}</span>
    </div>
  );
}
