// JavaScript Functions
// function greet(name) {
//     return `Hello, ${name}!`;
// }
// console.log(greet("Subhankar")); // Output: Hello, Subhankar!

// function name(){
//   console.log("My Name is Subhankar");
// }
// name();
// function add(a, b) {
//     return a + b;
// }
// console.log(add(5, 3)); // Output: 8

// const multiply = function(a, b, c) {
//     return a * b * c;
// };
// console.log(multiply(4, 6, 2)); // Output: 48


// Odd or Evene
// input : 1 number
// output : odd or even

// function oddEven(num){
//   if(num %2 === 0){
//     return "This Number is Even";
//   }
//   else{
//     return "This Number is Odd";
//   }
// }
// console.log(oddEven(5));
// console.log(oddEven(10));
// console.log(oddEven(0));
// console.log(oddEven(-4));
// console.log(oddEven(-7));

// function 
// input : 1 number
// .output : firstCharacter

// function firstCharacter(str){
//   return str[0];
// }
// console.log(firstCharacter("Subhankar")); // output: S

// function
// input : array , target(number)
// output : index of target if found, -1 if not found

function findInArray(arr, target){
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === target){
      return i;
    }
  }
  return -1;
}
const myArray = [10, 20, 30, 40, 50];
console.log(findInArray(myArray, 50)); // output: 2
console.log(findInArray([1, 2, 3, 4, 5], 3)); // output: 2
console.log(findInArray([1, 2, 3, 4, 5], 6)); // output: -1
