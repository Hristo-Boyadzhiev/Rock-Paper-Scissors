import "./App.css";
import RockPaperScissors from "./components/RockPaperScissors";
import { GameProvider } from "./contexts/GameContext";

export default function App() {
  return (
    <GameProvider>
      <RockPaperScissors />
    </GameProvider>
  );
}
