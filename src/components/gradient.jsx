"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import styles from "./style/gradient.module.css";
import Image from "next/image";
export default function BlobsBackground() {
  const [showBlobs, setShowBlobs] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setShowBlobs(window.innerWidth > 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  if (!showBlobs)
    return (
      <div className={styles.backgroundContainer}>
        <Image
          className={styles.staticBlob1}
          src="/assets/img/Ellipse1.svg"
          alt="blob"
          width={500}
          height={500}
        />
        <Image
          className={styles.staticBlob2}
          src="/assets/img/Ellipse4.svg"
          alt="blob"
          width={500}
          height={500}
        />
        <Image
          className={styles.staticBlob3}
          src="/assets/img/Ellipse2.svg"
          alt="blob"
          width={500}
          height={500}
        />
      </div>
    );

  return (
    <div className={styles.backgroundContainer}>
      <motion.img
        src="/assets/img/Ellipse1.svg"
        alt="blob"
        className={styles.blob1}
        animate={{ x: [0, 40, -30, 20, 0], y: [0, -30, 20, -10, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.img
        src="/assets/img/Ellipse4.svg"
        className={styles.blob2}
        animate={{ x: [0, -40, 20, -30, 0], y: [0, 25, -20, 10, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.img
        src="/assets/img/Ellipse2.svg"
        className={styles.blob3}
        animate={{ x: [0, 20, -25, 15, 0], y: [0, -20, 30, -15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
