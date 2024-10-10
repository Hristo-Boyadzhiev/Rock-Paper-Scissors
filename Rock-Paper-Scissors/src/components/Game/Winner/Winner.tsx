import { useGameContext } from "../../../hooks/useGameContext";
import Message from "../../Shared/Message/Message";
import styles from "./Winner.module.css";

export default function Winner() {
  const { winner, handleNewGame, handleReset } = useGameContext();

  return (
    <Message
      title={
        winner === "draw" ? "draw" : winner === "user" ? "you win" : "you lose"
      }
      headerClass={styles["winner-header"]}
      leftButtonTitle="new game"
      rightButtonTitle="reset"
      leftOnClick={handleNewGame}
      rightOnClick={handleReset}
    />
  );
}
