"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./style/AICarousel.module.css";

const slides = [
  {
    title: "API Integration",
    content: "Seamlessly connecting app with AI services",
    code: `import { openai } from '@ai-sdk/openai'

const response = await openai.chat.completions.create({
  model: "gpt-4o",
  messages: [{ role: "user", content: "Hello, AI!" }]
})`,
    color: "#00ffff",
  },
  {
    title: "RAG",
    content: "Enhance AI responses with relevant context",
    code: `async function generateResponse(query, context) {
  const prompt = \`Context: \${context}\n\nQuery: \${query}\`
  const { text } = await generateText({
    model: openai('gpt-4o'),
    prompt: prompt
  })
  return text
}`,
    color: "#ff00ff",
  },
  {
    title: "Prompt Engineering",
    content: "Craft effective prompts for optimal AI output",
    code: `const engineeredPrompt = \n
\`You are an helpful resume based asistant.\nTask: Basesd on the context provided answer the question.\nContext: [RELEVANT_INFORMATION]\nOutput format: [DESIRED_FORMAT]\n\nUser query: [USER_INPUT]\n\``,
    color: "#ffff00",
  },
];

export default function AICarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!isPaused) {
        nextSlide();
      }
    }, 5000);

    return () => clearInterval(intervalId);
  }, [isPaused, nextSlide]);

  return (
    <div
      className={styles.carouselContainer}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <AnimatePresence initial={false} custom={currentIndex}>
        <motion.div
          key={currentIndex}
          custom={currentIndex}
          variants={{
            enter: (direction) => ({
              x: direction > 0 ? 1000 : -1000,
              opacity: 0,
            }),
            center: {
              zIndex: 1,
              x: 0,
              opacity: 1,
            },
            exit: (direction) => ({
              zIndex: 0,
              x: direction < 0 ? 1000 : -1000,
              opacity: 0,
            }),
          }}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className={styles.slide}
        >
          <div className={styles.slideContent}>
            <h2
              className={styles.slideTitle}
              style={{ color: slides[currentIndex].color }}
            >
              {slides[currentIndex].title}
            </h2>
            <p className={styles.slideDescription}>
              {slides[currentIndex].content}
            </p>
            <pre className={styles.codeBlock}>
              <code className={styles.codeText}>
                {slides[currentIndex].code}
              </code>
            </pre>
          </div>
        </motion.div>
      </AnimatePresence>

      <button
        className={`${styles.navButton} ${styles.prevButton}`}
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <ChevronLeft />
      </button>
      <button
        className={`${styles.navButton} ${styles.nextButton}`}
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <ChevronRight />
      </button>

      <div className={styles.indicators}>
        {slides.map((_, index) => (
          <div
            key={index}
            className={`${styles.indicator} ${
              index === currentIndex ? styles.indicatorActive : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
}
