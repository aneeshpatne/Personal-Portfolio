import styles from "./style/DSA.module.css";
import { Lexend } from "next/font/google";
import { SiCodeforces, SiGithub, SiLeetcode } from "react-icons/si";
import { FaChartPie } from "react-icons/fa";
import { HeatMap } from "./HeatMap";
import { Suspense } from "react";
import { Chart } from "./Chart";

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const dsaPanels = [
  {
    id: "progress",
    category: "PROBLEM SOLVING / LIVE",
    title: "Solved Problems",
    description:
      "A live breakdown of solved LeetCode problems across difficulty bands, built to keep progress scannable without leaving the page.",
    stats: [
      { name: "LeetCode", Icon: SiLeetcode, color: "#ffa116" },
      { name: "Analytics", Icon: FaChartPie, color: "#22c55e" },
    ],
    Component: Chart,
  },
  {
    id: "activity",
    category: "CONSISTENCY / 2026",
    title: "Coding Activity",
    description:
      "A consolidated activity map across Github, LeetCode, CSES, and Codeforces that shows practice consistency over the year.",
    stats: [
      { name: "Github", Icon: SiGithub, color: "#f0f6fc" },
      { name: "Codeforces", Icon: SiCodeforces, color: "#1f8acb" },
      { name: "LeetCode", Icon: SiLeetcode, color: "#ffa116" },
    ],
    Component: HeatMap,
    suspense: true,
  },
];

export default function DSA() {
  return (
    <div className={styles.Container}>
      <div className={styles.Content}>
        <div className={styles.header}>
          <div className={`${styles.pageTitle} ${lexend.className}`}>
            <span>DSA</span>
            <span className={styles.secondaryText}>Practice</span>
          </div>
        </div>
        <div className={styles.panelGrid}>
          {dsaPanels.map(
            ({ id, category, title, description, stats, Component, suspense }) => (
              <section className={styles.panel} key={id}>
                <div className={styles.panelText}>
                  <span>{category}</span>
                  <h2 className={`${styles.panelTitle} ${lexend.className}`}>
                    {title}
                  </h2>
                  <div className={styles.statRow}>
                    {stats.map(({ name, Icon, color }) => (
                      <div
                        className={styles.statItem}
                        key={name}
                        style={{ "--stat-color": color }}
                      >
                        <div className={styles.statLogo}>
                          <Icon className={styles.statIcon} aria-hidden="true" />
                        </div>
                        <div className={styles.statName}>{name}</div>
                      </div>
                    ))}
                  </div>
                  <p className={styles.panelDescription}>{description}</p>
                </div>
                <div className={styles.visualPanel}>
                  {suspense ? (
                    <Suspense
                      fallback={
                        <div className={styles.loadingState}>
                          Loading activity...
                        </div>
                      }
                    >
                      <Component />
                    </Suspense>
                  ) : (
                    <Component />
                  )}
                </div>
              </section>
            ),
          )}
        </div>
      </div>
    </div>
  );
}
