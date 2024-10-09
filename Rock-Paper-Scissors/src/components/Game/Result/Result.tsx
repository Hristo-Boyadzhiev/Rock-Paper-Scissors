import React from "react";
import { useGameContext } from "../../../hooks/useGameContext";
import styles from "./Result.module.css";
import GetChoice from "./GetChoice/GetChoice";
import Winner from "../Winner/Winner";
import useIsSmallScreen from "../../../hooks/useIsSmallScreen";

export default function Result() {
  const [showComputerChoice, setShowComputerChoice] = React.useState(false);
  const [showWinnerDesktop, setShowWinnerDesktop] = React.useState(false);
  const [showWinnerMobile, setShowWinnerMobile] = React.useState(false);

  const { userChoice, computerChoice } = useGameContext();
  const isSmallScreen = useIsSmallScreen();

  console.log(isSmallScreen);

  React.useEffect(() => {
    if (computerChoice) {
      setShowComputerChoice(true);

      if (isSmallScreen) {
        setShowWinnerMobile(true);
      } else {
        setShowWinnerDesktop(true);
      }
    }
  }, [computerChoice]);

  return (
    <div className={styles["game-info"]}>
      <div className={styles["choice"]}>
        <p className={styles["you-picked"]}>
          <span>you </span>
          <span>picked</span>
        </p>
        {GetChoice(userChoice)}
      </div>

      {showWinnerDesktop && <Winner />}
      <div className={styles["choice"]}>
        <p className={styles["computer-picked"]}>
          <span>computer </span>
          <span>picked</span>
        </p>
        {showComputerChoice ? GetChoice(computerChoice) : GetChoice("")}
      </div>

      {showWinnerMobile && <Winner />}
    </div>
  );
}
