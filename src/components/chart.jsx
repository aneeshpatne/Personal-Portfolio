import DoughnutChart from "./ChartClient";
const chartData = [
  { difficulty: "Easy", solved: 215, fill: "#4CAF50" },
  { difficulty: "Medium", solved: 341, fill: "#FFC107" },
  { difficulty: "Hard", solved: 27, fill: "#F44336" },
];

export function Chart() {
  return <DoughnutChart chartData={chartData} />;
}
