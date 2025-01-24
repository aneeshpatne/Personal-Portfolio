import styles from "./style/Skill.module.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"], font });
export default function Skills({ theme }) {
  return (
    <div className={styles.container}>
      <h1 className={`${inter.className} ${styles.text}`}>SKILLS</h1>
    </div>
  );
}
