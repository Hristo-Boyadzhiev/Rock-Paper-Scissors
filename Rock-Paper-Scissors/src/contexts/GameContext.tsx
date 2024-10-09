import React, { createContext, ReactNode } from "react";
import { Choice } from "../types/Choice";
import { Winner } from "../types/Winner";
import getComputerChoice from "../utils/getComputerChoice";
import getWinner from "../utils/getWinner";

interface GameContextType {
  userChoice: Choice | "";
  computerChoice: Choice | "";
  winner: Winner | "";
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
  const [userChoice, setUserChoice] = React.useState<Choice | "">("");
  const [computerChoice, setComputerChoice] = React.useState<Choice | "">("");
  const [winner, setWinner] = React.useState<Winner | "">("");
  const [scoreUser, setScoreUser] = React.useState(0);
  const [scoreComputer, setScoreComputer] = React.useState(0);
  const [showRules, setShowRules] = React.useState(false);

  React.useEffect(() => {
    if (userChoice && computerChoice) {
      const currentWinner = getWinner(userChoice, computerChoice);
      setWinner(currentWinner);

      if (currentWinner === "user") {
        setScoreUser((prevScore) => prevScore + 1);
      }

      if (currentWinner === "computer") {
        setScoreComputer((prevScore) => prevScore + 1);
      }
    }
  }, [userChoice, computerChoice]);

  function handleChoice(choice: Choice) {
    setUserChoice(choice);
    const timer = setTimeout(() => {
      setTimeout(() => {
        setComputerChoice(getComputerChoice());
      }, 0);
    }, 3000);

    return () => clearTimeout(timer);
  }

  function handleNewGame() {
    setUserChoice("");
    setComputerChoice("");
    setWinner("");
  }

  function handleReset() {
    setUserChoice("");
    setComputerChoice("");
    setWinner("");
    setScoreUser(0);
    setScoreComputer(0);
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

// import React, { createContext, ReactNode } from "react";
// import { Choice } from "../types/Choice";
// import { Winner } from "../types/Winner";
// import getComputerChoice from "../utils/getComputerChoice";
// import getWinner from "../utils/getWinner";

// interface GameContextType {
//   userChoice: Choice | "";
//   computerChoice: Choice | "";
//   winner: Winner | "";
//   score: number;
//   showRules: boolean;
//   handleChoice: (choice: Choice) => void;
//   handleNewGame: () => void;
//   handleReset: () => void;
//   handleRules: () => void;
//   handleBack: () => void;
// }

// export const GameContext = createContext<GameContextType | undefined>(
//   undefined
// );

// export const GameProvider: React.FC<{ children: ReactNode }> = ({
//   children,
// }) => {
//   const [userChoice, setUserChoice] = React.useState<Choice | "">("");
//   const [computerChoice, setComputerChoice] = React.useState<Choice | "">("");
//   const [winner, setWinner] = React.useState<Winner | "">("");
//   const [score, setScore] = React.useState(0);
//   const [showRules, setShowRules] = React.useState(false);

//   React.useEffect(() => {
//     if (userChoice && computerChoice) {
//       const currentWinner = getWinner(userChoice, computerChoice);
//       setWinner(currentWinner);

//       if (currentWinner === "user") {
//         setScore((prevScore) => prevScore + 1);
//       }
//     }
//   }, [userChoice, computerChoice]);

//   function handleChoice(choice: Choice) {
//     setUserChoice(choice);
//     const timer = setTimeout(() => {
//       setTimeout(() => {
//         setComputerChoice(getComputerChoice());
//       }, 0);
//     }, 3000);

//     return () => clearTimeout(timer);
//   }

//   function handleNewGame() {
//     setUserChoice("");
//     setComputerChoice("");
//     setWinner("");
//   }

//   function handleReset() {
//     setUserChoice("");
//     setComputerChoice("");
//     setWinner("");
//     setScore(0);
//   }

//   function handleRules() {
//     setShowRules(true);
//   }

//   function handleBack() {
//     setShowRules(false);
//   }

//   return (
//     <GameContext.Provider
//       value={{
//         userChoice,
//         computerChoice,
//         winner,
//         score,
//         showRules,
//         handleChoice,
//         handleNewGame,
//         handleReset,
//         handleRules,
//         handleBack,
//       }}
//     >
//       {children}
//     </GameContext.Provider>
//   );
// };
