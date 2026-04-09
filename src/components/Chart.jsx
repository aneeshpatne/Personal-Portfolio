import DoughnutChart from "./ChartClient";

export async function Chart() {
  const apiKey = process.env.ANEESH_API_KEY;
  let chartData;

  try {
    const response = await fetch(
      "https://api.aneeshpatne.com/api/v1/leetcode",
      {
        headers: {
          authorization: `Bearer ${apiKey}`,
        },
        next: {
          revalidate: 86400,
        },
      },
    );

    if (!response.ok) {
      throw new Error("Failed to fetch LeetCode data");
    }

    const data = await response.json();
    chartData = [
      { difficulty: "Easy", solved: data.easy, fill: "#10B981" },
      { difficulty: "Medium", solved: data.med, fill: "#EBCF72" },
      { difficulty: "Hard", solved: data.difficult, fill: "#FB7185" },
    ];
  } catch (error) {
    console.error("Error fetching LeetCode data:", error);
    // Fallback data
    chartData = [
      { difficulty: "Easy", solved: 227, fill: "#10B981" },
      { difficulty: "Medium", solved: 356, fill: "#EBCF72" },
      { difficulty: "Hard", solved: 32, fill: "#FB7185" },
    ];
  }

  return <DoughnutChart chartData={chartData} />;
}
