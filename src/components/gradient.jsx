"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function BlobsBackground() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        overflow: "hidden",
      }}
    >
      <motion.img
        src="/assets/img/Ellipse1.svg"
        alt="blob"
        style={{
          position: "absolute",
          top: "-10%", // pull it up a bit
          left: "-10%", // push left to bleed more
          width: "1000px",
          opacity: 0.25,
          pointerEvents: "none",
        }}
        animate={{ x: [0, 40, -30, 20, 0], y: [0, -30, 20, -10, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.img
        src="/assets/img/Ellipse4.svg"
        style={{
          position: "absolute",
          top: "30%",
          left: "55%",
          width: "750px",
          height: "750px",
          objectFit: "cover",
          opacity: 0.25,
          pointerEvents: "none",
        }}
        animate={{ x: [0, -40, 20, -30, 0], y: [0, 25, -20, 10, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.img
        src="/assets/img/Ellipse2.svg"
        style={{
          position: "absolute",
          top: "5%",
          left: "35%",
          width: "750px",
          height: "750px",
          opacity: 0.25,
          pointerEvents: "none",
        }}
        animate={{ x: [0, 20, -25, 15, 0], y: [0, -20, 30, -15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
