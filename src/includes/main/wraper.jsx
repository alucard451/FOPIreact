import { Description } from "./sections/description";
import { LatestNews } from "./sections/latest-news";
import styles from "../../css/main/wraper.module.css"
export function Wraper() {
  return (
    <div className={styles.wrapper}>
      <Description />
      <LatestNews />
    </div>
  );
}
