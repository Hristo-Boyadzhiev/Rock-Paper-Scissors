import styles from "./Game.module.css";
import useGetChoice from "../../hooks/useGetChoice";
import { useGameContext } from "../../hooks/useGameContext";

export default function Game() {
  const { userChoice, computerChoice, winner, handleChoice, handleReset } =
    useGameContext();

  return (
    <article className={styles["game-area"]}>
      {winner === "" ? (
        <div className={styles["triangle-container"]}>
          <img src="./src/assets/bg-triangle.svg" alt="triangle" />
          <button
            className={`${styles["circle"]} ${styles["paper"]}`}
            onClick={() => handleChoice("paper")}
          >
            <img src="./src/assets/icon-paper.svg" alt="paper" />
          </button>
          <button
            className={`${styles["circle"]} ${styles["scissors"]}`}
            onClick={() => handleChoice("scissors")}
          >
            <img src="./src/assets/icon-scissors.svg" alt="scissors" />
          </button>
          <button
            className={`${styles["circle"]} ${styles["rock"]}`}
            onClick={() => handleChoice("rock")}
          >
            <img src="./src/assets/icon-rock.svg" alt="rock" />
          </button>
        </div>
      ) : (
        <div className={styles["game-info"]}>
          <h2 className={styles["header"]}>choices: </h2>
          <div className={styles["choice"]}>
            <p>your choice: {userChoice}</p>
            {useGetChoice(userChoice)}
          </div>
          <div className={styles["choice"]}>
            <p>computer choice: {computerChoice}</p>
            {useGetChoice(computerChoice)}
          </div>
          <p>winner: {winner}</p>
          <button className={styles["reset-button"]} onClick={handleReset}>
            reset
          </button>
        </div>
      )}
    </article>
  );
}
