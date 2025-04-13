"use client";
import styles from "./Error.module.css"; // Importing the CSS module

export default function Error({ error, reset }) {
  return (
    <div className={styles.ErrorContainer}>
      <div className={styles.ErrorBox}>
        <h1 className={styles.ErrorTitle}>⚠️ ERROR!</h1>
        <p className={styles.ErrorMessage}>
          {error?.message || "Something went wrong."}
        </p>
        <button onClick={() => reset()} className={styles.ErrorButton}>
          Try Again
        </button>
      </div>
    </div>
  );
}
