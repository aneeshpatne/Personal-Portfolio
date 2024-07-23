import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header";
import NameCompoenent from "@/components/Name";
import Aboutme from "@/components/About";
import Skills from "@/components/Skills";
import Project from "@/components/Project";
export default function Home() {
  return (
<>
<Header />
<NameCompoenent />
<Aboutme />
<Skills />
<Project />
</>

  );
}
