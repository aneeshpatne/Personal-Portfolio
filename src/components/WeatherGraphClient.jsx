"use client";

import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import styles from "./style/WeatherGraph.module.css";

const TEMP_COLOR = "#ff7a59";
const HUMI_COLOR = "#22d3ee";

function formatTempTick(value) {
  return Number(value).toFixed(1);
}

function formatHumidityTick(value) {
  return Math.round(Number(value)).toString();
}

function formatDateLabel(dateString) {
  if (!dateString) return "";
  const [year, month, day] = dateString.split("-").map(Number);
  if (!year || !month || !day) return dateString;

  const date = new Date(Date.UTC(year, month - 1, day));
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

function normalizeData(rawData) {
  const records = Array.isArray(rawData)
    ? rawData
    : Array.isArray(rawData?.data)
      ? rawData.data
      : [];

  return records
    .map((item) => ({
      timestamp: item.timestamp,
      dateLabel: formatDateLabel(item.timestamp),
      temp: Number.parseFloat(item.avg_temp),
      humidity: Number.parseFloat(item.avg_humidity),
    }))
    .filter(
      (item) =>
        item.timestamp &&
        Number.isFinite(item.temp) &&
        Number.isFinite(item.humidity),
    );
}

function CustomTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;

  const temp = payload.find((entry) => entry.dataKey === "temp")?.value;
  const humidity = payload.find((entry) => entry.dataKey === "humidity")?.value;

  return (
    <div className={styles.tooltip}>
      <p className={styles.tooltipDate}>{label}</p>
      <p className={styles.tooltipTemp}>Temp: {Number(temp).toFixed(1)} degC</p>
      <p className={styles.tooltipHumidity}>
        Humidity: {Number(humidity).toFixed(1)}%
      </p>
    </div>
  );
}

export default function WeatherGraphClient({ data }) {
  const chartData = normalizeData(data);

  if (!chartData.length) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.card}>
          <div className={styles.headlineRow}>
            <h3 className={styles.title}>Weather Trend</h3>
          </div>
          <p className={styles.empty}>No graph data available right now.</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.headlineRow}>
          <h3 className={styles.title}>Temperature + Humidity Trend</h3>
          <span className={styles.badge}>Powered by Mausam API</span>
        </div>

        <div className={styles.chartArea}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData} margin={{ top: 10, right: 16, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 6" stroke="rgba(255,255,255,0.08)" />
              <XAxis
                dataKey="dateLabel"
                tick={{ fill: "rgba(255,255,255,0.66)", fontSize: 11 }}
                tickLine={false}
                axisLine={{ stroke: "rgba(255,255,255,0.16)", strokeWidth: 1 }}
                tickMargin={10}
                minTickGap={26}
                interval="preserveStartEnd"
              />
              <YAxis
                yAxisId="left"
                tick={{ fill: "rgba(255,255,255,0.7)", fontSize: 11 }}
                tickLine={false}
                axisLine={{ stroke: "rgba(255,255,255,0.16)", strokeWidth: 1 }}
                tickMargin={8}
                tickFormatter={formatTempTick}
                label={{
                  value: "Temp °C",
                  angle: -90,
                  position: "insideLeft",
                  offset: 6,
                  fill: "rgba(255,255,255,0.65)",
                  fontSize: 11,
                }}
              />
              <YAxis
                yAxisId="right"
                orientation="right"
                tick={{ fill: "rgba(255,255,255,0.7)", fontSize: 11 }}
                tickLine={false}
                axisLine={{ stroke: "rgba(255,255,255,0.16)", strokeWidth: 1 }}
                tickMargin={8}
                tickFormatter={formatHumidityTick}
                label={{
                  value: "Humidity %",
                  angle: 90,
                  position: "insideRight",
                  offset: 6,
                  fill: "rgba(255,255,255,0.65)",
                  fontSize: 11,
                }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend
                verticalAlign="top"
                align="right"
                wrapperStyle={{ paddingBottom: "10px", color: "rgba(255,255,255,0.78)", fontSize: "12px" }}
              />

              <Line
                yAxisId="left"
                type="monotone"
                dataKey="temp"
                name="Temp"
                stroke={TEMP_COLOR}
                strokeWidth={2.5}
                dot={false}
                activeDot={{ r: 5, fill: TEMP_COLOR, stroke: "#111", strokeWidth: 1.5 }}
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="humidity"
                name="Humidity"
                stroke={HUMI_COLOR}
                strokeWidth={2.5}
                dot={false}
                activeDot={{ r: 5, fill: HUMI_COLOR, stroke: "#111", strokeWidth: 1.5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
