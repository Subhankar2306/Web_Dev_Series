// fill method
// value to fill, start index, end index (end index is exclusive)

// const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
// myArray.fill(0, 2, 5); // Fill with 0 from index 2 to index 5 (exclusive)
// console.log("Array after fill:", myArray); // [1, 2, 0, 0, 0, 6, 7, 8, 9, 10]
// // Here, the fill method replaces elements from index 2 to index 4 with the value 0.

// const names = ["subha", "john", "alice", "bob", "doe"];
// names.fill("guest", 1, 4); // Fill with "guest" from index 1 to index 4 (exclusive)
// console.log("Names after fill:", names); // ["subha", "guest", "guest", "guest", "doe"]
// In this example, the fill method replaces elements from index 1 to index 3 with the string "guest".


// splice method in JavaScript
// start index, delete count, items to add
const fruits = ["apple", "banana", "cherry", "date", "elderberry"];

// delete items
const deleted = fruits.splice(2,2); // Starting at index 2, remove 2 elements
console.log("Deleted fruits:", deleted); // ["cherry", "date"]

// insert items
fruits.splice(1, 0, "blueberry"); // Starting at index 1, remove 0 elements and add "blueberry".


// insert and delete items
const modified = fruits.splice(3, 1, "fig", "apple"); // Starting at index 3, remove 1 element and add "fig" and "apple".
console.log("Modified fruits:", modified); // ["elderberry"]
console.log("Fruits after splice:", fruits); // ["apple", "banana", "blueberry", "fig", "apple", "elderberry"]

// Here, the splice method starts at index 2, removes 2 elements ("cherry" and "date"), and adds "kiwi" and "mango" at that position.