"use client";

import { useState, useEffect } from "react";
import NameCompoenent from "./Name";
import NewHeader from "./NewHeader";
import { UseThemeContext } from "./ThemeContext";
import Aboutme from "./About";
import NameNew from "./NameNew";
import dynamic from "next/dynamic";
import Loading from "@/app/loading";
const LazyStats = dynamic(() => import("./Graphs"), {
  loading: () => <Loading />,
  ssr: false,
});
const LazyProject = dynamic(() => import("../components/Project"), {
  loading: () => <Loading />,
  ssr: false,
});
const LazySkills = dynamic(() => import("../components/Skills"), {
  loading: () => <Loading />,
  ssr: false,
});
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
      <Aboutme theme={theme} />
      <LazyStats theme={theme} />
      <LazySkills />
      <LazyProject />
    </>
  );
}
