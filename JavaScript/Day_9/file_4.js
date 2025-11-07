// reduce method

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log("Sum of Numbers:", sum); // 15

// accumulator = 0, currentValue = 1 => returns 0 + 1 = 1
// accumulator = 1, currentValue = 2 => returns 1 + 2 = 3
// accumulator = 3, currentValue = 3 => returns 3 + 3 = 6
// accumulator = 6, currentValue = 4 => returns 6 + 4 = 10
// accumulator = 10, currentValue = 5 => returns 10 + 5 = 15

const userCarts = [
  { product: "Laptop", price: 50000 },
  { product: "Phone", price: 20000 },
  { product: "Tablet", price: 15000 },
];
const totalAmount = userCarts.reduce((total, cartItem) => {
  return total + cartItem.price;
}, 0);  // Initial total is 0 

console.log("Total Amount:", totalAmount); // 85000


// total = 0, cartItem = { product: "Laptop", price: 50000 } => returns 0 + 50000 = 50000
// total = 50000, cartItem = { product: "Phone", price: 20000 } => returns 50000 + 20000 = 70000
// total = 70000, cartItem = { product: "Tablet", price: 15000 } => returns 70000 + 15000 = 85000
// Thus, the final total amount is 85000

