import styles from "./RockPaperScissors.module.css";

export default function RockPaperScissors() {
  return (
    <main className={styles["main-container"]}>
      <section className={styles["result-logo-game-area-container"]}>
        <article className={styles["result-and-logo-container"]}>
          <header>
            <img src="./src/assets/logo.svg" alt="game-logo" />
          </header>
          <div className={styles["score-container"]}>
            <p>Score</p>
            <p className={styles["result"]}>11</p>
          </div>
        </article>

        <article className={styles["game-area"]}>
          <div className={styles["triangle-container"]}>
            <img src="./src/assets/bg-triangle.svg" alt="triangle" />
            <div className={`${styles["circle"]} ${styles["paper"]}`}>
              <img src="./src/assets/icon-paper.svg" alt="paper" />
            </div>
            <div className={`${styles["circle"]} ${styles["scissors"]}`}>
              <img src="./src/assets/icon-scissors.svg" alt="scissors" />
            </div>
            <div className={`${styles["circle"]} ${styles["rock"]}`}>
              <img src="./src/assets/icon-rock.svg" alt="rock" />
            </div>
          </div>
        </article>
      </section>

      <section></section>
    </main>
  );
}
