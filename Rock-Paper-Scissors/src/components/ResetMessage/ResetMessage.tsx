import { useGameContext } from "../../hooks/useGameContext";
import Message from "../Shared/Message/Message";

export default function ResetMessage() {
  const { handleNewGame, handleReset } = useGameContext();
  return (
    <Message
      title="Do you want to start the game over?"
      message="This option will reset the current score."
      leftButtonTitle="yes"
      rightButtonTitle="no"
      leftOnClick={handleReset}
      rightOnClick={handleNewGame}
    />
  );
}
