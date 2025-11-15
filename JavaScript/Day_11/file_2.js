// use strict mode

// function myFunc(){
//   // It will create problem some time thats why we need to 
//   "use strict" // it will through undefined
//   console.log(this);
// }
// myFunc();



// call, apply, binde in JavaSrcipt.


// call() method

// const person1 = {
//   firstName: 'Rakesh',
//   age: 25,
//   about: function(){
//   console.log(`Person name is ${this.firstName} and age is ${this.age}.`)
// }
// }
// const person2 = {
//   firstName: 'Rohit',
//   age: 23,
// }

// person1.about.call(); // It will show Person name is undefined and age is undefined.
// // When i use call() then i need to idicate this that which object will accessed.
// person1.about.call(person1); // Person name is Rakesh and age is 25.
// person1.about.call(person2); // Person name is Rohit and age is 23

// const person1 = {
//   firstName: 'Rakesh',
//   age: 25,
//   about: function(hobby, favSinger){
//   console.log(`Person name is ${this.firstName} and age is ${this.age}.`,hobby,favSinger);
// }
// }
// const person2 = {
//   firstName: 'Rohit',
//   age: 23,
// }

// person1.about.call(person2, "Guiter", "Arijit Shing")



function about(hobby, favSinger){
  console.log(`Person name is ${this.firstName} and age is ${this.age}.`,hobby,favSinger);
}
const person1 = {
  firstName: 'Rakesh',
  age: 25,
  
}
const person2 = {
  firstName: 'Rohit',
  age: 23,
}

about.call(person1, "Guiter", "Arijit Shing");
about.call(person2, "Guiter", "Arijit Shing");

// apply, apply is also similar to call
about.apply(person1, ["Guiter", "Arijit Shing"]);

// bind , it will return a function 

const func = about.bind(person2, "Guiter", "Arijit Shing");
func();