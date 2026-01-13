import { ActivityCalendar } from "react-activity-calendar";

export async function HeatMap() {
  const apiKey = process.env.ANEESH_API_KEY;

  const response = await fetch("https://api.aneeshpatne.com/v1/api/stats", {
    headers: {
      authorization: `Bearer ${apiKey}`,
    },
    cache: "force-cache",
    next: {
      revalidate: 86400, // Cache for 24 hours (1 day)
    },
  });

  const fetchedData = await response.json();

  const data = [
    ...fetchedData,
    {
      date: "2025-12-31",
      count: 0,
      level: 0,
    },
  ];

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
