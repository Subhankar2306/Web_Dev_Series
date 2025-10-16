// Function Expression
const greet = function(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Subhankar")); // Output: Hello, Subhankar!

// Arrow Function
// const add = (a, b) => a + b;
// console.log(add(5, 3)); // Output: 8
// console.log(findInArray([1, 2, 3, 4, 5], 3)); // Output: 2
// console.log(findInArray([1, 2, 3, 4, 5], 6)); // Output: -1
// console.log(findInArray(['a', 'b', 'c'], 'b')); // Output: 1

// Find Name in Array using arrow function

const findNameInArray = (arr, target) => {
  for(let i=0; i<arr.length; i++){
    if(arr[i]=== target){
      // return arr[i];
      return ("Found" + " " + arr[i] + " " + "at index" + " " + i);
    }
  }
  return ("Not Found");
}
const names = ["Subhankar", "Sankha", "Sanjib", "Sourav"];
const targetName = "Sanjib";
const targetName1 = "John";
const ans = findNameInArray(names, targetName);
const ans1 = findNameInArray(names, targetName1);
console.log(ans); // Found Sanjib at index 2
console.log(ans1); // Not Found