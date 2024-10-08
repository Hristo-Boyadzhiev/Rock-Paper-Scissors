import { useGameContext } from "../../hooks/useGameContext";
import styles from "./Header.module.css";

export default function Header() {
  const { score } = useGameContext();
  return (
    <header className={styles["logo-and-result-container"]}>
      <div className={styles["img-container"]}>
        <img
          src="./src/assets/logo.svg"
          alt="game-logo"
          className={styles["proba"]}
        />
      </div>
      <div className={styles["score-container"]}>
        <p>Score</p>
        <p className={styles["result"]}>{score}</p>
      </div>
    </header>
  );
}
