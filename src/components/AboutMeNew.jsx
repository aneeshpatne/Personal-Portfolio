import styles from "./style/newAboutMe.module.css";
import { Lexend } from "next/font/google";
const lexend = Lexend({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});
export default function Profile() {
  return (
    <section className={styles.profileSection} aria-labelledby="about-heading">
      <div className={styles.inner}>
        <div className={styles.textContainer}>
          <div className={`${styles.text} ${lexend.className}`}>
            <span>Ideas</span>
            <span>Into</span>
            <span className={styles.secondaryText}>Reality</span>
          </div>
          <div className={styles.finePrint}>
            <span className={styles.finePrintLabel}>What I do</span>
            <span>
              I build at the intersection of AI, system design, and product
              thinking, transforming ambiguity into impact.
            </span>
          </div>
        </div>
        <div className={styles.polaroidWrapper}>
          <figure className={styles.polaroid}>
            <img
              src="/assets/img/aneesh3.png"
              alt="Aneesh smiling, casual portrait"
              width={320}
              height={320}
              className={styles.polaroidImage}
              loading="lazy"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
