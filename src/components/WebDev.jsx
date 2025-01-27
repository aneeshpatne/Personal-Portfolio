import styles from "./style/WebDev.module.css";
export default function WebDev() {
  return (
    <div className={styles.Container}>
      <h1 className={styles.Text}>
        &lt;
        <span className={styles.webWrapper}>
          <span className={styles.web}>Web</span>
        </span>{" "}
        Development/&gt;
      </h1>
    </div>
  );
}
