import styles from "./style/ProjectNew.module.css";
import Image from "next/image";
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
      <div className={styles.ImageContaier}>
        <Image
          src={"/assets/img/personalPortfolio.png"}
          width={280}
          height={180}
          style={{ objectFit: "cover" }}
          draggable={false}
          alt="Project Image"
        />
        <div className={styles.overlay}>
          <h2 className={styles.overlayText}>Example Project</h2>
        </div>
      </div>
    </div>
  );
}
