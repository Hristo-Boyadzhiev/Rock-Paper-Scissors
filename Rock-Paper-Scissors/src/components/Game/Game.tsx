import { useGameContext } from "../../hooks/useGameContext";
import GameField from "./GameField/GameField";
import Result from "./Result/Result";

export default function Game() {
  const { userChoice } = useGameContext();

  return userChoice === null ? <GameField /> : <Result />;
}
