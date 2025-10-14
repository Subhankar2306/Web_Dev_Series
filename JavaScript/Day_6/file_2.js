// Difference between dot and bracket notation
const key = "email";
const person ={
  name: "Subbha",
  age: 23,
  // hobbies: ["Playing cricket", "listening music"],
  "person hobbies": ["Playing cricket", "listening music"],

}
// console.log(person);

// Accessing properties using dot notation
// console.log(person.name);
// console.log(person.age);
// console.log(person.hobbies);

// Accessing properties using bracket notation
// console.log(person["name"]);
// console.log(person["age"]);
// console.log(person["person hobbies"]);

// If any key has space in between then we have to use bracket notation to access that property. Dot notation will not work in that case.

person[key] = "subbha@example.com";
console.log(person);
// Deleting key value pair
delete person.age;
console.log(person);  
