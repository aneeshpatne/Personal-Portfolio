"use client";

import React from "react";
import NameNew from "./NameNew";
import Loading from "@/app/loading"; // Adjust the path if needed
import Profile from "./aboutMeNew";
import Skills from "./Skills";
import WebDev from "./WebDev";
import MatrixLLM from "./LLM";
import DSA from "./DSA";
import ProjectNew from "./ProjectNew";

export default function HomePage() {
  return (
    <>
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
