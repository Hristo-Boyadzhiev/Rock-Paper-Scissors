import React from "react";
import { useGameContext } from "../hooks/useGameContext";
import Footer from "./Footer/Footer";
import Game from "./Game/Game";
import Header from "./Header/Header";
import styles from "./RockPaperScissors.module.css";
import Rules from "./Rules/Rules";
import ResetMessage from "./Game/ResetMessage/ResetMessage";

export default function RockPaperScissors() {
  const [showResetMessage, setShowResetMessage] = React.useState(false);
  const { showRules, handleRules, handleBack } = useGameContext();

  React.useEffect(() => {
    const userScore = Number(localStorage.getItem("userScore"));
    const computerScore = Number(localStorage.getItem("computerScore"));

    if (userScore !== 0 || computerScore !== 0) {
      setShowResetMessage(true);
    }
  }, []);

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
      <Footer />
    </div>
  );
}
