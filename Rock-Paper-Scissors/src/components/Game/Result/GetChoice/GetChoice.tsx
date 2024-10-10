import { Choice } from "../../../../types/Choice";
import Circle from "../../../Shared/Circle";
import styles from "./GetChoice.module.css";

export default function GetChoice(choice: Choice | null) {
  switch (choice) {
    case "rock":
      return (
        <Circle
          componentType={"div"}
          className={`${styles["circle"]} ${styles["rock"]}`}
        >
          <img src="./src/assets/icon-rock.svg" alt="rock" />
        </Circle>
      );

    case "paper":
      return (
        <Circle
          componentType={"div"}
          className={`${styles["circle"]} ${styles["paper"]}`}
        >
          <img src="./src/assets/icon-paper.svg" alt="paper" />
        </Circle>
      );

    case "scissors":
      return (
        <Circle
          componentType={"div"}
          className={`${styles["circle"]} ${styles["scissors"]}`}
        >
          <img src="./src/assets/icon-scissors.svg" alt="scissors" />
        </Circle>
      );
    case null:
      return (
        <Circle componentType={"div"} className={styles["waiting"]}>
          <div className={styles["loader"]}></div>
        </Circle>
      );
    default:
      throw new Error("Invalid choice");
  }
}
