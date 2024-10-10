import { useGameContext } from "../../../hooks/useGameContext";
import Message from "../../Shared/Message/Message";

export default function ResetMessage() {
  const { setShowResetMessage, handleNewGame, handleReset } = useGameContext();

  function handleResetGame() {
    handleReset();
    setShowResetMessage(false);
  }

  function handleContinueGame() {
    handleNewGame();
    setShowResetMessage(false);
  }

  return (
    <Message
      title="Do you want to start the game over?"
      message="This option will reset the current score."
      leftButtonTitle="yes"
      rightButtonTitle="no"
      leftOnClick={handleResetGame}
      rightOnClick={handleContinueGame}
    />
  );
}
