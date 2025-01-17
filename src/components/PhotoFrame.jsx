import styles from "./style/aboutPhotoFrame.module.css";
import Image from "next/image";
export default function Photoframe({ theme }) {
  return (
    <div
      id={styles.PhotoFrameContainer}
      className={theme === "LightMode" ? styles.LightMode : ""}
    >
      <div id={styles.FrameImgContainer}>
        <Image
          src="https://cdn.sanity.io/images/gbe5l3wg/production/2753c6eb82936da293807c88a26fe8d864c7abd0-1200x1400.png"
          alt="its me"
          height={640}
          width={640}
          draggable={false}
          style={{ objectFit: "contain" }}
        />
      </div>
    </div>
  );
}
