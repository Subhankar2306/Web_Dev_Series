// Lexical Scope in JavaScript
function myApp(){
  const myVar = "value1";
  function myFunc(){
    // const myVar = "value59";
    console.log("inside myFunc", myVar); // it will search for myVar in its own scope first then in parent scope if not found then it will fetch from its laxical environment and access the value.
  }
  console.log(myVar);
  myFunc();
}
myApp();

// Practice Questions