import StatusClient from "./StatusClient";

export async function Status() {
  let raw = null;
  try {
    const apiKey = process.env.ANEESH_API_KEY;

    const response = await fetch("https://api.aneeshpatne.com/api/v1/status", {
      headers: {
        authorization: `Bearer ${apiKey}`,
      },
      next: {
        revalidate: 3600,
      },
    });
    if (response.ok) {
      raw = await response.json();
    }
  } catch (err) {
    console.error("Error", err);
  }

  return <StatusClient timestamp={raw?.last_updated} />;
}
