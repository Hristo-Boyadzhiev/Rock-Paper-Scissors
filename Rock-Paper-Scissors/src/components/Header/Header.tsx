import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles["logo-and-result-container"]}>
      <div>
        <img src="./src/assets/logo.svg" alt="game-logo" />
      </div>
      <div className={styles["score-container"]}>
        <p>Score</p>
        <p className={styles["result"]}>11</p>
      </div>
    </header>
  );
}
