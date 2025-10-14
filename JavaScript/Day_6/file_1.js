// Object reference type
// Array are good but not sufficient for real world data
// Object store key value pair
// Objects don't have index

// How to cteate object

const person = {
    name: "John",
    age: 22, 
    hobbies: ["guitar", "sleeping", "listening music"],
    address: {
        street: "123 Main St",
        city: "New York", 
        state: "NY"
    },
    sayHello: function() {
        console.log("Hello");
    }
};  
console.log(person);
// Accessing the data from object
// console.log(person.name);
// console.log(person.hobbies);
// console.log(person.address.city);
// person.sayHello();
// console.log(typeof person);

// Adding new key value pair
person  .gender = "male";
console.log(person); 
// person["gender"] = "male2";
// console.log(person); 
// person.age = 23;
// console.log(person); 