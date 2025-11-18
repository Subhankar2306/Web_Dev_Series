// new keyword

function createUseer(firstName, age){
  this.firstName = firstName;
  this.age = age;
}


createUseer.prototype.about = function(){
  console.log(this.firstName, this.age);
}
const user1 = new createUseer("Subhankar", 23);
console.log(user1);

// new keyword 
// 1. create empty object ths = {}
// 2. return this
// 3. Object.create(createUser.prototype);

user1.about();  // Subhankar 23