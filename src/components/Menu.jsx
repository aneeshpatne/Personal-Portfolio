"use client";
import { useEffect, useState } from "react";
import styles from "./style/menu.module.css";
import { MessageSquareMore, X } from "lucide-react";

const sections = ["home", "skills", "project"];

export default function Menu() {
  const [activeSection, setActiveSection] = useState("home");
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries.length > 0) {
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      {
        threshold: 0.05,
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        requestAnimationFrame(() => observer.observe(el));
      }
    });

    return () => observer.disconnect();
  }, []);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
    // You can add additional logic here later for showing/hiding chat
  };

  return (
    <>
      <svg width="0" height="0">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#9c27b0" />
            <stop offset="50%" stopColor="#e91e63" />
            <stop offset="100%" stopColor="#9c27b0" />
          </linearGradient>
        </defs>
      </svg>
      <div className={styles.lowerContainer}>
        <div className={styles.MenuContainer}>
          <MenuItem title="Home" active={activeSection === "home"} />
          <MenuItem title="Skills" active={activeSection === "skills"} />
          <MenuItem title="Project" active={activeSection === "project"} />
        </div>
        <button
          className={`${styles.chatButton} ${isChatOpen ? styles.active : ""}`}
          onClick={toggleChat}
        >
          {isChatOpen ? (
            <X size={20} className={styles.closeIcon} />
          ) : (
            <>
              <MessageSquareMore
                size={20}
                className={styles.aiIcon}
                style={{ stroke: "url(#gradient)" }}
              />
              <span>Chat</span>
            </>
          )}
        </button>
      </div>
    </>
  );
}

function MenuItem({ title, active }) {
  const handleClick = () => {
    const id = title.toLowerCase();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div
      onClick={handleClick}
      className={`${styles.menuItem} ${active ? styles.active : ""}`}
    >
      <h1>{title}</h1>
    </div>
  );
}
