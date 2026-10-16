import { startGame } from "../index.js";

const isEven = (number) => number % 2 === 0;

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

export const makeRound = () => {
  const number = Math.floor(Math.random() * 10) + 1;
  const even = isEven(number);

  let correctAnswer;

  if (even) {
    correctAnswer = "yes";
  } else {
    correctAnswer = "no";
  }

  return [number, correctAnswer];
};

export const even = () => {
  startGame(description, makeRound);
};
