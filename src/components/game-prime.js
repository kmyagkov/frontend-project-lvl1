import { createGame } from './create-game.js';
import { getRandomInt } from '../utils.js';

const POSITIVE_ANSWER = 'yes';
const NEGATIVE_ANSWER = 'no';
const VALID_ANSWERS = [POSITIVE_ANSWER, NEGATIVE_ANSWER];

const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) return false;
  }

  return num > 1;
};

const questionsGenerator = () => {
  const question = getRandomInt(1, 100);
  const correctAnswer = isPrime(question) ? POSITIVE_ANSWER : NEGATIVE_ANSWER;

  return { question, correctAnswer };
};

const checkAnswer = (userAnswer, correctAnswer) => {
  return VALID_ANSWERS.includes(userAnswer) && correctAnswer === userAnswer;
};

const gameConfig = {
  rules: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  questionsGenerator,
  checkAnswer,
};

export const gamePrime = () => {
  createGame(gameConfig);
};
