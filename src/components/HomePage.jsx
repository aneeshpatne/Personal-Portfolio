export const revalidate = 86400;

import React from "react";

import NameNew from "./NameNew";
import Menu from "./Menu";
import Profile from "./AboutMeNew";
import Skills from "./Skills";
import WebDev from "./WebDev";
import MatrixLLM from "./LLM";
import DSA from "./DSA";
import Footer from "./Footer";
import ProjectNew from "./project";

export default function HomePage() {
  return (
    <div style={{ position: "relative" }}>
      <section id="home">
        <NameNew />
      </section>
      <Menu />
      <Profile />
      <section id="skills">
        <WebDev />
        <MatrixLLM />
        <DSA />
      </section>
      <section id="project">
        <ProjectNew />
      </section>
      <Footer />
    </div>
  );
}
