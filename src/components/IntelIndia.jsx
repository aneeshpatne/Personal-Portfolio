import IntelClient from "./IntelClient";

export async function IntelIndia() {
  const data = {
    score: 82.4,
    top_stabilizers: [
      "Robust FX reserves buffer macro shocks",
      "Capital expenditure boosts infrastructure development",
      "Strong corporate earnings and consumer demand",
      "FDI inflows support domestic manufacturing targets",
      "Monetary policy maintains price stability focus",
    ],
    top_risk_factors: [
      "Elevated crude oil prices strain current account",
      "Geopolitical shifts alter regional trade dynamics",
      "Uneven monsoon patterns affect rural recovery",
      "Regulatory changes in tech and finance sectors",
    ],
    trend: "stable",
    alert_color: "green",
  };

  return <IntelClient data={data} title="INDIA INTEL" />;
}
