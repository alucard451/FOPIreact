import styles from "../../../css/elements/progressbar.module.css";
export function ProgressBar() {
  return (
    <div class={styles.progressBarContainer}>
      <span class={styles.progressBarMarker} ></span>

      <span class={styles.progressBarCompleted} ></span>
    </div>
  );
}
