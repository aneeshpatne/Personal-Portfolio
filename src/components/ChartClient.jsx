"use client";
import React, { useState, useEffect, useMemo } from "react";
import { Pie, PieChart, Cell, Tooltip, Label } from "recharts";
import styles from "./style/chart.module.css";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className={styles.tooltipContainer}>
        <p className={styles.tooltipTitle} style={{ color: data.fill }}>
          {data.difficulty}
        </p>
        <p className={styles.tooltipValue}>Solved: {data.solved}</p>
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
          className={styles.legendDot}
          style={{ backgroundColor: entry.fill }}
        />
        <div className={styles.legendInfo}>
          <span className={styles.legendText}>{entry.difficulty}</span>
          <span className={styles.legendValue}>{entry.solved}</span>
        </div>
      </div>
    ))}
  </div>
);

export default function DoughnutChart({ chartData }) {
  const [mounted, setMounted] = useState(false);
  
  const totalSolved = useMemo(
    () => chartData.reduce((acc, curr) => acc + curr.solved, 0),
    [chartData],
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className={styles.chartCard}>
        <div className={styles.chartHeader}>DSA Progress</div>
        <div className={styles.chartContent}>
          <div className={styles.skeletonChart}>
            <div className={styles.skeletonCircle}>
              <div className={styles.skeletonInnerCircle}></div>
            </div>
          </div>
          <div className={styles.skeletonLegend}>
            <div className={styles.skeletonLegendItem}></div>
            <div className={styles.skeletonLegendItem}></div>
            <div className={styles.skeletonLegendItem}></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.chartCard}>
      <div className={styles.chartHeader}>DSA Progress</div>
      <div className={styles.chartContent}>
        <PieChart width={300} height={300}>
          <Tooltip content={<CustomTooltip />} cursor={{ fill: "transparent" }} />
          <Pie
            data={chartData}
            dataKey="solved"
            nameKey="difficulty"
            innerRadius={90}
            outerRadius={105}
            stroke="none"
            paddingAngle={5}
            cornerRadius={4}
          >
            {chartData.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={entry.fill}
                stroke="rgba(0,0,0,0)"
              />
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
                        y={viewBox.cy - 8}
                        className={styles.chartTotal}
                      >
                        {totalSolved}
                      </tspan>
                      <tspan
                        x={viewBox.cx}
                        y={viewBox.cy + 22}
                        className={styles.chartSubtext}
                      >
                        SOLVED
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