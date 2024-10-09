import { Choice } from "../types/Choice";
import { Winner } from "../types/Winner";

export default function getWinner(
  userChoice: Choice,
  computerChoice: Choice
): Winner {
  if (userChoice === computerChoice) {
    return "draw";
  }

  switch (userChoice) {
    case "rock":
      return computerChoice === "scissors" ? "user" : "computer";
    case "paper":
      return computerChoice === "rock" ? "user" : "computer";
    case "scissors":
      return computerChoice === "paper" ? "user" : "computer";
    default:
      throw new Error("Invalid user choice");
  }
}
