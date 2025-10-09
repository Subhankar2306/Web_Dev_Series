// Basic if condition
let age = 18;
if (age >= 18) {
  console.log("You are an adult.");
}

// if-else condition
let score = 45;
if (score >= 50) {
  console.log("You passed the exam.");
} else {
  console.log("You failed the exam.");
}

// if-else if-else ladder
let temperature = 30;
if (temperature > 35) {
  console.log("It's very hot.");
} else if (temperature > 20) {
  console.log("The weather is pleasant.");
} else {
  console.log("It's cold.");
}

// Nested if condition
let isMember = true;
let purchaseAmount = 120;
if (isMember) {
  if (purchaseAmount > 100) {
    console.log("You get a special discount!");
  } else {
    console.log("You get a regular discount.");
  }
} else {
  console.log("No discount available.");
}