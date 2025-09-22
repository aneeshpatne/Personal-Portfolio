"use client";

import { useState, useEffect } from "react";

const skills = ["Web Pages", "Android Apps", "AI ChatBots"];
export default function ChangingWord({
  words = skills,
  typeSpeed = 100,
  deleteSpeed = 60,
  pause = 900,
  startDelay = 300,
}) {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    if (!Array.isArray(words) || words.length === 0) return;

    const i = loopNum % words.length;
    const full = words[i];

    if (!isDeleting && text === full) {
      const t = setTimeout(() => {
        setIsDeleting(true);
      }, pause);
      return () => clearTimeout(t);
    }

    if (isDeleting && text === "") {
      const t = setTimeout(() => {
        setIsDeleting(false);
        setLoopNum((n) => n + 1);
      }, startDelay);
      return () => clearTimeout(t);
    }

    const next = isDeleting
      ? full.substring(0, Math.max(0, text.length - 1))
      : full.substring(0, Math.min(full.length, text.length + 1));

    const delay = isDeleting ? deleteSpeed : typeSpeed;
    const t = setTimeout(() => setText(next), delay);
    return () => clearTimeout(t);
  }, [
    text,
    isDeleting,
    loopNum,
    words,
    typeSpeed,
    deleteSpeed,
    pause,
    startDelay,
  ]);

  return (
    <span aria-live="polite" aria-atomic="true">
      {text}
      <span className="cursor" aria-hidden="true" />
      <style jsx>{`
        .cursor {
          display: inline-block;
          width: 1px;
          height: 1em;
          background: currentColor;
          margin-left: 2px;
          vertical-align: text-bottom;
          animation: blink 1s step-end infinite;
        }
        @keyframes blink {
          0%,
          100% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>
    </span>
  );
}
