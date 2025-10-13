//  primitive vs reference data types

// Primitive data types
// let num1 = 6;
// let num2 = num1;
// console.log("Before incrementing");
// console.log("num1 is", num1);
// console.log("num2 is", num2);
// num1++;
// console.log("After incrementing");
// console.log("num1 is", num1);
// console.log("num2 is", num2);

// Primitive data types don't change when we assign one variable to another


// Reference data types
// let array1 = ["item1", "item2"];
// let array2 = array1;
// console.log("Before pushing");
// console.log("array1 is", array1);
// console.log("array2 is", array2);
// array1.push("item3");
// console.log("After pushing");
// console.log("array1 is", array1);
// console.log("array2 is", array2);

// Reference data types change when we assign one variable to another.


// To avoid this we can use the spread operator
// let array3 = [...array1];
// array1.push("item4");
// console.log("array1 is", array1);
// console.log("array3 is", array3);
// Now array3 will not change when we change array1
// This is because we have created a new array with the spread operator

// We also use slice method to create a new array

// let array4 = array1.slice(0);
// array1.push("item5");
// console.log("array1 is", array1);
// console.log("array4 is", array4);
// Now array4 will not change when we change array1
// This is because we have created a new array with the slice method
// We can also use Array.from() method to create a new array
// let array5 = Array.from(array1);
// array1.push("item6");
// console.log("array1 is", array1); 
// console.log("array5 is", array5);
// Now array5 will not change when we change array1

// We can also use concat method to create a new array
// let array6 = [].concat(array1);
// array1.push("item7");
// console.log("array1 is", array1);
// console.log("array6 is", array6);
// Now array6 will not change when we change array1

let array1 = ["item1", "item2"];
// let array2 = array1.slice(0).concat(["item3", "item4", "item5"]);
// console.log("array1 is", array1);
// console.log("array2 is", array2);
// Now array2 will not change when we change array1
// This is because we have created a new array with the slice and concat method and add new onother items to it.

// We can also use the spread operator to create a new array and add new items to it
let addMoreArray=["item3", "item4", "item5"];
let array2 = [...array1, ...addMoreArray];
console.log("array1 is", array1);
console.log("array2 is", array2);
let array3 = [...array1, "item6", "item7", "item8"];
console.log("array1 is", array1);
console.log("array3 is", array3);
