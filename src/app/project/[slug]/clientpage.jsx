"use client";
import { useEffect } from "react";
export default function ClientPage({ title }) {
  useEffect(() => {
    document.title = title + "- Aneesh Patne Project";
  }, []);
  return null;
}
