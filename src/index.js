import readlineSync from "readline-sync";
import { hello } from "./cli.js";

const ROUNDS_COUNT = 3;

export const startGame = (description, makeRound) => {
  const name = hello();
  console.log(description);

  for (let i = 1; i <= ROUNDS_COUNT; i += 1) {
    const [question, correctAnswer] = makeRound();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question("Your answer: ");

    if (userAnswer === String(correctAnswer)) {
      console.log("Correct!");
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};
