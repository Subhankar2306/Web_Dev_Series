// 1. Arithmetic Operators
// Used for mathematical calculations
let a = 10;
let b = 3;
console.log(a + b); // Addition: 13
console.log(a - b); // Subtraction: 7
console.log(a * b); // Multiplication: 30
console.log(a / b); // Division: 3.333...
console.log(a % b); // Modulus (remainder): 1

// 2. Assignment Operators
// Used to assign values to variables
let x = 5;      // Assign 5 to x
x += 2;         // x = x + 2 => 7
x -= 1;         // x = x - 1 => 6
x *= 3;         // x = x * 3 => 18
x /= 2;         // x = x / 2 => 9

// 3. Comparison Operators
// Used to compare two values
console.log(5 == '5');   // true (equal, type not checked)
console.log(5 === '5');  // false (equal and type checked)
console.log(5 != 3);     // true (not equal)
console.log(5 > 3);      // true (greater than)
console.log(5 < 3);      // false (less than)

// 4. Logical Operators
// Used to combine conditions
let age = 20;
console.log(age > 18 && age < 30); // true (AND)
console.log(age < 18 || age > 30); // false (OR)
console.log(!(age < 18));          // true (NOT)

// 5. String Operators
// Used to join strings
let firstName = "John";
let lastName = "Doe";
console.log(firstName + " " + lastName); // John Doe

// 6. Type Operators
// Used to check data type
console.log(typeof 123);      // "number"
console.log(typeof "hello");  // "string"

// 7. Ternary Operator
// Short way to write if-else
let isAdult = age >= 18 ? "Yes" : "No";
console.log(isAdult); // Yes