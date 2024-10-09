import { useGameContext } from "../../hooks/useGameContext";
import styles from "./Header.module.css";

export default function Header() {
  const { scoreUser, scoreComputer } = useGameContext();
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
        <div className={styles["result"]}>
          <div>
            <p>You</p>
            <p>{scoreUser}</p>
          </div>
          <div>
            <p>Computer</p>
            <p>{scoreComputer}</p>
          </div>
        </div>
      </div>
    </header>
  );
}
