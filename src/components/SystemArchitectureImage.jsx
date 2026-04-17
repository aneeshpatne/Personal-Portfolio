import style from "./style/SystemArchitectureImage.module.css";
import Image from "next/image";
export function SystemArchitectureImage({ imageSrc = "/assets/img/cam.png" }) {
  return (
    <div className={style.ImageContainer}>
      <div className={style.ImageFrame}>
        <Image
          src={imageSrc}
          fill
          sizes="(max-width: 1024px) 88vw, 360px"
          alt="DIY CCTV Cam"
          className={style.ProjectImage}
        />
      </div>
    </div>
  );
}
