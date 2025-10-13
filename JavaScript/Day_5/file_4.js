// Array Destructuring 
let arr = ["Harry", "Rohan", "SkillF", "Shubham", "Vikrant"];
// let [myVar1, myVar2]= arr;
// console.log("Array Destructuring");
// console.log("value of myvar1",myVar1);
// console.log("Value of myvar2",myVar2);  // It will take first two values from array and store in myVar1 and myVar2 others will be ignored
// let myArry =arr.slice(2); // Instad of this we can use Rest Operator
let [myVar1, myVar2, ...myArry]= arr;
console.log("Using Rest Operator in Array Destructuring");
console.log("value of myvar1",myVar1);
console.log("Value of myvar2",myVar2);
console.log("myArry",myArry);  // It will take all values from index 2 and store in myArry

