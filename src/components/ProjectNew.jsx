import styles from "./style/ProjectNew.module.css";
export default function ProjectNew() {
  return (
    <div className={styles.projectBox}>
      <ProjectContainer />
      <ProjectContainer />
      <ProjectContainer />
      <ProjectContainer />
    </div>
  );
}

export function ProjectContainer() {
  return (
    <div className={styles.projectContainer}>
      <div className={styles.ImageContaier}></div>
    </div>
  );
}
