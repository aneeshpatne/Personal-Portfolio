import styles from "./style/newAboutMe.module.css";

export default function Profile() {
  return (
    <section className={styles.profileSection} aria-labelledby="about-heading">
      <div className={styles.inner}>
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
            <figcaption className={styles.polaroidCaption}>
              Aneesh • 2025
            </figcaption>
          </figure>
        </div>
        <div className={styles.textBlock}>
          <h2 id="about-heading" className={styles.heading}>
            About Me
          </h2>
          <p className={styles.lead}>
            I build <span className={styles.accent}>useful</span> things with
            code and data—focused on clarity, fast feedback loops, and crafting
            calm user experiences.
          </p>
          <p className={styles.body}>
            Currently exploring the intersection of{" "}
            <span className={styles.accent}>AI</span>, system design, and
            developer tooling. I enjoy turning ambiguous ideas into simple,
            reliable products.
          </p>
          <ul className={styles.quickList}>
            <li>Pragmatic problem solver</li>
            <li>Learning always</li>
            <li>Designing for maintainability</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
