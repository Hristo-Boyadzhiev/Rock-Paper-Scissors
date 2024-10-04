import styles from "./Game.module.css";

export default function Game() {
  return (
    <article className={styles["game-area"]}>
      <div className={styles["triangle-container"]}>
        <img src="./src/assets/bg-triangle.svg" alt="triangle" />
        <button className={`${styles["circle"]} ${styles["paper"]}`}>
          <img src="./src/assets/icon-paper.svg" alt="paper" />
        </button>
        <button className={`${styles["circle"]} ${styles["scissors"]}`}>
          <img src="./src/assets/icon-scissors.svg" alt="scissors" />
        </button>
        <button className={`${styles["circle"]} ${styles["rock"]}`}>
          <img src="./src/assets/icon-rock.svg" alt="rock" />
        </button>
      </div>
    </article>
  );
}
