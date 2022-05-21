import createGame from './create-game.js';
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

  return [el, [...arr.slice(0, index), '..', ...arr.slice(index + 1)]];
};

const questionsGenerator = () => {
  const firstEl = getRandomInt();
  const step = getRandomInt(1, 10);
  const count = getRandomInt(5, 10);
  const progression = getProgression(firstEl, step, count);
  const [hiddenEl, progressionHidden] = hideRandomEl(progression);

  const question = progressionHidden.join(' ');
  const correctAnswer = hiddenEl;

  return { question, correctAnswer };
};

const checkAnswer = (user, valid) => Number.isInteger(+user) && +valid === +user;

const gameConfig = {
  rules: 'What number is missing in the progression?',
  questionsGenerator,
  checkAnswer,
};

export default () => {
  createGame(gameConfig);
};
