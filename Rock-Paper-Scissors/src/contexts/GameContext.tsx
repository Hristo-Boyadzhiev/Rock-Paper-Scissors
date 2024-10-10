import React, { createContext, ReactNode } from "react";
import { Choice } from "../types/Choice";
import { Winner } from "../types/Winner";
import getComputerChoice from "../utils/getComputerChoice";
import getWinner from "../utils/getWinner";

interface GameContextType {
  userChoice: Choice | null;
  computerChoice: Choice | null;
  winner: Winner | null;
  userScore: number;
  computerScore: number;
  showResetMessage: boolean;
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
  const [userScore, setUserScore] = React.useState(() => {
    const storedUserScore = localStorage.getItem("userScore");
    return storedUserScore ? Number(storedUserScore) : 0;
  });
  const [computerScore, setComputerScore] = React.useState(() => {
    const storedComputerScore = localStorage.getItem("computerScore");
    return storedComputerScore ? Number(storedComputerScore) : 0;
  });
  const [showResetMessage, setShowResetMessage] = React.useState(false);
  const [showRules, setShowRules] = React.useState(false);

  React.useEffect(() => {
    if (userScore !== 0 || computerScore !== 0) {
      setShowResetMessage(true);
    }
  }, []);

  React.useEffect(() => {
    if (userChoice && computerChoice) {
      const currentWinner = getWinner(userChoice, computerChoice);
      setWinner(currentWinner);

      if (currentWinner === "user") {
        const newUserScore = userScore + 1;
        localStorage.setItem("userScore", String(newUserScore));
        setUserScore(newUserScore);
      }

      if (currentWinner === "computer") {
        const newComputerScore = computerScore + 1;
        localStorage.setItem("computerScore", String(newComputerScore));
        setComputerScore(newComputerScore);
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
    setShowResetMessage(false);
  }

  function handleReset() {
    setUserChoice(null);
    setComputerChoice(null);
    setWinner(null);
    setUserScore(0);
    setComputerScore(0);
    setShowResetMessage(false);
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
        userScore,
        computerScore,
        showResetMessage,
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
