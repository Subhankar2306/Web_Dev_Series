//  class keyword

class CreateUser{
  constructor(firstName, lastName, email, age, address){
    // console.log('Constructor call');
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
  }

  about(){
    return `${this.firstName} is ${this.age} years old.`;
  }
  is18(){
    return this.age >= 18;
  }
  sing(){
    return 'he ha haha la la la';
  }
  // hoby(h){
  //   console.log(h);
  // }

}


const user1 = new CreateUser('Subhankar', 'Dhal', 'subhankar@gamil.com', 24, 'address' );
const user2 = new CreateUser('Mohit', 'Roy', 'mohitroy@gmail.com', 25, 'address' );
const user3 = new CreateUser('Amit', 'Sen', 'amitsen@gamil.com', 27, 'address' );

console.log(user1.firstName);
console.log(Object.getPrototypeOf(user1));

// user1.hoby("Music");

