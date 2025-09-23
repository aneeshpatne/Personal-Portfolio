import styles from "./style/profileContainer.module.css";
import CardItem from "./cardItem";
import CardMarqee from "./CardMarqee";
import LinkItem from "./LinkItem";
import TechStack from "./TechStack";
import { MainItem } from "./MainItem";
export default function Container() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.Container}>
        <div className={styles.techStackItem}>
          <TechStack />
        </div>
        <div className={styles.linkItem}>
          <LinkItem />
        </div>
        <div className={styles.mainPageItem}>
          <MainItem />
        </div>
        <div className={styles.cardItem}>
          <CardItem />
        </div>
        <div className={styles.cardMarqee}>
          <CardMarqee />
        </div>
        <div className={styles.mausamCard}></div>
        <div className={styles.nasaImageCard}></div>
        <div className={styles.quoteCard}></div>
      </div>
    </div>
  );
}
