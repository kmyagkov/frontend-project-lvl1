import { createGame } from './create-game.js';
import { getRandomInt } from '../utils.js';

const MATH_OPERATIONS = [
  {
    sign: '+',
    func(a, b) {
      return a + b;
    },
  },
  {
    sign: '-',
    func(a, b) {
      return a - b;
    },
  },
  {
    sign: '*',
    func(a, b) {
      return a * b;
    },
  },
];

const questionsGenerator = () => {
  const firstNumber = getRandomInt();
  const secondNumber = getRandomInt();
  const operation = MATH_OPERATIONS[getRandomInt(0, MATH_OPERATIONS.length - 1)];

  const question = `${firstNumber} ${operation.sign} ${secondNumber}`;
  const correctAnswer = operation.func(firstNumber, secondNumber);

  return { question, correctAnswer };
};

const checkAnswer = (userAnswer, correctAnswer) => {
  return Number.isInteger(+userAnswer) && +correctAnswer === +userAnswer;
};

const gameConfig = {
  rules: 'What is the result of the expression?',
  questionsGenerator,
  checkAnswer,
};

export const gameCalc = () => {
  createGame(gameConfig);
};
