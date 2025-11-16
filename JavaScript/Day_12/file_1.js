// const { use } = require("react");

// const user = {
//   firstName: 'Subhankar',
//   lastName: 'Dhal',
//   email: 'subhankar@gmail.com',
//   age: 24,
//   address: "Sahara, Purba Medinipur, West  Bengal, 721446",
//   about: function(){
//     return `${this.firstName} is ${age} years old`;
//   },
//   is18: function(){
//     return this.age >=18;
//   }
// }

// const aboutUser = user.about();


// fuction (that function create object)
// 2.) add key value pair
// 3.) return the Object


// function createUser(firstName, lastName, email, age, address, ){
//   const user = {};
//   user.firstName = firstName;
//   user.lastName = lastName;
//   user.email = email;
//   user.age = age;
//   user.address = address;
//   user.about = function(){
//     return `${this.firstName} is ${this.age} years old.`;
//   },
//   user.is18 = function(){
//     return this.age >=18;
//   }
//   return user;
// }

// const user1 = createUser('Subhankar', 'Dhal', 'subhankar@gamil.com', 24, 'address' );

// console.log(user1);

// const is18 = user1.is18();
// const about = user1.about();
// console.log(about);
// console.log(is18);




const userMethods = {
  about : function(){
    return `${this.firstName} is ${this.age} years old.`;
  },
  is18 : function(){
    return this.age >= 18;
  }
}

function createUser(firstName, lastName, email, age, address, ){
  const user = {};
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.age = age;
  user.address = address;
  user.about = userMethods.about;
  user.is18 = userMethods.is18;
  return user;
}

const user1 = createUser('Subhankar', 'Dhal', 'subhankar@gamil.com', 24, 'address' );
const user2 = createUser('Mohit', 'Roy', 'mohitroy@gmail.com', 25, 'address' );
const user3 = createUser('Amit', 'Sen', 'amitsen@gamil.com', 27, 'address' );


console.log(user1.about());
console.log(user2.about());


