"use client";
import React, { useState, useEffect, useMemo } from "react";
import { Pie, PieChart, Cell, Tooltip, Label } from "recharts";
import styles from "./style/chart.module.css";

const chartData = [
  { difficulty: "Easy", solved: 215, fill: "#4CAF50" },
  { difficulty: "Medium", solved: 341, fill: "#FFC107" },
  { difficulty: "Hard", solved: 27, fill: "#F44336" },
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className={styles.tooltipContainer}>
        <p className={styles.tooltipTitle}>{data.difficulty}</p>
        <p>Solved: {data.solved}</p>
      </div>
    );
  }
  return null;
};

const Legend = ({ data }) => (
  <div className={styles.legendContainer}>
    {data.map((entry, index) => (
      <div key={`legend-${index}`} className={styles.legendItem}>
        <div
          className={styles.legendColor}
          style={{ backgroundColor: entry.fill }}
        />
        <span>
          {entry.difficulty}: {entry.solved}
        </span>
      </div>
    ))}
  </div>
);

export default function DoughnutChart() {
  // Always call your hooks at the top.
  const [mounted, setMounted] = useState(false);
  const totalSolved = useMemo(
    () => chartData.reduce((acc, curr) => acc + curr.solved, 0),
    []
  );
  useEffect(() => {
    setMounted(true);
  }, []);

  // Now, conditionally render after all hooks have been called.
  if (!mounted) return null;

  return (
    <div className={styles.chartCard}>
      <div className={styles.chartHeader}>DSA Questions Solved</div>
      <div className={styles.chartContent}>
        <PieChart width={300} height={300}>
          <Tooltip content={<CustomTooltip />} />
          <Pie
            data={chartData}
            dataKey="solved"
            nameKey="difficulty"
            innerRadius={60}
            outerRadius={80}
            strokeWidth={0}
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill} />
            ))}
            <Label
              content={({ viewBox }) => {
                if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                  return (
                    <text
                      x={viewBox.cx}
                      y={viewBox.cy}
                      textAnchor="middle"
                      dominantBaseline="middle"
                    >
                      <tspan
                        x={viewBox.cx}
                        y={viewBox.cy - 10}
                        className={styles.chartTotal}
                      >
                        {totalSolved}
                      </tspan>
                      <tspan
                        x={viewBox.cx}
                        y={viewBox.cy + 15}
                        className={styles.chartSubtext}
                      >
                        Total Solved
                      </tspan>
                    </text>
                  );
                }
                return null;
              }}
            />
          </Pie>
        </PieChart>
        <Legend data={chartData} />
      </div>
    </div>
  );
}
