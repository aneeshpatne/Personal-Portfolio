export const dynamic = "force-static";
export const revalidate = 86400;

import styles from "./style/profileContainer.module.css";
import CardItem from "./cardItem";
import CardMarqee from "./CardMarqee";
import LinkItem from "./LinkItem";
import TechStack from "./TechStack";
import { MainItem } from "./MainItem";
import NasaTile from "./NasaTile";
import MausamCard from "./MausamCard";
import ProjectItem from "./projectItem";
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
        <div className={styles.nasaImageCard}>
          <NasaTile />
        </div>
        <div className={styles.mausamCard}>
          <MausamCard />
        </div>
        <div className={styles.quoteCard}>
          <ProjectItem />
        </div>
      </div>
    </div>
  );
}
