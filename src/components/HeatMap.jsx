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
      ]}
      weekStart={1}
      blockMargin={4}
      blockRadius={2}
      blockSize={12}
    />
  );
}
