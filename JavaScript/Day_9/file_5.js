// Sort Method

// const numbers = [5, 3, 8, 1, 2];
// // ["5", "3", "8", "1", "2"] 
// // ["53","51","56","49","50"]

// // ASCII values:
// // "0"-48
// // "1"-49
// // "2"-50
// // "3"-51
// // "5"-53
// // "8"-56
// // JavaScript converts numbers to strings for default sort and compares their UTF-16 code unit values, means comapre by ASCII values

// numbers.sort(); // Default sort (lexicographical)
// console.log("Default Sort:", numbers); // [1, 2, 3, 5, 8]

// const userNames = ["John", "alice", "Bob", "charlie","ABC"];
// userNames.sort();
// console.log("Sorted User Names:", userNames); // ["ABC", "Bob", "John", "alice", "charlie"]
// // 'A' - 65
// // 'B' - 66
// // 'J' - 74
// // 'a' - 97
// // 'c' - 99
// // Its see the first character of each string and sorts based on their ASCII values and uppercase letters come before lowercase letters

// To sort numbers in ascending order correctly we need to provide a compare function

// const numbers = [5, 3, 8, 1, 2];

// // Sorting in ascending order

// // numbers.sort((a, b) => {
// //   return a - b;
// // });

// numbers.sort((a, b) => a - b);
// console.log("Ascending Order:", numbers); // [1, 2, 3, 5, 8]

// // Lets see how the compare function works
// // // For two elements a and b:
// // // If the result is negative (a - b < 0), a comes before b.
// // // If the result is positive (a - b > 0), b comes before a.
// // // If the result is zero (a - b === 0), their order remains unchanged.

// // If we want it in decendeing order then we can do like this
// // // Sorting in descending order
// numbers.sort((a, b) => b - a);
// console.log("Descending Order:", numbers); // [8, 5, 3, 2, 1]


// let's understand through a realistic example
// price lowToHigh and highToLow sorting in an e-commerce website
const products = [
  { name: "Product A", price: 300 },
  { name: "Product B", price: 100 },
  { name: "Product C", price: 200 },
];
// Low to High
products.sort((a, b) => a.price - b.price);
console.log("Products Low to High:", products);
// [{ name: "Product B", price: 100 }, { name: "Product C", price: 200 }, { name: "Product A", price: 300 }]

// High to Low
products.sort((a, b) => b.price - a.price);
console.log("Products High to Low:", products);
// [{ name: "Product A", price: 300 }, { name: "Product C", price: 200 }, { name: "Product B", price: 100 }]



// But what if we want to keep the original array intact and create a new sorted array
const lowToHighProducts = [...products].sort((a, b) => a.price - b.price);
console.log("Products Low to High:", lowToHighProducts);

// High to Low
const highToLowProducts = [...products].sort((a, b) => b.price - a.price);
console.log("Products High to Low:", highToLowProducts);




// Using slice() method to create a shallow copy
const lowToHighProduct = products.slice().sort((a, b) => a.price - b.price);
console.log("Products Low to High:", lowToHighProduct);

// High to Low
const highToLowProduct = products.slice().sort((a, b) => b.price - a.price);
console.log("Products High to Low:", highToLowProduct);
