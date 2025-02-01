"use client";

import React from "react";
import dynamic from "next/dynamic";
import NameNew from "./NameNew";
import Loading from "@/app/loading";

const Profile = dynamic(() => import("./AboutMeNew"), {
  loading: () => <Loading />,
});
const Skills = dynamic(() => import("./Skills"), {
  loading: () => <Loading />,
});
const WebDev = dynamic(() => import("./WebDev"), {
  loading: () => <Loading />,
});
const MatrixLLM = dynamic(() => import("./LLM"), {
  loading: () => <Loading />,
});
const DSA = dynamic(() => import("./DSA"), {
  loading: () => <Loading />,
});
const ProjectNew = dynamic(() => import("./ProjectNew"), {
  loading: () => <Loading />,
});

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
