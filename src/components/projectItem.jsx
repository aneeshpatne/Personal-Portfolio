import styles from "./style/projectItem.module.css";
import Image from "next/image";
import { Instrument_Serif } from "next/font/google";
import { db } from "@/lib/db";
import { projects } from "@/lib/schema";
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
});

export default async function ProjectItem() {
  const today = new Date();
  const project = await db
    .select({
      id: projects.id,
      title: projects.title,
    })
    .from(projects);
  const index = today.getDate() % project.length;
  const title = project[index].title;
  const url = `https://www.aneeshpatne.com/project/${project[index].id}`;

  const getFontSizePx = (len) => {
    const maxPx = 38;
    const minPx = 12;
    const minLen = 10;
    const maxLen = 48;
    const clampedLen = Math.max(minLen, Math.min(len, maxLen));
    const ratio = (clampedLen - minLen) / (maxLen - minLen);
    return Math.round(maxPx - (maxPx - minPx) * ratio);
  };

  return (
    <div className={styles.projectContainer}>
      <a
        href={url}
        className={styles.imageLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={title}
      >
        <Image
          src="/assets/img/projectretro.png"
          fill
          sizes="250px"
          alt="Retro Background"
          style={{ objectFit: "cover" }}
        />
      </a>

      <div className={styles.overlay} />

      <div className={styles.featured}>
        <span className={styles.featuredText}>Featured Project</span>
      </div>
      <h1
        className={`${styles.heading} ${instrumentSerif.className}`}
        style={{
          fontSize: `${getFontSizePx(title.length)}px`,
          lineHeight: 1.1,
        }}
      >
        {title}
      </h1>
    </div>
  );
}
