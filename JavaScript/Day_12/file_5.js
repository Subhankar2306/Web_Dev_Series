//  What is Prototype

// JavaScript function ==> function + object

function hello(){
  console.log("hello world");
}

// console.log(hello.name);
// we can add our own properties 

// hello.myOwnProperties = " Subhankar";
// console.log(hello.myOwnProperties); // we can access function like objects

// name property ----> tells function name;

// function provides more useful properties

// function will provide free space thats call prototype

// console.log(hello.prototype);  // {}


// only functions prototype properties, object havn't protoyepe

// if(hello.prototype){
//   console.log('prototype is present'); // present 
// }
// else{
//   console.log('prototype is not present');
// }



hello.prototype.name = "Subha";
hello.prototype.age = 23;
hello.prototype.sing = function(){
  return "He he he la la la";
}

// console.log(hello.prototype);
console.log(hello.prototype.sing()); 

//  We can use prototype like this 
