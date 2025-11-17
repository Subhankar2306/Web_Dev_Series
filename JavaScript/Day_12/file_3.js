// const obj1 = {
//   key1: "value1",
//   key2: "value2"
// }
// const obj2 = {
//   key3: "value3"
// }

// console.log(obj2.key2); // we can't access form obj2 to obj1


// there is one more way to create empty object

// const obj1 = {
//   key1: "value1",
//   key2: "value2"
// }
// const obj2 = {};
// obj2.key3 = "value3"  // its also showing me undifined

// console.log(obj2.key2); // we can't access form obj2 to obj1





// [[prototype]] == __proto__

const obj1 = {
  key1: "value1",
  key2: "value2"
}
const obj2 = Object.create(obj1); // In this Obj2 first find key2 value in obj2 if not find then obj2 will access form obj1 , key2 value.
obj2.key3 = "value3";
// obj2.key2 = "unique"; // here available then it will show , if it not available then access form obj1 key2 value.


// console.log(obj2.key2);

console.log(obj2); // {key3: 'value3'}key3: "value3"[[Prototype]]: Objectkey1: "value1"key2: "value2"[[Prototype]]: Object

