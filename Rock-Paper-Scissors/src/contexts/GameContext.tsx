import React, { createContext, ReactNode } from "react";
import { Choice } from "../types/Choice";
import { Winner } from "../types/Winner";
import getComputerChoice from "../utils/getComputerChoice";
import getWinner from "../utils/getWinner";

interface GameContextType {
  userChoice: Choice | null;
  computerChoice: Choice | null;
  winner: Winner | null;
  scoreUser: number;
  scoreComputer: number;
  showRules: boolean;
  handleChoice: (choice: Choice) => void;
  handleNewGame: () => void;
  handleReset: () => void;
  handleRules: () => void;
  handleBack: () => void;
}

export const GameContext = createContext<GameContextType | undefined>(
  undefined
);

export const GameProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [userChoice, setUserChoice] = React.useState<Choice | null>(null);
  const [computerChoice, setComputerChoice] = React.useState<Choice | null>(
    null
  );
  const [winner, setWinner] = React.useState<Winner | null>(null);
  const [scoreUser, setScoreUser] = React.useState(() => {
    const storedUserScore = localStorage.getItem("userScore");
    return storedUserScore ? Number(storedUserScore) : 0;
  });
  const [scoreComputer, setScoreComputer] = React.useState(() => {
    const storedComputerScore = localStorage.getItem("computerScore");
    return storedComputerScore ? Number(storedComputerScore) : 0;
  });
  const [showRules, setShowRules] = React.useState(false);

  React.useEffect(() => {
    if (userChoice && computerChoice) {
      const currentWinner = getWinner(userChoice, computerChoice);
      setWinner(currentWinner);

      if (currentWinner === "user") {
        const newScoreUser = scoreUser + 1;
        localStorage.setItem("userScore", String(newScoreUser));
        setScoreUser(newScoreUser);
      }

      if (currentWinner === "computer") {
        const newScoreComputer = scoreComputer + 1;
        localStorage.setItem("computerScore", String(newScoreComputer));
        setScoreComputer(newScoreComputer);
      }
    }
  }, [userChoice, computerChoice]);

  function handleChoice(choice: Choice) {
    setUserChoice(choice);
    const timer = setTimeout(() => {
      setComputerChoice(getComputerChoice());
    }, 1500);

    return () => clearTimeout(timer);
  }

  function handleNewGame() {
    setUserChoice(null);
    setComputerChoice(null);
    setWinner(null);
  }

  function handleReset() {
    setUserChoice(null);
    setComputerChoice(null);
    setWinner(null);
    setScoreUser(0);
    setScoreComputer(0);
    localStorage.clear();
  }

  function handleRules() {
    setShowRules(true);
  }

  function handleBack() {
    setShowRules(false);
  }

  return (
    <GameContext.Provider
      value={{
        userChoice,
        computerChoice,
        winner,
        scoreUser,
        scoreComputer,
        showRules,
        handleChoice,
        handleNewGame,
        handleReset,
        handleRules,
        handleBack,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
