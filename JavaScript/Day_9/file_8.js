// some methods of array in JavaScript

const numbers =[10, 3, 25, 8, 15, 6];

//If any of the number in numbers array is even or not
const isAnyEven =numbers.some(function(number){
    return number % 2 ===0;
})
console.log("Is any number even?", isAnyEven); // true
// The some method tests whether at least one element in the array passes the test implemented by the provided function.
// It returns a Boolean value: true if at least one element passes the test, and false otherwise.

// Let's understand through a realistic example
const users = [
  { userId: 1, userName: "subha", isActive: false },
  { userId: 2, userName: "john", isActive: false },
  { userId: 3, userName: "alice", isActive: true },
  { userId: 4, userName: "bob", isActive: false },
];

const isAnyUserActive = users.some((user) => user.isActive); 
console.log("Is any user active?", isAnyUserActive); // true
// Here, the some method checks if at least one user object in the users array has the isActive property set to true.