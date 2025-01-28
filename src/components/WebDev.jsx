import styles from "./style/WebDev.module.css";
export default function WebDev() {
  return (
    <div className={styles.Container}>
      <h1 className={styles.Text}>
        &lt;
        <span className={styles.webWrapper}>
          <span className={styles.web}>Web</span>
        </span>{" "}
        Dev<span className={styles.bigText}>elopment</span>/&gt;
      </h1>
      <p className={styles.secText}>
        Creating responsive and modern web solutions
      </p>
      <div className={styles.content}>
        <div className={styles.left}>
          <div className={`${styles.word} ${styles.stylish}`}>STYLISH</div>
          <div className={`${styles.word} ${styles.elegant}`}>ELEGANT</div>
          <div className={`${styles.word} ${styles.performant}`}>
            PERFORMANT
          </div>
        </div>
        <div className={styles.right}>hi</div>
      </div>
    </div>
  );
}
