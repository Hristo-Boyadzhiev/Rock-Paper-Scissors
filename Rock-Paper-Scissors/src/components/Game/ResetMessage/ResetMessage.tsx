import React from "react";
import { useGameContext } from "../../../hooks/useGameContext";
import GameField from "../GameField/GameField";
import styles from "./ResetMessage.module.css";

export default function ResetMessage() {
  const { handleNewGame, handleReset } = useGameContext();
  const [showGameField, setShowGameField] = React.useState(true);

  function handleResetGame() {
    handleReset();
    setShowGameField(false);
  }

  function handleContinueGame() {
    handleNewGame();
    setShowGameField(false);
  }

  return (
    <>
      {showGameField ? (
        <article className={styles["reset-message"]}>
          <header className={styles["reset-message-header"]}>
            <h1>Do you want to start the game over?</h1>
            <h3>This option will reset the current score.</h3>
          </header>

          <div className={styles["buttons"]}>
            <button className={styles["button"]} onClick={handleResetGame}>
              yes
            </button>
            <button className={styles["button"]} onClick={handleContinueGame}>
              no
            </button>
          </div>
        </article>
      ) : (
        <GameField />
      )}
    </>
  );
}
