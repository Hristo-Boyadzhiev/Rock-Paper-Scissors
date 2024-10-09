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
    <div className={styles["game-info"]}>
      <div className={styles["choices"]}>
        <div className={styles["choice"]}>
          <p className={styles["you-picked"]}>
            <span>you </span>
            <span>picked</span>
          </p>
          {GetChoice(userChoice)}
        </div>

        {!isSmallScreen && showWinner && <Winner />}
        <div className={styles["choice"]}>
          <p className={styles["computer-picked"]}>
            <span>computer </span>
            <span>picked</span>
          </p>
          {showComputerChoice ? GetChoice(computerChoice) : GetChoice("")}
        </div>
      </div>
      {isSmallScreen && showWinner && <Winner />}
    </div>
  );
}
