import Menu from "@/components/Menu";
import NameNew from "@/components/NameNew";
import Skills from "@/components/Skills";
import WebDev from "@/components/WebDev";
import MatrixLLM from "@/components/LLM";
import DSA from "@/components/DSA";
import ProjectNew from "@/components/ProjectNew";
export default function Home() {
  return (
    <>
      <section id="home">
        <NameNew />
      </section>
      <Menu />
      <section id="skills">
        <Skills />

        <WebDev />
        <MatrixLLM />
        <DSA />
      </section>
      <section id="project">
        <ProjectNew />
      </section>
    </>
  );
}
