"use client";

import { useState, useEffect } from "react";
import NewHeader from "./NewHeader";
import NameNew from "./NameNew";
import ProjectNew from "./ProjectNew";
import WebDev from "./WebDev";
import Profile from "./aboutMeNew";
import Skills from "./Skills";
import MatrixLLM from "./LLM";
import DSA from "./DSA";

export default function HomePage() {
  const [Mount, setMount] = useState(false);
  useEffect(() => {
    setMount(true);
  }, []);
  if (!Mount) return null;
  return (
    <>
      <NewHeader />
      <NameNew />
      <Profile />
      <Skills />
      <WebDev />
      <MatrixLLM />
      <DSA />
      <ProjectNew />
    </>
  );
}
