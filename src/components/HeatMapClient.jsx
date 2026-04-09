"use client";
import { useState, useEffect, useTransition } from "react";
import { ActivityCalendar } from "react-activity-calendar";

export function HeatMapClient({ data }) {
  const [isReady, setIsReady] = useState(false);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(() => {
      setIsReady(true);
    });
  }, []);

  const theme = {
    light: ["#f4f2ff", "#e6e0ff", "#d2c9ff", "#b3adff", "#8f90ff"],
    dark: ["#222437", "#2f3351", "#4a5090", "#676fd0", "#8b8fff"],
  };

  if (!isReady) {
    return <div style={{ height: 150, opacity: 0.5 }}>Loading activity...</div>;
  }

  return (
    <ActivityCalendar
      data={data}
      weekStart={1}
      blockMargin={4}
      blockRadius={2}
      blockSize={12}
      theme={theme}
      tooltips={{
        activity: {
          text: (activity) =>
            `${activity.level} activities on ${activity.date}`,
        },
      }}
      colorScheme="dark"
      showMonthLabels
      showWeekdayLabels={["mon", "sun"]}
    />
  );
}
