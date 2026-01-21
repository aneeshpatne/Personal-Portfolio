import style from "./style/SystemArchitectureImage.module.css";
import Image from "next/image";
export function SystemArchitectureImage() {
  return (
    <div className={style.ImageContainer}>
      <Image
        src={"/assets/img/cam.png"}
        width={350}
        height={250}
        alt="DIY CCTV Cam"
      />
    </div>
  );
}
