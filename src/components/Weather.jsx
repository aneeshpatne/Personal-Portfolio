import { Fira_Code } from "next/font/google";
import { WeatherClient } from "./WeatherClient";

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export async function Weather() {
  const apiKey = process.env.ANEESH_API_KEY;
  let weatherData = null;

  try {
    const response = await fetch("https://api.aneeshpatne.com/api/v1/weather", {
      headers: {
        authorization: `Bearer ${apiKey}`,
      },
      next: {
        revalidate: 3600,
      },
    });

    if (response.ok) {
      weatherData = await response.json();
    }
  } catch (error) {
    console.error("Failed to fetch weather data:", error);
  }

  const { temp, humidity, pressure } = weatherData || {};

  return (
    <WeatherClient
      temp={temp}
      humidity={humidity}
      pressure={pressure}
      fontClassName={firaCode.className}
    />
  );
}

