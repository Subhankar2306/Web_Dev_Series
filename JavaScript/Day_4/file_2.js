// For Loop 

// Lets print 0 to 10 using for loop

for(let num=0; num<=10; num++){
  console.log(num);
}

// console.log(`Current value of num is ${num}`); // Output will be ReferenceError: num is not defined

// Here the loop will run until the condition is false
// When num becomes 11 the condition will be false and loop will terminate and control will come out of the loop and next statement will be executed.
// Also note that the variable num is defined inside the for loop and its scope is limited to the for loop only. So when we try to access it outside the loop we get ReferenceError.
// This is because we have used let to declare the variable num. If we had used var instead of let then the variable num would have been accessible outside the loop as well. 
