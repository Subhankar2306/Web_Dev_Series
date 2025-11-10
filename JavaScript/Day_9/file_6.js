// Find method in JavaScript

const myArray =["subha", "john", "doe", "alice", "bob"];

function isLength3(string){
   return string.length === 3;
}
const ans = myArray.find(isLength3);
console.log("First string with length 3:", ans); // "doe"
// The find method returns the value of the first element in the array that satisfies the provided testing function.
// If no elements satisfy the testing function, undefined is returned.


//let's understand through another realestic example

const users = [
  { userId: 1, userName: "subha" },
  { userId: 2, userName: "john" },
  { userId: 3, userName: "alice" },
  { userId: 4, userName: "bob" },
];

const user = users.find((user) => user.userId === 3);
console.log("User with userId 3:", user); // { userId: 3, userName: "alice" }

// Here, the find method is used to locate the user object with a userId of 3.
// It iterates through the users array and applies the provided function to each user object.
