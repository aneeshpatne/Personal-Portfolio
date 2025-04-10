import styles from "./style/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.Footer}>
      <div id={styles.FooterContainer}>
        <div id={styles.FooterTextContainer}>
          <p>
            Made with <span className="heart">♥</span> by Aneesh!
          </p>
        </div>
      </div>
    </footer>
  );
}
