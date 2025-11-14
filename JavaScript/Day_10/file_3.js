// Maps Object 
// Map is an iterable

// store data in ordered fashion

// store key value pair (like object).
// duplicate keys are not allowed like objects.

// different between maps and objects.

// objects can only have string or symbol as key.

// in maps you can use anything as key like array, number, string.


// object literal
// key -> string
// key -> symbol

// const person ={
//   firstName: "Subha",
//   age: "23",
//   1: "one"
// }
// console.log(person.firstName);
// console.log(person["firstName"]);
// console.log(typeof person);
// for(let key in person){
//   // console.log(typeof key); // 3 string
//   console.log(key);
// }



// Here we can store different data types.
// const person = new Map();

// person.set('firstName', 'Subhankar');
// person.set('age',23);
// person.set(1, 'one');
// // person.set([1,2,3], 'onetwothree');
// // person.set({1: 'one'}, 'one');
// // console.log(person);
// // console.log(person.firstName); // Here its not allowed to access like objects, we need to use get() method.
// console.log(person.get('firstName'));
// console.log(person.get(1));
// console.log(person.keys()); // Using keys() we access all the keys persent in Map object.

// for(let key of person.keys()){
//   console.log(key, typeof key);  // this way we can proint all keys using for loop
// }


// const person = new Map();

// person.set('firstName', 'Subhankar');
// person.set('age',23);
// person.set(1, 'one');

// //  how we can use for of loop here

// // for (let key of person){
// //   // console.log(key);
// //   // console.log(typeof key);
// //   console.log(Array.isArray(key)); // its return True, here object return as Array.

// // }

// // If we want to destructure Array in for of loop 

// for(let [key, value] of person){
//   // console.log(Array.isArray(key));
//   console.log(key, value);
// }


// Different way to define Map object

// const person = new Map([['firstName', 'Subha'],['age',23]]);
// console.log(person);

// Another Example

const person1 ={
  id: 1,
  firstName: 'Subhankar'
};
const person2 ={
  id: 2,
  firstName: 'Ajit'
};

const extraInfo = new Map();
extraInfo.set(person1, {age:23, gender: 'male'});
extraInfo.set(person2, {age:24, gender: 'female'});
// console.log(extraInfo);
console.log(person1.id);
console.log(extraInfo.get(person1));
console.log(extraInfo.get(person1).gender);
console.log(extraInfo.get(person2).gender);