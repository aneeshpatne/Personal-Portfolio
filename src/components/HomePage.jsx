"use client";

import { useState, useEffect } from "react";
import NewHeader from "./NewHeader";
import { UseThemeContext } from "./ThemeContext";
import NameNew from "./NameNew";
import ProjectNew from "./ProjectNew";
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
      <ProjectNew theme={theme} />
    </>
  );
}
