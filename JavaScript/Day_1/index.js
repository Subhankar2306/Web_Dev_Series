// var age = 25;
// We can access the variable age in multiple ways
/**
console.log("My age is " + age);
console.log(`My age is ${age}`);
console.log('My age is ' + age);
console.log('My age is ' + age + ' years');
console.log(`My age is ${age} years`);
**/

// Exercise: Create variables for name, age, and city. Use template literals to print a sentence introducing yourself.
/**
var name = "John";
var age = 25;
var city = "New York";  
console.log(`My name is ${name}. I am ${age} years old and I live in ${city}.`);  **/

// Scope of var and let
// var is function scoped
// let is block scoped

/** 
var a = 10;

if(true){
  console.log(a);
}
console.log(a);

// In thsi case both will work fine as they are in the same function scope

**/

/** 
function testVar(){
  var a = 10; 
  if(true){
    var a = 20; // same variable
    console.log(a); // 20
  }
  console.log(a); // 20
}
console.log(a); // Error: a is not defined

// In this case, var is function scoped, so that a inside the if block is the same as the a outside the if block
// we can't access a outside the function as it is not defined in the global scope
testVar();
**/

/**
function testLet(){
  let a = 10;
  if(true){
    let a = 20; // different variable
    console.log(a); // 20
  }
  console.log(a); // 10
}
testLet();
console.log(a); // Error: a is not defined
// In this case, let is block scoped, so that a inside the if block is different from the a outside the if block
// we can't access a outside the function as it is not defined in the global scope

**/

// Exercise: Create a function that demonstrates the difference between var and let in terms of scope.
/**
function scopeTest(){
  var x = 1;
  let y = 1;
  if(true){
    var x = 2; // same variable
    let y = 2; // different variable
    console.log(x); // 2
    console.log(y); // 2
  }
  console.log(x); // 2
  console.log(y); // 1
} 
scopeTest();
console.log(x); // Error: x is not defined
console.log(y); // Error: y is not defined
// In this example, we can see that the var variable x is function scoped, so the value of x inside the if block is the same as the value of x outside the if block.
// However, the let variable y is block scoped, so the value of y inside the if block is different from the value of y outside the if block.
// We can't access x and y outside the function as they are not defined in the global scope.

**/

/**

const pi = 3.14;
console.log(pi);  
pi = 3.14159; // Error: Assignment to constant variable.
console.log(pi); // This line will not be executed
// In this case, we cannot reassign a new value to pi as it is declared using const
//Juat becase it is a constant, it doesn't mean the value is immutable. If the value is an object or array, we can modify its properties or elements.
const person = { name: "John", age: 25 };
person.age = 26;
console.log(person); // { name: "John", age: 26 }
person = { name: "Jane", age: 30 }; // Error: Assignment to constant variable.
// We cannot reassign a new object to person as it is declared using const
console.log(person); // This line will not be executed
// In this case, we can modify the properties of the object person, but we cannot reassign a new object to person as it is declared using const.
// We can't access pi and person outside the block as they are not defined in the global scope.

 **/

/**
 //Variable Naming Conventions or Rules
 // 1. Variable names can contain letters, digits, underscores, and dollar signs. Example: myVariable, _myVariable,   $myVariable.
 // 2. Variable names must begin with a letter, underscore, or dollar sign. Example: myVariable, _myVariable, $myVariable.
 // 3. Variable names are case sensitive (age, Age, and AGE are different variables). Example: myVariable and myvariable are different variables.
 // 4. Reserved words (like JavaScript keywords) cannot be used as variable names.Example: var, let, const, if, else, for, while, function, return, etc.
 // 5. Variable names should be meaningful and descriptive. Example: age, firstName, totalAmount.
 // 6. Use camelCase for variable names (e.g., myVariableName). Example: myVariableName, firstName, totalAmount.
 // 7. Avoid using single-character variable names (except for loop counters). Example: i, j, k for loop counters; otherwise, use descriptive names.
 // 8. Do not start variable names with numbers. Example: myVariable1 is valid, but 1stVariable is not.
 // 9. Avoid using special characters (except for _ and $). Example: my-Variable is not valid, but my_Variable is valid.
 // 10. Keep variable names concise but informative. Example: use total instead of totalAmountInDollars.

 **/

/**
// Variable Hoisting
console.log(a); // undefined
var a = 10;
console.log(a); // 10
// In this case, the declaration of a is hoisted to the top of the scope, but the assignment is not. So, when we try to access a before its declaration, it is undefined.
// We can't access a outside the function as it is not defined in the global scope.

function hoistingExample(){
  console.log(b); // undefined
  var b = 20;
  console.log(b); // 20
}
hoistingExample(); // 20
console.log(b); // Error: b is not defined
// In this case, the declaration of b is hoisted to the top of the function scope, but the assignment is not. So, when we try to access b before its declaration, it is undefined.
// We can't access b outside the function as it is not defined in the global scope.
// However, this is not the case with let and const. They are not hoisted in the same way as var.

console.log(c); // ReferenceError: Cannot access 'c' before initialization
let c = 30;
console.log(c); // 30
// In this case, we get a ReferenceError when we try to access c before its declaration. This is because let and const are not hoisted in the same way as var.
// We can't access c outside the block as it is not defined in the global scope.

console.log(d); // ReferenceError: Cannot access 'd' before initialization
const d = 40;
console.log(d); // 40
// In this case, we get a ReferenceError when we try to access d before its declaration. This is because let and const are not hoisted in the same way as var.
// We can't access d outside the block as it is not defined in the global scope.

// We can't access a, b, c and d outside the function as they are not defined in the global scope.

 **/

/**
// Data Types in JavaScript
// 1. Primitive Data Types
//    a. Number: Represents both integer and floating-point numbers. Example: 42, 3.14, -7 
var num = 42;
console.log(typeof num); // "number"

//    b. String: Represents a sequence of characters. Example: "Hello, World!", 'JavaScript'
var str = "Hello, World!";
console.log(typeof str); // "string"

//    c. Boolean: Represents a logical entity and can have two values: true or false. Example: true, false
var bool = true;
console.log(typeof bool); // "boolean"

//    d. Undefined: Represents a variable that has been declared but not assigned a value. Example: undefined
var undef;
console.log(typeof undef); // "undefined"

//    e. Null: Represents the intentional absence of any object value. Example: null
var n = null;
console.log(typeof n); // "object" (this is a known quirk in JavaScript)

//    f. Symbol: Represents a unique identifier. Example: Symbol('description')
var sym = Symbol('description'); 
console.log(typeof sym); // "symbol" 

//    g. BigInt: Represents integers with arbitrary precision. Example: 9007199254740991n
var bigInt = 9007199254740991n;
console.log(typeof bigInt); // "bigint"


// 2. Non-Primitive Data Types
//    a. Object: Represents a collection of properties. Example: { name: "John", age: 30 }
var obj = { name: "John", age: 30 };
console.log(typeof obj); // "object"
//    b. Array: Represents an ordered list of values. Example: [1, 2, 3, 4, 5]
var arr = [1, 2, 3, 4, 5];
console.log(typeof arr); // "object" (arrays are a type of object in JavaScript)

//    c. Function: Represents a block of code designed to perform a particular task. Example: function greet() { console.log("Hello!"); }
function greet() { console.log("Hello!"); }
console.log(typeof greet); // "function"

// We can't access num, str, bool, undef, n, sym, bigInt, obj, arr and greet outside the block as they are not defined in the global scope.

**/

