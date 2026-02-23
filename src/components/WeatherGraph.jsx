import WeatherGraphClient from "./WeatherGraphClient";

export async function WeatherGraph() {
  const apiKey = process.env.ANEESH_API_KEY;
  let weatherData = null;
  try {
    const response = await fetch(
      "https://api.aneeshpatne.com/api/v1/weather-graph",
      {
        headers: {
          authorization: `Bearer ${apiKey}`,
        },
        next: {
          revalidate: 3600,
        },
      },
    );

    if (response.ok) {
      weatherData = await response.json();
      console.log(weatherData);
    }
  } catch (error) {
    console.error("Failed to fetch weather data:", error);
  }
  return (
    <>
      {weatherData && <WeatherGraphClient data={na} />}
    </>
  );
}
