import IntelClient from "./IntelClient";

export async function IntelIndia() {
  const apiKey = process.env.ANEESH_API_KEY;
  const fallbackData = {
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

  let data = fallbackData;

  try {
    const response = await fetch(
      "https://api.aneeshpatne.com/api/v1/score_result/india",
      {
        headers: {
          authorization: `Bearer ${apiKey}`,
        },
        next: {
          revalidate: 3600,
        },
      },
    );

    if (response.ok) {
      const raw = await response.json();
      data = {
        ...fallbackData,
        ...raw,
        score: Number(raw?.score ?? fallbackData.score),
        top_stabilizers: Array.isArray(raw?.top_stabilizers)
          ? raw.top_stabilizers
          : fallbackData.top_stabilizers,
        top_risk_factors: Array.isArray(raw?.top_risk_factors)
          ? raw.top_risk_factors
          : fallbackData.top_risk_factors,
      };
    }
  } catch {
    data = fallbackData;
  }

  return <IntelClient data={data} title="Powered by Intel API" region="India" />;
}
