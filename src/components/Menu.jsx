"use client";
import { useEffect, useState, useCallback } from "react";
import styles from "./style/menu.module.css";
import { MessageSquareMore, X } from "lucide-react";
import Chat from "./chatResume";
import { useChatContext } from "./ChatContext";

// Section meta so we can extend easily later (e.g., icons)
const sections = [
  { id: "home", label: "Home" },
  { id: "skills", label: "Skills" },
  { id: "project", label: "Project" },
];

export default function Menu() {
  const [activeSection, setActiveSection] = useState("home");
  const { isChatOpen, toggleChat } = useChatContext();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length) setActiveSection(visible[0].target.id);
      },
      { threshold: 0.08 }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) requestAnimationFrame(() => observer.observe(el));
    });
    return () => observer.disconnect();
  }, []);

  const handleNavigate = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <>
      <div className={styles.lowerContainer}>
        {/* Render navigation only for non-small screens (handled by CSS display: none on <=768px) */}
        <nav className={styles.MenuContainer} aria-label="Primary">
          {sections.map(({ id, label }) => (
            <MenuItem
              key={id}
              id={id}
              title={label}
              active={activeSection === id}
              onSelect={handleNavigate}
            />
          ))}
        </nav>
        <button
          className={`${styles.chatButton} ${isChatOpen ? styles.active : ""}`}
          onClick={toggleChat}
          aria-pressed={isChatOpen}
          aria-label={isChatOpen ? "Close chat" : "Open chat"}
        >
          {isChatOpen ? (
            <X size={20} className={styles.closeIcon} />
          ) : (
            <>
              <MessageSquareMore size={20} className={styles.aiIcon} />
              <span>Chat</span>
            </>
          )}
        </button>
      </div>
      {isChatOpen && (
        <div className={styles.chatBackdrop} onClick={toggleChat}>
          <div
            className={styles.chatBoxMain}
            onClick={(e) => e.stopPropagation()}
          >
            <Chat />
          </div>
        </div>
      )}
    </>
  );
}

function MenuItem({ id, title, active, onSelect }) {
  return (
    <button
      type="button"
      onClick={() => onSelect(id)}
      className={`${styles.menuItem} ${active ? styles.menuItemActive : ""}`}
      aria-current={active ? "page" : undefined}
      aria-label={title}
    >
      <span className={styles.menuLabel}>{title}</span>
      <span className={styles.menuAbbr} aria-hidden="true">
        {title.charAt(0)}
      </span>
      {active && <span className={styles.activeIndicator} aria-hidden="true" />}
    </button>
  );
}