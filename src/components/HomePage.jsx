"use client";

import React, { lazy, Suspense } from "react";
import NameNew from "./NameNew";
import Loading from "@/app/loading"; // Adjust the path if needed

// Lazy load the components
const LazyProfile = lazy(() => import("./aboutMeNew"));
const LazySkills = lazy(() => import("./Skills"));
const LazyWebDev = lazy(() => import("./WebDev"));
const LazyMatrixLLM = lazy(() => import("./LLM"));
const LazyDSA = lazy(() => import("./DSA"));
const LazyProjectNew = lazy(() => import("./ProjectNew"));

export default function HomePage() {
  return (
    <>
      <NameNew />
      <Suspense fallback={<Loading />}>
        <LazyProfile />
        <LazySkills />
        <LazyWebDev />
        <LazyMatrixLLM />
        <LazyDSA />
        <LazyProjectNew />
      </Suspense>
    </>
  );
}
