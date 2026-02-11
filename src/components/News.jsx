import { NewsClient } from "./NewsClient";

export async function News({
  title = "AI Model Breaks New Ground",
  description = "The latest generative model demonstrates unprecedented reasoning capabilities in complex physics simulations.",
  fallback,
} = {}) {
  let fetchedData = null;

  const fallbackTitle = fallback?.title ?? title;
  const fallbackDesc = fallback?.description ?? description;
  let data = null;
  try {
    const apiKey = process.env.ANEESH_API_KEY;

    const response = await fetch(
      "https://api.aneeshpatne.com/api/v1/news_data",
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
      data = await response.json();
    }
    fetchedData = null;
  } catch (err) {
    console.error("Error", err);
    fetchedData = null;
  }

  return (
    <NewsClient
      data={data}
      title={fetchedData?.title ?? fallbackTitle}
      description={fetchedData?.description ?? fallbackDesc}
      source={fetchedData?.source}
      genre={fetchedData?.genre}
    />
  );
}
