import styles from "./loading.module.css";

export default function Loading() {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.loadingContent}>
        <div className={styles.loadingWaves}>
          <div className={styles.wave}></div>
          <div className={styles.wave}></div>
          <div className={styles.wave}></div>
        </div>
        <div className={styles.loadingText}>
          Loading<span className={styles.dots}>...</span>
        </div>
      </div>
    </div>
  );
}
