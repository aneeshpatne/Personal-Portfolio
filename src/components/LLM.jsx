"use client";
import styles from "./style/LLM.module.css";
import { useEffect, useRef } from "react";

const MatrixLLM = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas dimensions
    const parentElement = canvas.parentElement;
    const { width, height } = parentElement.getBoundingClientRect();
    canvas.width = width;
    canvas.height = height;

    const fontSize = 16;
    const columns = canvas.width / fontSize;

    const drops = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    function draw() {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#0F0";
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillText(text, x, y);

        if (y > canvas.height && Math.random() > 0.99) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    }

    const intervalId = setInterval(draw, 33);

    const handleResize = () => {
      const { width, height } = parentElement.getBoundingClientRect();
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.Container}>
      <canvas className={styles.Canvas} ref={canvasRef} />
      <div className={styles.Content}>
        <div className={styles.contentHeader}>LLM</div>
        <div className={styles.contentBody}>
          <SentMessage />
          <ReceiveMessage />
        </div>
      </div>
    </div>
  );
};
const SentMessage = function () {
  return (
    <div className={styles.sentMessage}>
      <p style={{ display: "inline-block" }}>
        Tell me about Aneesh's Skills in LLM ?
      </p>
    </div>
  );
};
const ReceiveMessage = function () {
  return (
    <div className={styles.ReceiveMessage}>
      <p style={{ display: "inline-block" }}>Aneesh's Skills</p>
    </div>
  );
};
export default MatrixLLM;
