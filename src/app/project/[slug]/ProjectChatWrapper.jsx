"use client";
import { useEffect, useState } from "react";
import Chat from "@/components/chat";
import style from "./project.module.css";

export default function ProjectChatWrapper({ dataDump }) {
  const [isMobile, setIsMobile] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  if (!isMobile) {
    return (
      <div className={style.chatWrapper}>
        <Chat dataDump={dataDump} />
      </div>
    );
  }

  return (
    <>
      <button
        aria-label="Open project chat"
        className={style.mobileChatButton}
        onClick={() => setOpen(true)}
      >
        Chat
      </button>
      {open && (
        <div
          className={style.mobileChatOverlay}
          role="dialog"
          aria-modal="true"
        >
          <div className={style.mobileChatHeader}>
            <span className={style.mobileChatTitle}>Project Chat</span>
            <button
              aria-label="Close chat"
              className={style.mobileChatClose}
              onClick={() => setOpen(false)}
            >
              ×
            </button>
          </div>
          <div className={style.mobileChatBody}>
            <Chat dataDump={dataDump} />
          </div>
        </div>
      )}
    </>
  );
}
