"use client";

import { useState, useEffect } from "react";
import NewHeader from "./NewHeader";
import { UseThemeContext } from "./ThemeContext";
import NameNew from "./NameNew";
import ProjectNew from "./ProjectNew";
import WebDev from "./WebDev";
import Profile from "./aboutMeNew";
import Skills from "./Skills";
import MatrixLLM from "./LLM";
export default function HomePage() {
  const { theme, ThemeToggle } = UseThemeContext();
  const [Mount, setMount] = useState(false);
  useEffect(() => {
    setMount(true);
  }, []);
  if (!Mount) return null;
  return (
    <>
      <NewHeader theme={theme} ThemeToggle={ThemeToggle} />
      <NameNew theme={theme} />
      <Profile theme={theme} />
      <Skills theme={theme} />
      <WebDev theme={theme} />
      <MatrixLLM theme={theme} />
      <ProjectNew theme={theme} />
    </>
  );
}
