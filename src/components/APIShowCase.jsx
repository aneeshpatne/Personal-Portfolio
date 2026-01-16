import { PM25 } from "./PM25";
import styles from "./style/APIShowCase.module.css";

export async function APIShowCase() {
  const apiKey = process.env.ANEESH_API_KEY;

  const response = await fetch("https://api.aneeshpatne.com/api/v1/pm25", {
    headers: {
      authorization: `Bearer ${apiKey}`,
    },
    next: {
      revalidate: 86400,
    },
  });

  const fetchedData = await response.json();

  return (
    <PM25
      value={fetchedData?.value}
      alertColor={fetchedData?.alert_color}
      remark={fetchedData?.remark}
    />
  );
}
