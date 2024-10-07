import styles from "./Rules.module.css";

export default function Rules() {
  return (
    <section className={styles["rules"]}>
      <div className={styles["image-container"]}>
        <img src="./src/assets/image-rules.svg" alt="scissors" />
      </div>
    </section>
  );
}
