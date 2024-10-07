import { useGameContext } from "../../../hooks/useGameContext";
import styles from "./GameField.module.css";

export default function GameField() {
  const { handleChoice } = useGameContext();
  return (
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
  );
}
