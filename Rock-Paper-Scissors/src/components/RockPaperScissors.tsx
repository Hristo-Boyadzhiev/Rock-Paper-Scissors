import { useGameContext } from "../hooks/useGameContext";
import Footer from "./Footer/Footer";
import Game from "./Game/Game";
import Header from "./Header/Header";
import styles from "./RockPaperScissors.module.css";
import Rules from "./Rules/Rules";

export default function RockPaperScissors() {
  const { showRules, handleRules, handleBack } = useGameContext();

  return (
    <div className={styles["container"]}>
      <Header />
      <main
        className={`${styles["main-container"]} ${
          showRules ? styles["show-rules"] : ""
        }`}
      >
        {showRules ? <Rules /> : <Game />}
      </main>

      {showRules ? (
        <button className={styles["rules"]} onClick={handleBack}>
          back
        </button>
      ) : (
        <button className={styles["rules"]} onClick={handleRules}>
          rules
        </button>
      )}
      {/* <Footer /> */}
    </div>
  );
}
