export const revalidate = 86400;

import React, { Suspense } from "react";

import NameNew from "./NameNew";
import Menu from "./Menu";
import Profile from "./AboutMeNew";
import Skills from "./Skills";
import WebDev from "./WebDev";
import MatrixLLM from "./LLM";
import SystemArchitecture from "./SystemArchitecture";
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
        <SystemArchitecture />
        <DSA />
        <MatrixLLM />
  
      </section>
      <section id="project">
        <Suspense fallback={<ProjectLoadingSkeleton />}>
          <ProjectNew />
        </Suspense>
      </section>
      <Footer />
    </div>
  );
}

function ProjectLoadingSkeleton() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "300px",
      color: "rgba(255, 255, 255, 0.4)",
      fontSize: "1.1rem"
    }}>
      Loading projects...
    </div>
  );
}
