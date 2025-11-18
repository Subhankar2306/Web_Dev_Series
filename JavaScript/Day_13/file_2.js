// new keyword

// constructor function

function CreateUser(firstName, lastName, email, age, address, ){
  // const user = Object.create(createUser.prototype);  

  

  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.age = age;
  this.address = address;
  // return this;
}

// console.log(createUser.prototype);

CreateUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old.`;
  };
CreateUser.prototype.is18 = function(){
    return this.age >= 18;
  };
CreateUser.prototype.sing= function(){
    return 'he ha haha la la la';
  };


const user1 = new CreateUser('Subhankar', 'Dhal', 'subhankar@gamil.com', 24, 'address' );
const user2 = new CreateUser('Mohit', 'Roy', 'mohitroy@gmail.com', 25, 'address' );
const user3 = new CreateUser('Amit', 'Sen', 'amitsen@gamil.com', 27, 'address' );

console.log(user1);
console.log(user1.about());
console.log(user1.sing());