// map method
// Map metod creates a new array populated with the results of calling a provided function on every element in the calling array.
// const numbers = [3,5,2,6,8];

// const squre = function(number){
//   return number * number;
// }
// const squreNumber = numbers.map(squre);
// console.log(squreNumber);  // [9, 25, 4, 36, 64]

// // using arrow function
// const cubeNumber = numbers.map((number) => number * number * number);
// console.log(cubeNumber);  // [27, 125, 8, 216, 512]

const users = [
    {firstName: "Subha", age: 8},
    {firstName: "Mohit", age: 18},
    {firstName: "Ankit", age: 28},
    {firstName: "Anup", age: 38},
];
const userNames = users.map((user) => user.firstName);
console.log(userNames);  // ['Subha', 'Mohit', 'Ankit', 'Anup']