import Image from "next/image";
import styles from "./style/cardItem.module.css";
import ChangingWord from "./clientCardItem";
import { Instrument_Serif } from "next/font/google";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
});

export default function CardItem() {
  return (
    <article className={styles.card}>
      <div className={styles.brandLogo}>
        <Image
          src="/assets/img/logo.png"
          alt="AP logo"
          width={22}
          height={22}
        />
      </div>
      <div className={styles.section}>
        <header className={styles.header}>
          <div className={styles.avatar}>
            <Image
              src="/assets/img/aneesh100.png"
              alt="Aneesh portrait"
              width={48}
              height={48}
            />
          </div>
          <div className={styles.titleBlock}>
            <h2 className={`${styles.name} ${instrumentSerif.className}`}>
              Aneesh Patne
            </h2>
          </div>
        </header>
        <p className={styles.tagline}>
          I build <ChangingWord />
        </p>
        <p className={styles.about}>
          I craft clean, fast, accessible web experiences.
        </p>
      </div>

      <footer className={styles.footer}>
        <div className={styles.quote}>“How do I center a div again?”</div>
        <div className={styles.availability}>
          <span className={styles.dot} aria-hidden="true"></span>
          <span>Available for work</span>
        </div>
      </footer>
    </article>
  );
}
