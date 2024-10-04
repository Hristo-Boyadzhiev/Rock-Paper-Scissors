import React, { createContext, ReactNode, useState } from "react";
import { Choice } from "../types/Choice";
import { Winner } from "../types/Winner";
import getComputerChoice from "../utils/getComputerChoice";
import getWinner from "../utils/getWinner";

interface GameContextType {
  userChoice: Choice | "";
  computerChoice: Choice | "";
  winner: Winner | "";
  handleChoice: (choice: Choice) => void;
  handleReset: () => void;
}

export const GameContext = createContext<GameContextType | undefined>(
  undefined
);

export const GameProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [userChoice, setUserChoice] = useState<Choice | "">("");
  const [computerChoice, setComputerChoice] = useState<Choice | "">("");
  const [winner, setWinner] = useState<Winner | "">("");

  function handleChoice(choice: Choice) {
    setUserChoice(choice);
    setComputerChoice(getComputerChoice());
  }

  function handleReset() {
    setUserChoice("");
    setComputerChoice("");
    setWinner("");
  }

  React.useEffect(() => {
    if (userChoice && computerChoice) {
      setWinner(getWinner(userChoice, computerChoice));
    }
  }, [userChoice, computerChoice]);

  return (
    <GameContext.Provider
      value={{
        userChoice,
        computerChoice,
        winner,
        handleChoice,
        handleReset,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
