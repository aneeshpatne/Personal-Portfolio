import Image from "next/image";
import styles from "./style/MainItem.module.css";

export function MainItem() {
  return (
    <div className={styles.container}>
      <div className={styles.bg}>
        <Image
          src="/assets/img/retro_highres.png"
          alt="Retro graphic"
          fill
          sizes="250px"
          style={{ objectFit: "cover" }}
        />
      </div>
      <h1 className={styles.heading}>Portfolio</h1>
    </div>
  );
}
