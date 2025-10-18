// Parameter destructering 

// const person ={
//   firstName: "Subhankar",
//   Gender: "Male"
// }
// // function printDetails(obj){
// //   console.log(obj.firstName);
// //   console.log(obj.Gender);
// // }
// function printDetails({firstName, Gender}){ // Parameter destructuring.
//   console.log(firstName);
//   console.log(Gender);
// }
// printDetails(person);


// Call Back Function 

// function myFunc(a){
//   console.log(a);
// }
// // myFunc(20);
// myFunc("Subha");
// // myFunc([1,2,3,4]);
// // myFunc({name: "Subha", Age: 23});

function myFunc2(name){
  console.log("Inside myFunc2");
  console.log(`My Name is: ${name}`)
}

function myFunc(callback){
  console.log("hello guyes...")
  callback("Subhankar.");
}
 myFunc(myFunc2);