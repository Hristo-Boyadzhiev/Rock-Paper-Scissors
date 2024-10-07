import styles from "./Game.module.css";
import { useGameContext } from "../../hooks/useGameContext";
import GameField from "./GameField/GameField";
import Result from "./Result/Result";

export default function Game() {
  const { userChoice } = useGameContext();

  return (
    <main className={styles["container"]}>
      {userChoice === "" ? <GameField /> : <Result />}
    </main>
  );
}
