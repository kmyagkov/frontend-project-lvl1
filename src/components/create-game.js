import readlineSync from 'readline-sync';
import greeting from './greeting.js';

const printWinMessage = (userName) => {
  console.log(`Congratulations, ${userName}!`);
};

const printFailMessage = (userName, userAnswer, correctAnswer) => {
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${userName}!`);
};

export default ({
  lvlCount = 3,
  rules, questionsGenerator,
  checkAnswer,
}) => {
  const userName = greeting();

  console.log(rules);

  for (let lvl = 1; lvl <= lvlCount; lvl += 1) {
    const { question, correctAnswer } = questionsGenerator();

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (!checkAnswer(userAnswer, correctAnswer)) {
      printFailMessage(userName, userAnswer, correctAnswer);
      return;
    }

    console.log('Correct!');
  }

  printWinMessage(userName);
};
