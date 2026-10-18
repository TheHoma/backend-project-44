import { startGame } from "../index.js";

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  if (num === 2) {
    return true;
  }

  if (num % 2 === 0) {
    return false;
  }

  for (let i = 3; i * i <= num; i += 2) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const makeRound = () => {
  const number = Math.floor(Math.random() * 100) + 1;

  const prime = isPrime(number);

  let correctAnswer;

  if (prime) {
    correctAnswer = "yes";
  } else {
    correctAnswer = "no";
  }

  return [number, correctAnswer];
};

export const prime = () => {
  startGame(description, makeRound);
};
