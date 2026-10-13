import readlineSync from "readline-sync";
import hello from "../cli.js";

const isEven = (number) => number % 2 === 0;

export default () => {
  const name = hello();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 1; i <= 3; i += 1) {
    const number = Math.floor(Math.random() * 10) + 1;
    const evenNumber = isEven(number);

    let correctAnswer;

    if (evenNumber) {
      correctAnswer = "yes";
    } else {
      correctAnswer = "no";
    }

    console.log(`Question: ${number}`);
    const answer = readlineSync.question("Your answer: ");

    if (answer === correctAnswer) {
      console.log("Correct!");
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};
