// every method in JavaScript

const numbers = [1, 4, 5, 6, 3, 9];

const allEven = numbers.every(function (num) {
  return num % 2 === 0;
});

console.log("Are all numbers even?", allEven); // false

// The every method tests whether all elements in the array pass the test implemented by the provided function.
// It returns a Boolean value: true if all elements pass the test, and false otherwise.

// Let's understand through a realistic example

const users = [
  { userId: 1, userName: "subha", isActive: true },
  { userId: 2, userName: "john", isActive: true },
  { userId: 3, userName: "alice", isActive: false },
  { userId: 4, userName: "bob", isActive: true },
];

const allActive = users.every((user) => user.isActive);
console.log("Are all users active?", allActive); // false
// Here, the every method checks if all user objects in the users array have the isActive property set to true.

const products = [
  {
    productId: 1,
    productName: "Product A",
    inStock: true,
    price: 1024
  },
  {
    productId: 2,
    productName: "Product B",
    inStock: true,
    price: 1028
  },
  {
    productId: 3,
    productName: "Product C",
    inStock: true,
    price: 1053
  },
];
// const allInStock = products.every((product) => product.inStock);
// const priceLimit = products.every(product => product.price < 1000);

const priceLimit = products.every((product) => product.price < 1000 && product.inStock===true);
// console.log("Are all products below the price limit?", priceLimit);
// console.log("Are all products in stock?", allInStock); // true
console.log("Are all products below the price limit and in stock?", priceLimit);  // false


