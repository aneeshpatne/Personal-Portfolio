import IntelClient from "./IntelClient";

export async function IntelWorld() {
  const apiKey = process.env.ANEESH_API_KEY;
  const fallbackData = {
    score: 60.6,
    top_stabilizers: [
      "US-Iran contacts reported via parliament speaker",
      "Some leaders signal limited war aims",
      "Repatriation flights reduce civilian exposure",
      "Alternative pipeline routes discussed beyond Hormuz",
      "Emergency services contained major aircraft incident",
      "States mobilize weather and disaster warnings",
      "Selective infrastructure openings sustain mobility",
    ],
    top_risk_factors: [
      "Iran-Israel-US strikes widen regional war",
      "Hormuz disruption threatens global energy flows",
      "Civilian sites hit in Odesa and Gaza",
      "Hezbollah front reactivates in Lebanon",
      "Baloch insurgent attacks hit Pakistan security assets",
      "Russia-UK spy row adds diplomatic friction",
      "Oil shock drives market sell-off and currency stress",
      "Aid flight damaged at Mashhad airport",
    ],
    trend: "worsening",
    alert_color: "red",
  };

  let data = fallbackData;

  try {
    const response = await fetch(
      "https://api.aneeshpatne.com/api/v1/score_result/world",
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

  return <IntelClient data={data} title="Powered by Intel API" region="World" />;
}
