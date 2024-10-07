import { Choice } from "../../../../types/Choice";
import styles from "./GetChoice.module.css";

export default function GetChoice(choice: Choice | "") {
  switch (choice) {
    case "rock":
      return (
        <div className={`${styles["circle"]} ${styles["rock"]}`}>
          <img src="./src/assets/icon-rock.svg" alt="rock" />
        </div>
      );

    case "paper":
      return (
        <div className={`${styles["circle"]} ${styles["paper"]}`}>
          <img src="./src/assets/icon-paper.svg" alt="paper" />
        </div>
      );

    case "scissors":
      return (
        <div className={`${styles["circle"]} ${styles["scissors"]}`}>
          <img src="./src/assets/icon-scissors.svg" alt="scissors" />
        </div>
      );
    case "":
      return (
        <div className={styles["empty"]}>
          <div className={styles["loader"]}></div>
        </div>
      );
  }
}