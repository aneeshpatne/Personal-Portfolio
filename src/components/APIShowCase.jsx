import { PM25 } from "./PM25";
import { News } from "./News";
import styles from "./style/APIShowCase.module.css";

export function APIShowCase() {
  return (
    <div className={styles.container}>
      <PM25 />
      <News />
    </div>
  );
}
