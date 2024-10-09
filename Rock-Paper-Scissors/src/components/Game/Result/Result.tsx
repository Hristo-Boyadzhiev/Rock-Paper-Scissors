import React from "react";
import { useGameContext } from "../../../hooks/useGameContext";
import styles from "./Result.module.css";
import GetChoice from "./GetChoice/GetChoice";
import Winner from "../Winner/Winner";
import useIsSmallScreen from "../../../hooks/useIsSmallScreen";

export default function Result() {
  const [showComputerChoice, setShowComputerChoice] = React.useState(false);
  const [showWinner, setShowWinner] = React.useState(false);

  const { userChoice, computerChoice } = useGameContext();
  const isSmallScreen = useIsSmallScreen("(max-width: 1024px)");

  React.useEffect(() => {
    if (computerChoice) {
      setShowComputerChoice(true);
      setShowWinner(true);
    }
  }, [computerChoice]);

  return (
    <section className={styles["game-info"]}>
      <section className={styles["choices"]}>
        <article className={styles["choice"]}>
          <p className={styles["you-picked"]}>
            <span>you </span>
            <span>picked</span>
          </p>
          {GetChoice(userChoice)}
        </article>

        {!isSmallScreen && showWinner && <Winner />}
        <article className={styles["choice"]}>
          <p className={styles["computer-picked"]}>
            <span>computer </span>
            <span>picked</span>
          </p>
          {showComputerChoice ? GetChoice(computerChoice) : GetChoice(null)}
        </article>
      </section>
      {isSmallScreen && showWinner && <Winner />}
    </section>
  );
}
