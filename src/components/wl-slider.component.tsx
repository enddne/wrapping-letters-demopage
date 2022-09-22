import styles from "@styles/wl-slider.module.scss";

export function WlSlider() {
  return (
    <div className={styles["container"]}>
      <div className={styles["container--slider"]}>
        <span>wrapping letters </span>
        <span>wrapping letters</span>
      </div>
    </div>
  );
}
