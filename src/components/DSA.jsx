import styles from "./style/DSA.module.css";
import { Lexend } from "next/font/google";
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
    asset: "/assets/svg/dsa_tick.svg",
    assetAlt: "",
    badge: true,
    Component: Chart,
  },
  {
    id: "activity",
    category: "CONSISTENCY / 2026",
    title: "Coding Activity",
    asset: "/assets/svg/trophy.svg",
    assetAlt: "",
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
            ({
              id,
              category,
              title,
              asset,
              assetAlt,
              badge,
              Component,
              suspense,
            }) => (
              <section className={styles.panel} key={id}>
                <div className={styles.panelText}>
                  <div>
                    <span>{category}</span>
                    <h2 className={`${styles.panelTitle} ${lexend.className}`}>
                      {title}
                    </h2>
                  </div>
                  <div
                    className={
                      badge ? styles.assetBadge : styles.assetIllustration
                    }
                    aria-hidden="true"
                  >
                    <img src={asset} alt={assetAlt} className={styles.asset} />
                  </div>
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
