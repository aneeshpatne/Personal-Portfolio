"use client";
import { useEffect, useRef } from "react";
import styles from "./style/LLM.module.css";

const TerminalLine = ({ text, active = false }) => (
  <div className={`${styles.terminalLine} ${active ? styles.active : ""}`}>
    <span className={styles.prompt}>➜</span>
    <span>{text}</span>
  </div>
);

const AgentVisual = () => (
  <div className={styles.agentVisual}>
    <div className={`${styles.node} ${styles.nodeCenter}`} />
    <div className={`${styles.orbitRing} ${styles.orbit1}`} />
    <div className={`${styles.orbitRing} ${styles.orbit2}`} />
    <div className={`${styles.orbitRing} ${styles.orbit3}`} />
    {/* Floating nodes */}
    <div className={styles.node} style={{ top: "20%", left: "20%", opacity: 0.5 }} />
    <div className={styles.node} style={{ bottom: "30%", right: "25%", opacity: 0.6 }} />
    <div className={styles.node} style={{ top: "40%", right: "15%", opacity: 0.4 }} />
  </div>
);

function MatrixLLM() {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const cards = containerRef.current.getElementsByClassName(styles.card);
      
      for (const card of cards) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className={styles.container} ref={containerRef}>
      <div className={styles.gridOverlay} />
      
      <header className={styles.header}>
        <h1 className={styles.title}>Engineering Intelligence</h1>
        <p className={styles.subtitle}>
          I build reliable autonomous systems that solve real problems. My focus is on turning raw models into practical, production-ready software.
        </p>
      </header>

      <div className={styles.bentoGrid}>
        {/* Primary Card: Autonomous Agents */}
        <div className={`${styles.card} ${styles.cardLarge}`}>
          <div className={styles.cardHeader}>
            <div className={styles.iconBox}>
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <div className={styles.tagContainer}>
              <span className={styles.tag}>Multi-Step Logic</span>
              <span className={styles.tag}>Self-Correcting</span>
            </div>
          </div>
          <div>
            <h3 className={styles.cardTitle}>Agentic Architecture</h3>
            <p className={styles.cardDesc}>
              I design workflows that plan and execute tasks autonomously. My agents handle complex logic and correct their own errors without human intervention.
            </p>
          </div>
          <AgentVisual />
        </div>

        {/* Secondary Card: MCP */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <div className={styles.iconBox}>
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>
          <h3 className={styles.cardTitle}>MCP Integration</h3>
          <p className={styles.cardDesc}>
            I build custom servers that connect AI models to external tools and databases, allowing assistants to interact with your actual data.
          </p>
          <div className={styles.tagContainer} style={{ marginTop: '1rem' }}>
            <span className={styles.tag}>Context Awareness</span>
            <span className={styles.tag}>Protocol Standards</span>
          </div>
        </div>

        {/* Secondary Card: Vector DB */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <div className={styles.iconBox}>
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
              </svg>
            </div>
          </div>
          <h3 className={styles.cardTitle}>Vector Memory</h3>
          <p className={styles.cardDesc}>
            I implement hybrid search systems that find the right context. Using advanced reranking, I ensure high accuracy for RAG applications.
          </p>
          <div className={styles.tagContainer} style={{ marginTop: '1rem' }}>
            <span className={styles.tag}>Embeddings</span>
            <span className={styles.tag}>Semantic Search</span>
          </div>
        </div>

        {/* Wide Card: AI Tech Stack */}
        <div className={`${styles.card} ${styles.cardWide}`}>
          <div className={styles.cardHeader}>
            <div className={styles.iconBox}>
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <span className={styles.tag}>Stack</span>
          </div>
          <h3 className={styles.cardTitle}>My AI Tech Stack</h3>
          <p className={styles.cardDesc}>
            I leverage the most powerful tools and frameworks in the ecosystem to build production-ready applications.
          </p>
          <div className={styles.techGrid}>
            {["Vercel AI SDK", "LangChain", "LangGraph", "OpenAI", "Pinecone", "Hugging Face", "Next.js", "Tailwind"].map((tech) => (
              <div key={tech} className={styles.premiumBadge}>
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* Tooling Card */}
        <div className={`${styles.card} ${styles.cardWide}`}>
          <div className={styles.cardHeader}>
            <div className={styles.iconBox}>
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <span className={styles.tag}>Infrastructure</span>
          </div>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <div style={{ flex: 1 }}>
              <h3 className={styles.cardTitle}>ML Ops & Production</h3>
              <p className={styles.cardDesc}>
                I focus on deploying reliable AI systems. From testing and evaluation to monitoring, I ensure your agents work in the real world.
              </p>
            </div>
            <div style={{ flex: 1, background: 'rgba(0,0,0,0.3)', borderRadius: '8px', padding: '1rem' }}>
              <div className={styles.terminal}>
                <TerminalLine text="initializing agent..." />
                <TerminalLine text="loading context..." />
                <TerminalLine text="executing tool_call(analyze_data)" active />
                <TerminalLine text="processing results..." />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default MatrixLLM;
