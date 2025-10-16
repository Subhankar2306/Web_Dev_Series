// Hoisting Example
// console.log(greet()); // Output: "Hello, World!"
// function greet() {
//     return "Hello, World!";
// }
// In this case we can call the function before its declaration due to hoisting, but this is not possible with function expressions or arrow functions, let's understand that with the next example.

// hello(); // Error: hello is not a function, because function expressions are not hoisted
// const hello = function() {
//     return "Hello, Universe!";
// }

// Arrow Function Example
// console.log(name()); // Error: name is not a function, because arrow functions are not hoisted
// const name = () => {
//   console.log("My Name is Subhankar");
// }


// Function inside function
function outerFunction() {
    console.log("Outer Function");
    function innerFunction() {
        console.log("Inner Function");
    }
    // Arrow Function
    const myfunc = (Name, age) =>{
      return `My Name is ${Name} and My Age is ${age}`;
    }
    console.log(myfunc("Subhankar", 24));
    // Function Expression
    const addTwo = function( a, b){
      return a + b;
    }
    console.log(addTwo("Adding two numbers ", 5, 3));
    // Calling inner function

    innerFunction();
}
outerFunction();
