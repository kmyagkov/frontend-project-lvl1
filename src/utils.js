const isEven = (num) => num % 2 === 0;

const getRandomInt = (min = 1, max = 999) => Math.floor(Math.random() * (max - min) + min);
export {
  isEven,
  getRandomInt,
};
