"use client";

import { ActivityCalendar } from "react-activity-calendar";

export function HeatMapClient({ data }) {
  const theme = {
    light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
    dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
  };

  return (
    <ActivityCalendar
      data={data}
      weekStart={1}
      blockMargin={4}
      blockRadius={2}
      blockSize={12}
      theme={theme}
      colorScheme="dark"
      tooltips={{
        activity: {
          text: (activity) =>
            `${activity.level} activities on ${activity.date}`,
          placement: "left",
          offset: 6,
          hoverRestMs: 300,
          transitionStyles: {
            duration: 100,
            common: { fontFamily: "monospace" },
          },
          withArrow: true,
        },
      }}
      showMonthLabels
      showWeekdayLabels={["mon", "sun"]}
    />
  );
}
