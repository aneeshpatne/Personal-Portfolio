import { HeatMapClient } from "./HeatMapClient";

export async function HeatMap() {
  const apiKey = process.env.ANEESH_API_KEY;

  const response = await fetch("https://api.aneeshpatne.com/api/v1/stats", {
    headers: {
      authorization: `Bearer ${apiKey}`,
    },
    next: {
      revalidate: 86400,
    },
  });

  if (!response.ok) {
    throw new Error(`API request failed with status ${response.status}`);
  }

  const fetchedData = await response.json();

  const data = [
    ...fetchedData,
    {
      date: "2026-12-31",
      count: 0,
      level: 0,
    },
  ];

  return <HeatMapClient data={data} />;
}
