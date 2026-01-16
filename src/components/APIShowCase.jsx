import { PM25 } from "./PM25";
import styles from "./style/APIShowCase.module.css";

export function APIShowCase() {
  return <PM25 value={75} remark={"Hazardous Air Quality"} />;
}
