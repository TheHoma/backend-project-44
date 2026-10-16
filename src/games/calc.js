import { startGame } from "../index.js";

const description = "What is the result of the expression?";

export const makeRound = () => {
  const number1 = Math.floor(Math.random() * 10) + 1;
  const number2 = Math.floor(Math.random() * 10) + 1;

  const signs = ["+", "-", "*"];
  const randomIndex = Math.floor(Math.random() * signs.length);
  const randomSign = signs[randomIndex];

  const question = `${number1} ${randomSign} ${number2}`;

  let correctAnswer;

  switch (randomSign) {
    case "+":
      correctAnswer = number1 + number2;
      break;
    case "-":
      correctAnswer = number1 - number2;
      break;
    case "*":
      correctAnswer = number1 * number2;
      break;
  }

  return [question, correctAnswer];
};

export const calc = () => {
  startGame(description, makeRound);
};
