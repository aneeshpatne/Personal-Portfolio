import { PM25Client } from "./PM25Client";

export async function PM25({
  value = 75,
  remark = "Hazardous Air Quality",
  alertColor = "red",
} = {}) {
  const apiKey = process.env.ANEESH_API_KEY;
  let fetchedData = null;
  try {
    const response = await fetch("https://api.aneeshpatne.com/api/v1/pm25", {
      headers: {
        authorization: `Bearer ${apiKey}`,
      },
      next: {
        revalidate: 3600,
      },
    });

    if (response.ok) {
      fetchedData = await response.json();
      fetchedData.value = Number(fetchedData?.value?.toFixed(2));
    }
  } catch {
    fetchedData = null;
  }

  return (
    <PM25Client
      value={fetchedData?.value ?? value}
      remark={fetchedData?.remark ?? remark}
      alertColor={fetchedData?.alert_color ?? alertColor}
    />
  );
}
