// const userMethods = {
//   about : function(){
//     return `${this.firstName} is ${this.age} years old.`;
//   },
//   is18 : function(){
//     return this.age >= 18;
//   },
//   sing: function(){
//     return 'he ha haha la la la'
//   }
// }



// Use of prototype

function createUser(firstName, lastName, email, age, address, ){
  const user = Object.create(createUser.prototype);  
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.age = age;
  user.address = address;
  return user;
}


// console.log(createUser.prototype);

createUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old.`;
  };
createUser.prototype.is18 = function(){
    return this.age >= 18;
  };
createUser.prototype.sing= function(){
    return 'he ha haha la la la';
  };



const user1 = createUser('Subhankar', 'Dhal', 'subhankar@gamil.com', 24, 'address' );
const user2 = createUser('Mohit', 'Roy', 'mohitroy@gmail.com', 25, 'address' );
const user3 = createUser('Amit', 'Sen', 'amitsen@gamil.com', 27, 'address' );

console.log(user1);
console.log(user1.about());
console.log(user1.sing());