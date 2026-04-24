import styles from "./style/newAboutMe.module.css";
import { Lexend } from "next/font/google";
import { LuCheck } from "react-icons/lu";
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
            <span>Turning</span>
            <span>Ideas</span>
            <span>Into</span>
            <span className={styles.secondaryText}>Reality</span>
          </div>
          <div className={styles.finePrint}>
            <span>
              I build at the intersection of{" "}
              <strong className={styles.highlight}>AI</strong>,
              <strong className={styles.highlight}>system design</strong>, and{" "}
              <strong className={styles.highlight}>product thinking</strong>,
              transforming ambiguity into impact.
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
            <figcaption className={styles.solutionBadge}>
              <span className={styles.solutionCheck} aria-hidden="true">
                <LuCheck />
              </span>
              <span>Building meaningful solutions</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
