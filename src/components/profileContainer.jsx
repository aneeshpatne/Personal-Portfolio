import styles from "./style/profileContainer.module.css";
export default function Container() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.Container}>
        <div className={styles.techStackItem}></div>
        <div className={styles.linkItem}></div>
        <div className={styles.mainPageItem}></div>
        <div className={styles.cardItem}></div>
      </div>
    </div>
  );
}
