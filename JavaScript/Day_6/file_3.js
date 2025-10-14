// How to iterate the object
const person ={
  name: "Subhba",
  age: 23,
  hobbies: ["Playing cricket", "listening music"],
  address: {
    street: "123 Main St",
    city: "New York",
    state: "NY"
  }
}

// for in loop
// for(let key in person){
  // console.log(key); // it will give all the keys of the object
  // console.log(person[key]); // it will give all the values of the object
  // console.log(`${key}: ${person[key]}`); // it will give key value pair of the object
  // console.log(key, ":", person[key]); // it will give key value pair of the object
// }

// Object.keys()
// const keys = Object.keys(person);
// console.log(keys); // it will give all the keys of the object in an array 
// Object.values()
// const values = Object.values(person);
// console.log(values); // it will give all the values of the object in an array
// Object.entries()
// const entries = Object.entries(person);
// console.log(entries); // it will give all the key value pairs of the object in an array of arrays 


// for of loop
for(let [key, value] of Object.entries(person)){  // it will give key value pair of the object
  console.log(`${key}: ${value}`);
}

