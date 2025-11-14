// Optional Chaining
// Optional chaining returns undefined if an object is undefined or null
const user = {
  firstName : "Subhankar",
  // address : {houseNumber : '12345'}
};

// console.log(user.firstName);
// // console.log(user.address);
// console.log(user.address.houseNumber);

console.log(user?.firstName);
console.log(user?.address?.houseNumber);
