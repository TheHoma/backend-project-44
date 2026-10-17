import { startGame } from "../index.js";

const brainGcd = (a, b) => {
  a = Math.abs(a);
  b = Math.abs(b);

  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }

  return a;
};

const description = "Find the greatest common divisor of given numbers.";

export const makeRound = () => {
  const number1 = Math.floor(Math.random() * 100) + 1;
  const number2 = Math.floor(Math.random() * 100) + 1;

  const question = `${number1} ${number2}`;

  const correctAnswer = brainGcd(number1, number2);

  return [question, correctAnswer];
};

export const gcd = () => {
  startGame(description, makeRound);
};
