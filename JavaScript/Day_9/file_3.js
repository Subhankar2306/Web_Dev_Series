// filter function

const numbers = [10, 25, 30, 45, 50, 65, 70];

const isEven = function(num) {
  return num % 2 === 0;
};
const evenNumbers = numbers.filter(isEven);
console.log("Even Numbers:", evenNumbers); // [10, 30, 50, 70]

const isGreaterThan30 = function(num) {
  return num > 30;
} 
const greaterThan30Numbers = numbers.filter(isGreaterThan30);
console.log("Numbers Greater Than 30:", greaterThan30Numbers); // [45, 50, 65, 70]

