import { PM25Client } from "./PM25Client";

export async function PM25({
  value = 75,
  remark = "Hazardous Air Quality",
  alertColor = "red",
  fallback,
} = {}) {
  const apiKey = process.env.ANEESH_API_KEY;
  let fetchedData = null;
  const fallbackValue = fallback?.value ?? value;
  const fallbackRemark = fallback?.remark ?? remark;
  const fallbackAlertColor = fallback?.alertColor ?? alertColor;

  try {
    const response = await fetch("https://api.aneeshpatne.com/api/v1/pm25", {
      headers: {
        authorization: `Bearer ${apiKey}`,
      },
      next: {
        revalidate: 86400,
      },
    });

    if (response.ok) {
      fetchedData = await response.json();
    }
  } catch {
    fetchedData = null;
  }

  return (
    <PM25Client
      value={fetchedData?.value ?? fallbackValue}
      remark={fetchedData?.remark ?? fallbackRemark}
      alertColor={fetchedData?.alert_color ?? fallbackAlertColor}
    />
  );
}
