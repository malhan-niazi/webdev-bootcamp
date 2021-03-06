// ********************************************
// forEach
const numbers = [1, 2, 3, 4, 5, 6];
numbers.forEach((num) => console.log(num));

const movies = [
  {
    title: 'bladerunner',
    score: 90,
  },
  {
    title: 'lord of the rings',
    score: 98,
  },
  {
    title: 'harry potter',
    score: 85,
  },
];

movies.forEach(function (movie) {
  console.log(`${movie.title} has a score of ${movie.score}`);
});

// ********************************************
// map
const doubles = numbers.map(function (num) {
  return num * 2;
});
console.log(doubles);

const movieTitles = movies.map(function (movie) {
  return movie.title;
});
console.log(movieTitles);

// ********************************************
// arrow functions
const add = (x, y) => {
  return x + y;
};
console.log(`arrow function: ${add(2, 1)}`);

// implicit return
const multiply = (x, y) => x * y;
console.log(`implicit return: ${multiply(2, 2)}`);

// ********************************************
// setTimeout
setTimeout(() => {
  console.log('setTimeout 2 seconds later...');
}, 2000);

// ********************************************
// filter
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(`filter even numbers: ${evenNumbers}`);

// ********************************************
// every / some
console.log('every: ' + numbers.every((num) => num > 10));
console.log('some: ' + numbers.some((num) => num === 5));

// ********************************************
// reduce
const prices = [1.99, 2.99, 34.99, 32.99];
const total = prices.reduce((total, price) => {
  return total + price;
});
console.log(`total price: ${total.toFixed(2)}`);

const lowestPrice = prices.reduce((min, price) => {
  if (price < min) {
    return price;
  }
  return min;
});
console.log(`lowest price: ${lowestPrice}`);
