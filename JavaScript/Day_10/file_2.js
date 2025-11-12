// Sets (it is iterable)
// store data
// sets also have its own mwthods
// No inex-based access
// Order is not guaranteed 
// unique items only (no duplicates allowed)

// const numbers = new Set([1,2,3]);
// // const str = new Set("Subha");
// console.log(numbers);
// // console.log(str);  // iterable

// // console.log(numbers[2]); // undefined

// const useers = ['Ajit', 'Subha', 'Rahul','Adi'];
// const numbers = new Set();
// numbers.add(1);
// numbers.add(2);
// numbers.add(3);  // This way we can add item in Set().

// numbers.add('Ajit'); // Here we can add item of array , means diffrent data type.
// numbers.add(useers);
// numbers.add(['Ajit', 'Subha', 'Rahul','Adi']);
// numbers.add(['Ajit', 'Subha', 'Rahul','Adi']);  // We can add same array like this , because in JavaScript its seens to be a diffrent array.

// // has method
// if(numbers.has(1)){
//   console.log('1 is present');
// }
// else{
//   console.log('1 is not present');
// }
// console.log(numbers);

// Set is iterable
// const numbers = new Set();
// numbers.add(1);
// numbers.add(2);
// numbers.add(3);
// for(number of numbers){
//   console.log(number);
// }

// Let's understand when we need to use set

const myArray = [1,2,4,5,6,5,6];
const uniqueElement = new Set(myArray);
console.log(uniqueElement);
console.log(myArray);

// Find the length of Set
let length = 0;
for(element of uniqueElement){
  length++;
}
console.log("Numbers of unique element is:",length); //Numbers of unique element is: 5 