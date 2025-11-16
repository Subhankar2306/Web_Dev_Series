
const userMethods = {
  about : function(){
    return `${this.firstName} is ${this.age} years old.`;
  },
  is18 : function(){
    return this.age >= 18;
  },
  sing: function(){
    return 'he ha haha la la la'
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
  user.sing = userMethods.sing;
  return user;
}

const user1 = createUser('Subhankar', 'Dhal', 'subhankar@gamil.com', 24, 'address' );
const user2 = createUser('Mohit', 'Roy', 'mohitroy@gmail.com', 25, 'address' );
const user3 = createUser('Amit', 'Sen', 'amitsen@gamil.com', 27, 'address' );


console.log(user1.about());
console.log(user2.sing());