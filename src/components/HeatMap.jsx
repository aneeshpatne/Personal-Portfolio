import { ActivityCalendar } from "react-activity-calendar";
export function HeatMap() {
  return (
    <ActivityCalendar
      data={[
        {
          date: "2025-01-01",
          count: 16,
          level: 3,
        },
        {
          date: "2025-12-31",
          count: 0,
          level: 0,
        },
      ]}
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
