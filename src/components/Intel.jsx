import IntelClient from "./IntelClient";

export async function Intel() {
  const data = {
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

  return <IntelClient data={data} />;
}
