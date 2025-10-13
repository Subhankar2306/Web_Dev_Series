// Introduction to Arrayin JavaScript

// let fruits = ["Apple", "Banana", "Mango", "Orange"];
// console.log(fruits);

// // Accessing elements
// console.log(fruits[0]); // Apple
// console.log(fruits[2]); // Mango
// console.log(fruits.length); // 4

// // Modifying elements
// fruits[1] = "Grapes";
// console.log(fruits); // ["Apple", "Grapes", "Mango", "Orange"]
// fruits[fruits.length] = "Pineapple"; // Adding at the end
// console.log(fruits); // ["Apple", "Grapes", "Mango", "Orange", "Pineapple"]

// // Array Methods
// fruits.push("Strawberry"); // Add at the end
// fruits.pop(); // Remove from the end
// fruits.shift(); // Remove from the beginning
// fruits.unshift("Kiwi"); // Add at the beginning
// console.log(fruits); // ["Kiwi", "Grapes", "Mango", "Orange", "Pineapple"]

let fruits = ["Apple", "Banana", "Mango", "Orange"];
// let obj ={}; // Object Literal

// console.log(typeof fruits); // object
// console.log(Array.isArray(fruits)); // true
// console.log(Array.isArray(obj)); // false

// Looping through an array
// for(let i = 0; i < fruits.length; i++){
//     console.log(fruits[i]);
// }

// Using for...of loop

// for(let fruit of fruits){  
//     console.log(fruit);
// }

let fruits2 = [];
for(let i=0; i<fruits.length; i++){
    fruits2.push(fruits[i].toUpperCase());
}
console.log(fruits2); // ["APPLE", "BANANA", "MANGO", "ORANGE"]


// We can also use map method to achieve the same result
let fruits3 = fruits.map((fruit) => fruit.toUpperCase());
console.log(fruits3); // ["APPLE", "BANANA", "MANGO", "ORANGE"] 

// We can also use forEach method to achieve the same result
let fruits4 = [];
fruits.forEach((fruit) => fruits4.push(fruit.toUpperCase()));
console.log(fruits4); // ["APPLE", "BANANA", "MANGO", "ORANGE"]

// Use const for creating arrays
const fruits5 = ["Apple", "Banana", "Mango", "Orange"];
fruits5.push("Pineapple"); // This is allowed because we are not reassigning the array and just modifying it.
console.log(fruits5); // ["Apple", "Banana", "Mango", "Orange", "Pineapple"]
// fruits5 = ["Kiwi", "Grapes"]; // This is not allowed
// console.log(fruits5); // Error: Assignment to constant variable.
// We can modify the array but we cannot reassign it

// Diffrent between create a array using let and const.
// If we create an array using let then we can reassign the array but if we create an array using const then we cannot reassign the array.
// But we can modify the array in both cases.
// Good practice is to use const for creating arrays and objects unless we need to reassign them.








