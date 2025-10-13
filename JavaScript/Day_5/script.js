// break and continue satetement in Loops

// break satetemnt 
// for(let i=0; i<10; i++){
//     if(i===5){
//         break;  // it will break the loop when i is equal to 5
//     }
//     console.log(i);
// }

// continue statement

// for(let i=0; i<10; i++){
//     if(i===5){
//         continue;  // it will skip the iteration when i is equal to 5
//     }
//     console.log(i);
// }

//  do...while loop
let i=0;
do{
  console.log(i);
  i++;
}
while(i<5);
// it will execute the block of code once before checking the condition
// and then it will repeat the loop as long as the condition is true  
// here it will print 0 to 4
// if we set i=10 then it will print 10 only once because the condition is false but the valu of i wil be 11 after the loop.
// let i=10;
// do{
//   console.log(i);
//   i++;
// }
// while(i<5);
// it will print 10 only once because the condition is false
// here it will print 0 to 4
