import { Choice } from "../types/Choice";

const computerOptions: Choice[] = ["rock", "paper", "scissors"];

export default function getComputerChoice(): Choice {
  const randomComputerChoice = computerOptions[Math.floor(Math.random() * 3)];
  return randomComputerChoice;
}
