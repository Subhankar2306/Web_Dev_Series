// default parameter 

// function addTow(a,b){
//   if(typeof b === 'undefined'){
//     b = 0;
//   }
//   return a + b;
// }
// const ans = addTow(5,10);
// console.log(ans); // Output: 15

// function addTow(a,b=0){ // ES6 way of setting default parameter 
//   return a + b;
// }
// const ans = addTow(5);
// console.log(ans);



// // Rest parameter

// function myFunc(a,b,c){
//   console.log( `a is ${a}`);
//   console.log( `b is ${b}`);
//   console.log( `c is ${c}`);
// }
// myFunc(1,2,3);

// function myFunc2(a,b,...args){ // args will be an array of all passed parameters
//   console.log( `a is ${a}`);
//   console.log( `b is ${b}`);
//   console.log(args);
//   console.log(`Rest parameter values are: ${args.join(", ")}`);
//   console.log(`Rest parameter values are: ${args}`);
// }
// myFunc2(1,2,3,4,5);

function addAll(...numbers){
  let total = 0;
  for(const num of numbers){
    total += num;
  }
  return total;
}
// addAll(2,3,4,5);
const ans = addAll(2,3,4,5);
console.log(ans);