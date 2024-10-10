import { useGameContext } from "../hooks/useGameContext";
import Footer from "./Footer/Footer";
import Game from "./Game/Game";
import Header from "./Header/Header";
import styles from "./RockPaperScissors.module.css";
import Rules from "./Rules/Rules";
import ResetMessage from "./ResetMessage/ResetMessage";

export default function RockPaperScissors() {
  const { showResetMessage, showRules, handleRules, handleBack } =
    useGameContext();

  return (
    <div className={styles["container"]}>
      <Header />
      <main
        className={`${styles["main-container"]} ${
          showRules ? styles["show-rules"] : ""
        }`}
      >
        {showResetMessage ? <ResetMessage /> : showRules ? <Rules /> : <Game />}
      </main>
      {!showResetMessage && (
        <section>
          {showRules ? (
            <button className={styles["rules"]} onClick={handleBack}>
              back
            </button>
          ) : (
            <button className={styles["rules"]} onClick={handleRules}>
              rules
            </button>
          )}
        </section>
      )}
      <Footer />
    </div>
  );
}
