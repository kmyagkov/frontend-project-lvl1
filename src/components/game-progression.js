import { createGame } from './create-game.js';
import { getRandomInt } from '../utils.js';

const getProgression = (firstEl, step, count) => {
  const progression = [firstEl];
  let i = 2;

  while (i <= count) {
    progression.push(progression.slice().pop() + step);
    i += 1;
  }

  return progression;
};

const hideRandomEl = (arr) => {
  const index = getRandomInt(0, arr.length - 1);
  const el = arr[index];

  arr[index] = '..';
  return el;
};

const questionsGenerator = () => {
  const firstEl = getRandomInt();
  const step = getRandomInt(1, 10);
  const count = getRandomInt(5, 10);
  const progression = getProgression(firstEl, step, count);
  const hiddenEl = hideRandomEl(progression);

  const question = progression.join(' ');
  const correctAnswer = hiddenEl;

  return { question, correctAnswer };
};

const checkAnswer = (userAnswer, correctAnswer) => {
  return Number.isInteger(+userAnswer) && +correctAnswer === +userAnswer;
};

const gameConfig = {
  rules: 'What number is missing in the progression?',
  questionsGenerator,
  checkAnswer,
};

export const gameProgression = () => {
  createGame(gameConfig);
};
