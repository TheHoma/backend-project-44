import { startGame } from "../index.js";

const sequence = (start, index, step) => start + index * step;

const description = "What number is missing in the progression?";

export const makeRound = () => {
  let array = [];

  const length = Math.floor(Math.random() * 6) + 5;

  const start = Math.floor(Math.random() * 20) + 1;
  const step = Math.floor(Math.random() * 10) + 1;
  const hiddenIndex = Math.floor(Math.random() * length);

  let correctAnswer;

  for (let i = 0; i < length; i += 1) {
    let item = sequence(start, i, step);

    if (i === hiddenIndex) {
      array.push("..");
      correctAnswer = item;
    } else {
      array.push(item);
    }
  }

  const question = array.join(" ");

  return [question, correctAnswer];
};

export const progression = () => {
  startGame(description, makeRound);
};
