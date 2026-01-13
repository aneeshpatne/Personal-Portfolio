"use client";

import { ActivityCalendar } from "react-activity-calendar";

export function HeatMapClient({ data }) {
  return (
    <ActivityCalendar
      data={data}
      weekStart={1}
      blockMargin={4}
      blockRadius={2}
      blockSize={12}
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
