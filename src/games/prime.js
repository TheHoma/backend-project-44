import { startGame } from "../index.js";

const MIN_PRIME = 2;
const FIRST_ODD = 3;
const ODD_STEP = 2;

const isPrime = (num) => {
  if (num < MIN_PRIME) {
    return false;
  }

  if (num === MIN_PRIME) {
    return true;
  }

  if (num % 2 === 0) {
    return false;
  }

  for (let i = FIRST_ODD; i * i <= num; i += ODD_STEP) {
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
