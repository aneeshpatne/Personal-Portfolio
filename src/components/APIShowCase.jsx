import { PM25 } from "./PM25";
import styles from "./style/APIShowCase.module.css";

export function APIShowCase() {
  return (
    <PM25 value={75} alert-color={"red"} remark={"Hazardous Air Quality"} />
  );
}
