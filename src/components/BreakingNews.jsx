import { BreakingNewsClient } from "./BreakingNewsClient";

export async function BreakingNews() {
  let data = [];
  try {
    const apiKey = process.env.ANEESH_API_KEY;

    const response = await fetch(
      "https://api.aneeshpatne.com/api/v1/breaking-news",
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
      const raw = await response.json();
      data = Array.isArray(raw)
        ? raw.map((item) => ({
            title: item?.title ?? "",
            description: item?.description ?? "",
            sources: Array.isArray(item?.sources)
              ? item.sources.filter((entry) => typeof entry === "string")
              : [],
            genre: item?.genre ?? "",
            ogUrl: item?.ogUrl ?? "",
          }))
        : [];
    }
  } catch (err) {
    console.error("Error", err);
  }

  return data?.length > 0 && <BreakingNewsClient data={data} />;
}
