"use client";

import { useEffect } from "react";

export default function PageLoad() {
  useEffect(() => {
    document.body.style.visibility = "visible";
  }, []);

  return null;
}
