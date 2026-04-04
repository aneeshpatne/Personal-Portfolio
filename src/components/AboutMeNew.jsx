import styles from "./style/newAboutMe.module.css";

export default function Profile() {
  return (
    <section className={styles.profileSection} aria-labelledby="about-heading">
      <div className={styles.inner}>
        <div className={styles.Text}></div>
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
