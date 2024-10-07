import { useGameContext } from "../../../hooks/useGameContext";
import styles from "./Winner.module.css";

export default function Winner() {
  const { winner, handleNewGame, handleReset } = useGameContext();

  return (
    <div className={styles["winner"]}>
      <h1 className={styles["header"]}>
        {winner === "draw"
          ? "draw"
          : winner === "user"
          ? "you win"
          : "you lose"}
      </h1>
      <div className={styles["buttons"]}>
        <button className={styles["button"]} onClick={handleNewGame}>
          new game
        </button>
        <button className={styles["button"]} onClick={handleReset}>
          reset
        </button>
      </div>
    </div>
  );
}
