"use client";

import { motion } from "framer-motion";
import { MessageSquareMore, Sparkles } from "lucide-react";
import styles from "./style/ResumeAI.module.css";
import { useChatContext } from "./ChatContext";

export function ResumeAI() {
  const { openChat } = useChatContext();

  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      style={{ "--status-color": "#3b82f6" }} // Blue color for AI
    >
      <div className={styles.spotlight} />

      {/* Header: Label + Icon */}
      <div className={styles.header}>
        <div className={styles.titleGroup}>
          <div className={styles.iconBox}>
            <Sparkles size={20} strokeWidth={2.5} />
          </div>
          <span className={styles.label}>Interactive Resume</span>
        </div>
        <div className={styles.badge}>Powered by Resume.AI API</div>
      </div>

      {/* Main Content: Description */}
      <div className={styles.mainContent}>
        <h3 className={styles.mainTitle}>Curious about my background?</h3>
        <p className={styles.description}>
          Ask questions about my skills, experience, and projects.
        </p>
      </div>

      {/* Footer: Button */}
      <div className={styles.footer}>
        <button className={styles.chatButton} onClick={openChat}>
          <MessageSquareMore size={18} />
          <span>Start Chat</span>
        </button>
      </div>
    </motion.div>
  );
}
