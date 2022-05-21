import { createGame } from './create-game.js';
import { getRandomInt } from '../utils.js';

const getNOD = (x, y) => {
  if (y > x) {
    return getNOD(y, x);
  }

  if (!y) return x;

  return getNOD(y, x % y);
};

const questionsGenerator = () => {
  const firstNumber = getRandomInt();
  const secondNumber = getRandomInt();

  const question = `${firstNumber} ${secondNumber}`;
  const correctAnswer = getNOD(firstNumber, secondNumber);

  return { question, correctAnswer };
};

const checkAnswer = (userAnswer, correctAnswer) => {
  return Number.isInteger(+userAnswer) && +correctAnswer === +userAnswer;
};

const gameConfig = {
  rules: 'Find the greatest common divisor of given numbers.',
  questionsGenerator,
  checkAnswer,
};

export const gameGCD = () => {
  createGame(gameConfig);
};
