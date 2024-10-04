import React from "react";
import { GameContext } from "../contexts/GameContext";

export const useGameContext = () => {
  const context = React.useContext(GameContext);
  if (!context) {
    throw new Error("useGameContext must be used within a GameProvider");
  }
  return context;
};
