// function returning function

function myFunc(){  // Higher order function
  function hello(){
    // console.log("Hello Guyes...");
    return "Hello guyes";
  }
  return hello;  // Return function
}
const ans = myFunc();
// console.log(ans);
console.log(ans());