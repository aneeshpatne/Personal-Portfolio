import { PM25Client } from "./PM25Client";

export function PM25({
  value = 75,
  remark = "Hazardous Air Quality",
  alertColor = "red",
}) {
  return <PM25Client value={value} remark={remark} alertColor={alertColor} />;
}
