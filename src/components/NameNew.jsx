"use client";
import { Fira_Code } from "next/font/google";
import { Instrument_Serif } from "next/font/google";
import Image from "next/image";
import {
  LuGithub,
  LuLinkedin,
  LuCodeXml,
  LuMail,
  LuMapPin,
} from "react-icons/lu";
import styles from "./style/nameNew.module.css";
import BlobsBackground from "./gradient";
import { motion } from "framer-motion";

const ibm_font = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
});

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

const socials = [
  { name: "Github", icon: <LuGithub />, url: "github" },
  { name: "Linkedin", icon: <LuLinkedin />, url: "linkedin" },
  { name: "LeetCode", icon: <LuCodeXml />, url: "leetcode" },
];

const socialLinks = [
  "https://github.com/aneeshpatne",
  "https://linkedin.com/in/aneeshpatne",
  "https://leetcode.com/aneeshpatne",
];

export default function NameNew({ theme }) {
  const isLight = theme === "LightMode";
  const [idx, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % socials.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={styles.container}>
      <BlobsBackground />

      <motion.div
        className={styles.contentWrapper}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <motion.div
          className={styles.logoWrapper}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src="/assets/img/logo.png"
            alt="Aneesh Logo"
            width={90}
            height={90}
            priority
            className={styles.logo}
          />
        </motion.div>

        <div className={styles.introWrapper}>
          <motion.h1
            className={`${styles.introName} ${instrumentSerif.className} ${
              isLight ? styles.introNameLight : ""
            }`}
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            Aneesh Patne
          </motion.h1>

          <motion.p
            className={`${styles.introTextSmall} ${ibm_font.className} ${
              isLight ? styles.introTextSmallLight : ""
            }`}
            initial={{ opacity: 0, letterSpacing: "0em" }}
            animate={{ opacity: 1, letterSpacing: "0.2em" }}
            transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
          >
            Full Stack Engineer
          </motion.p>

          <motion.div
            className={`${styles.locationBadge} ${ibm_font.className} ${
              isLight ? styles.locationBadgeLight : ""
            }`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 1, ease: "easeOut" }}
          >
            <LuMapPin />
            Mumbai, India
          </motion.div>
        </div>

        <motion.div
          className={`${styles.divider} ${isLight ? styles.dividerLight : ""}`}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        />

        <motion.div
          className={styles.socialsContainer}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          {socials.map((social, index) => (
            <motion.a
              key={social.name}
              href={socialLinks[index]}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.socialLink} ${
                isLight ? styles.socialLinkLight : ""
              } ${index === idx ? styles.active : ""}`}
              whileHover={{ scale: 1.2, rotate: 0 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 + index * 0.1, duration: 0.5 }}
              title={social.name}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Rotating URL Section */}
        <motion.div
          className={`${styles.urlContainer} ${ibm_font.className} ${
            isLight ? styles.urlContainerLight : ""
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <span>aneeshpatne.com/</span>
          <div
            style={{
              position: "relative",
              height: "1.5em",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
            }}
          >
            <AnimatePresence mode="wait">
              <motion.a
                key={idx}
                href={socialLinks[idx]}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.dynamicUrl} ${
                  isLight ? styles.dynamicUrlLight : ""
                }`}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                style={{ textDecoration: "none" }}
              >
                {socials[idx].url}
              </motion.a>
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
