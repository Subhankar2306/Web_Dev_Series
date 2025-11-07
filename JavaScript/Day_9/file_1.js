// Important array methods 

// const numbers = [1,2,3,4,9,8];

// 1. forEach
// numbers.forEach(function(number, index){   // Anonymous function
//     console.log(`Index: ${index}, Number: ${number}`);
// });

// function multipleByTwo(number, index){
//     console.log(`Index: ${index}, ${number} Multiplied by 2  Number is: ${number * 2}`);
// }
  //  for (let i = 0; i<numbers.length; i++){
  //     multipleByTwo(numbers[i], i);
  //  }

// numbers.forEach(multipleByTwo);


const users = [
    {firstName: "Subha", age: 8},
    {firstName: "Mohit", age: 18},
    {firstName: "Ankit", age: 28},
    {firstName: "Anup", age: 38},
];
// forEach Function
// users.forEach(function(user){
//     console.log(user.firstName);
// });  

// arrow function
users.forEach((user)=>{
  console.log(user.age)
})
// for of Loop
for(let user of users){
  console.log(user.firstName); 
}