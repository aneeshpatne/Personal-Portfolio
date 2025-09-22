import React from "react";
import styles from "./style/linkItem.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

// Contract
// props:
// - githubUrl?: string
// - linkedinUrl?: string
// - email?: string (used for mailto link)
export default function LinkItem({
  githubUrl = "https://github.com/aneeshpatne",
  linkedinUrl = "https://www.linkedin.com/in/your-profile/",
  email = "your@email.com",
}) {
  return (
    <div className={styles.linkItemInner}>
      <h3 className={styles.title}>SOCIALS</h3>
      <div className={styles.socialContainer}>
        <a
          className={`${styles.social} ${styles.github}`}
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          title="GitHub"
        >
          <FaGithub className={styles.icon} />
        </a>

        <a
          className={`${styles.social} ${styles.linkedin}`}
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          title="LinkedIn"
        >
          <FaLinkedin className={styles.icon} />
        </a>

        <a
          className={`${styles.social} ${styles.gmail}`}
          href={`mailto:${email}?subject=Hello%20Aneesh`}
          aria-label="Email"
          title={email}
        >
          <SiGmail className={styles.icon} />
        </a>
      </div>
    </div>
  );
}
