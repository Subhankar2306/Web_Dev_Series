// getter and setters

// class Person{
//   constructor(firstName, lastName, age){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//   }

//   // fullName(){ 
//   get fullName(){        // get method , now its act like property not a function
//     return `${this.firstName} ${this.lastName}`
//   }
// }


// const person1 = new Person('Subhankar', 'Dhal', 23);
// console.log(person1);

// // console.log(person1.fullName());

// // I want to use a method like property 
// console.log(person1.fullName);


// class Person{
//   constructor(firstName, lastName, age){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//   }
//   get fullName(){        
//     return `${this.firstName} ${this.lastName}`
//   }
//   setName(firstName, lastName){
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
// }


// const person1 = new Person('Subhankar', 'Dhal', 23);
// // console.log(person1);
// // console.log(person1.fullName);

// console.log(person1.firstName);
// console.log(person1.lastName);

// person1.setName('Mohit', 'Shrma');

// console.log(person1.firstName);
// console.log(person1.lastName);




class Person{
  constructor(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  get fullName(){        
    return `${this.firstName} ${this.lastName}`
  }
  set fullName(fullName){
    const [firstName, lastName] = fullName.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
  }

}
const person1 = new Person('Subhankar', 'Dhal', 23);
// console.log(person1);
// console.log(person1.fullName);

person1.fullName = "Subhankar Dhal";
console.log(person1);
console.log(person1.fullName);