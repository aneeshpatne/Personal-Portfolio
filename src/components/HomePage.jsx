export const revalidate = 10;

import React, { Suspense } from "react";

import NameNew from "./NameNew";
import Menu from "./Menu";
import Footer from "./Footer";
import ProjectNew from "./project";
import { LLM_new } from "./LLM_new";
import { APIShowCase } from "./APIShowCase";
import { ChatProvider } from "./ChatContext";

export default function HomePage() {
  return (
    <ChatProvider>
      <div style={{ position: "fixed", top: 0, left: 0, width: '50%', height: '50%' }}>
        <section id="home" style={{ display: 'none' }}>
          <NameNew />
        </section>
        <Menu />
        <section id="skills" style={{ visibility: 'hidden' }}>
          <LLM_new />
          <APIShowCase />
        </section>
        <section id="project">
          <Suspense fallback={null}>
            <ProjectNew />
          </Suspense>
        </section>
        <Footer />
      </div>
    </ChatProvider>
  );
}
