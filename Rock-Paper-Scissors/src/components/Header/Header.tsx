import { useGameContext } from "../../hooks/useGameContext";
import styles from "./Header.module.css";

export default function Header() {
  const { userScore, computerScore } = useGameContext();
  return (
    <header className={styles["logo-and-result-container"]}>
      <section className={styles["img-container"]}>
        <img src="./src/assets/logo.svg" alt="game-logo" />
      </section>
      <section className={styles["score-container"]}>
        <article>
          <p>Score</p>
        </article>
        <article className={styles["result"]}>
          <div>
            <p>You</p>
            <p>{userScore}</p>
          </div>
          <div>
            <p>Computer</p>
            <p>{computerScore}</p>
          </div>
        </article>
      </section>
    </header>
  );
}
