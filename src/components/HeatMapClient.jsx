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
    light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
    dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
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
