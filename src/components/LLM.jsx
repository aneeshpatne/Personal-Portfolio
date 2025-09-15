"use client";
import styles from "./style/LLM.module.css";
import ReactMarkdown from "react-markdown";

// Single static assistant content (condensed from previous multiple messages).
const assistantContent = `## 🤖 Large Language Models\n- Expert in **GPT-4, Claude, and open-source LLMs**\n- Developed **production-ready AI applications**\n- Implemented **RAG systems**\n\n## 🛠️ Technical Integration\n- Proficient with **OpenAI and Hugging Face**\n- Built **scalable AI infrastructure**\n- Experience with **vector databases**\n\n## 🎯 Applications\n- Created **AI chatbots**\n- Developed **document analysis**\n- Built **content generation tools**`;

function MatrixLLM() {
  return (
    <div className={styles.Container}>
      <div className={styles.Content}>
        <h2 className={styles.contentHeader}>
          <span className={styles.gradientText}>AI</span> & LLM Assistant
        </h2>
        <div className={styles.chatWindow}>
          <div className={styles.messagesArea}>
            <div className={styles.messageRowUser}>
              <div className={styles.userBubble}>
                <p>Can you summarize your AI & LLM expertise?</p>
              </div>
              <img
                src="/assets/img/placeholder.jpg"
                alt="User"
                className={styles.avatarSmall}
              />
            </div>
            <div className={styles.messageRowAssistant}>
              <img
                src="/assets/img/aneesh3.png"
                alt="Aneesh"
                className={styles.avatarSmall}
              />
              <div className={styles.assistantBubble}>
                <ReactMarkdown className={styles.markdownCompact}>
                  {assistantContent}
                </ReactMarkdown>
              </div>
            </div>
          </div>
          <div className={styles.inputBar}>
            <input
              type="text"
              placeholder="Ask anything"
              className={styles.textInput}
            />
            <button
              type="button"
              className={styles.sendBtn}
              title="Send (demo)"
              aria-disabled="true"
              data-dummy="true"
              role="button"
            >
              <svg viewBox="0 0 24 24" className={styles.sendIcon}>
                <path
                  d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MatrixLLM;
