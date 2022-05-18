import { createGame } from './create-game.js';
import { getRandomInt, isEven } from '../utils.js';

const POSITIVE_ANSWER = 'yes';
const NEGATIVE_ANSWER = 'no';
const VALID_ANSWERS = [POSITIVE_ANSWER, NEGATIVE_ANSWER];

const questionsGenerator = () => {
  const question = getRandomInt();
  const correctAnswer = isEven(question) ? POSITIVE_ANSWER : NEGATIVE_ANSWER;

  return { question, correctAnswer };
};

const checkAnswer = (userAnswer, correctAnswer) => {
  return VALID_ANSWERS.includes(userAnswer) && correctAnswer === userAnswer;
};

const gameConfig = {
  rules: 'Answer "yes" if the number is even, otherwise answer "no".',
  questionsGenerator,
  checkAnswer,
};

export const gameEven = () => {
  createGame(gameConfig);
};
