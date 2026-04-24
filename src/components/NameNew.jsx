"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Inter, Lexend } from "next/font/google";
import Image from "next/image";
import { LuArrowUpRight, LuBriefcase, LuCodeXml, LuGithub, LuLinkedin, LuMapPin } from "react-icons/lu";

import styles from "./style/nameNew.module.css";

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const socials = [
  { name: "Github", icon: <LuGithub />, url: "github" },
  { name: "LinkedIn", icon: <LuLinkedin />, url: "linkedin" },
  { name: "LeetCode", icon: <LuCodeXml />, url: "leetcode" },
];

const socialLinks = [
  "https://github.com/aneeshpatne",
  "https://linkedin.com/in/aneeshpatne",
  "https://leetcode.com/aneeshpatne",
];

export default function NameNew() {
  const [idx, setIndex] = useState(0);
  const maxUrlLength = Math.max(...socials.map((social) => social.url.length));

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % socials.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className={`${styles.container} ${inter.className}`}>
      <div className={styles.heroShell}>
        <motion.section
          className={styles.heroCopy}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.logoMark}>
            <Image
              src="/assets/img/logo.png"
              alt="Aneesh logo"
              width={42}
              height={42}
              priority
            />
          </div>

          <p className={styles.greeting}>Hello, I am</p>

          <motion.h1
            className={`${styles.introName} ${lexend.className}`}
            initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.22, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          >
            Aneesh Patne
          </motion.h1>

          <p className={styles.role}>
            Full Stack Engineer
          </p>

          <p className={styles.valueStatement}>
            I build reliable web platforms, AI-assisted tools, and data-driven
            products with clean systems thinking and production-focused execution.
          </p>

          <div className={styles.locationBadge}>
            <LuMapPin />
            Mumbai, India
          </div>

          <div className={styles.ctaRow}>
            <motion.a
              href="#project"
              className={styles.primaryCta}
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              View My Work
              <LuArrowUpRight />
            </motion.a>

            <motion.a
              href="mailto:aneeshpatne@gmail.com"
              className={styles.secondaryCta}
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
              role="button"
              aria-disabled="true"
              onClick={(event) => event.preventDefault()}
            >
              <LuBriefcase />
              Hire Me
            </motion.a>
          </div>

          <div className={styles.socialsContainer} aria-label="Social profiles">
            {socials.map((social, index) => (
              <a
                key={social.name}
                href={socialLinks[index]}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className={index === idx ? styles.activeSocial : ""}
              >
                {social.icon}
              </a>
            ))}
          </div>

          <div className={styles.urlContainer}>
            <span>aneeshpatne/</span>
            <a
              href={socialLinks[idx]}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.dynamicUrl}
              style={{ minWidth: `${maxUrlLength}ch` }}
            >
              {socials[idx].url}
            </a>
          </div>
        </motion.section>

        <motion.section
          className={styles.heroVisual}
          aria-label="Developer workspace illustration"
          initial={{ opacity: 0, scale: 0.96, y: 18 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.28, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image
            src="/assets/svg/workplace.svg"
            alt="Minimal developer workspace illustration"
            width={720}
            height={720}
            priority
            className={styles.workplaceSvg}
          />
        </motion.section>
      </div>
    </header>
  );
}
