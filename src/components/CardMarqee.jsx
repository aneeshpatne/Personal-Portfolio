import React from "react";
import styles from "./style/cardMarqee.module.css";
import Marquee from "react-fast-marquee";

export default function CardMarqee() {
  return (
    <div className={styles.cardMarqeeInner}>
      <div className={styles.marqueeContaier}>
        <Marquee>
          I can be a React component, multiple React components, or just some
          text.
        </Marquee>
      </div>
    </div>
  );
}
