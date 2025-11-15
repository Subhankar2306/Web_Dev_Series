// Methods is JavaScript
// function inside Object

// const person = {
//   firstName: "Sam",
//   age: 23,
//   about: function(){
//     // console.log("person name is Subha and person age is 23");
//     // console.log(`person name is ${firstName} and person ${age} is 23`); // it will through error.
//     // If we access key of Object we need to use this keyword
//     console.log(`person name is ${this.firstName} and person  is ${this.age}`); 
//     // Here this refers to the person object." this.firstName means the firstName property of person"
//     console.log(this); // It will return whole object.
//   }
// }
// // console.log(person.about); // Its reture whole function
// person.about();

// Understand in diffrent way..
function personInfo(){
  console.log(`Person name is ${this.firstName} and age is ${this.age}.`)
}

const person = {
  firstName: 'Subha',
  age: 23,
  about: personInfo
}

const person1 = {
  firstName: 'Mohit',
  age: 18,
  about: personInfo
}
const person2 = {
  firstName: 'Rakesh',
  age: 25,
  about: personInfo
}

// personInfo(); // Person name is undefined and age is undefined.

person.about();
person1.about();
person2.about();
