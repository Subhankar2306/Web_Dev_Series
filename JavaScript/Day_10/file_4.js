// Clone using Object.assign

// const obj = {
//   key1: 'value1',
//   key2: 'value2'
// };
// const obj2 = obj;
// If we want to add new key value in obj 
// obj.key3 = 'value3';
// When i add key value in obj it will reflect on obj2 also . So to avoid it we need to do clone using Sprade method.

// const obj2 = {...obj}
// obj.key3 = 'value3';
// console.log(obj);
// console.log(obj2);


// Another way to clone object

const obj = {
  key1: 'value1',
  key2: 'value2'
};

const obj2 = Object.assign({}, obj);
obj.key3 = 'value3';
console.log(obj);
console.log(obj2);
