export const dynamic = "force-dynamic";
// export const revalidate = 86400;
import styles from "./styles/background.module.css";
import Container from "@/components/profileContainer";
export default function Home() {
  return (
    <>
      <div className={styles.backgroundContainer}></div>
      <Container />
    </>
  );
}
