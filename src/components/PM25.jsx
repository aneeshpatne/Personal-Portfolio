"use client";
import styles from "./style/PM25.module.css";
export function PM25({ value, remark }) {
  return (
    <div className={styles.container}>
      <div>{value}</div>
      <div>{remark}</div>
    </div>
  );
}
