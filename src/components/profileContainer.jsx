import styles from "./style/profileContainer.module.css";
import CardItem from "./cardItem";
import TechStack from "./TechStack";
export default function Container() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.Container}>
        <div className={styles.techStackItem}>
          <TechStack />
        </div>
        <div className={styles.linkItem}></div>
        <div className={styles.mainPageItem}></div>
        <div className={styles.cardItem}>
          <CardItem />
        </div>
        <div className={styles.cardMarqee}></div>
        <div className={styles.mausamCard}></div>
        <div className={styles.nasaImageCard}></div>
        <div className={styles.quoteCard}></div>
      </div>
    </div>
  );
}
