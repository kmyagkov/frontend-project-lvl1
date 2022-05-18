import readlineSync from 'readline-sync';
import { getRandomInt, isEven } from '../utils.js';
import { greeting } from './greeting.js';

const POSITIVE_ANSWER = 'yes';
const NEGATIVE_ANSWER = 'no';
const VALID_ANSWERS = [POSITIVE_ANSWER, NEGATIVE_ANSWER];

const printFailMessage = (userName, userAnswer, correctAnswer) => {
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${userName}!`);
};

const printWinMessage = (userName) => {
  console.log(`Congratulations, ${userName}!`);
};

export const gameEven = (lvlCount = 3) => {
  const userName = greeting();

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let lvl = 1; lvl <= lvlCount; lvl += 1) {
    const questionNumber = getRandomInt();
    const correctAnswer = isEven(questionNumber) ? POSITIVE_ANSWER : NEGATIVE_ANSWER;

    console.log(`Question: ${questionNumber}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (!VALID_ANSWERS.includes(userAnswer) || correctAnswer !== userAnswer) {
      printFailMessage(userName, userAnswer, correctAnswer);
      return;
    }

    console.log('Correct!');
  }

  printWinMessage(userName);
};
