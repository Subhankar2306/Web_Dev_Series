// Lets make a samll guess a right number game using Nestes if else statement
// 19 your guess is right 
// 17 is too low
// 20 is too high 

let winningNumber = 19;
let userGuess = +prompt("Guess a number"); // prompt will take input as string, to take a number we have to just put + before prompt
console.log(typeof userGuess, userGuess);

if (userGuess === winningNumber){
  console.log("Your Guess is Right !");
}
else{
  if(userGuess<winningNumber){
    console.log("Your guess is too low !");
  }
  else{
    console.log("Your guess is too high !");
  }
}
