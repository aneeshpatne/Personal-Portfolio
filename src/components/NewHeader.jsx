import styles from "./style/newHeader.module.css";
import { Moon } from "lucide-react";
export default function NewHeader({ theme, themeToggle }) {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.themeToggle}>
        <Moon size={20} />
      </div>
    </div>
  );
}
