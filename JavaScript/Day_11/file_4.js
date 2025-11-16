//  arrow functions 
// arrow functions takes this form surrunding

// arrow functions this reffers to windows object, its not changable
const user1 = {
  firstName: 'Subha',
  age: 24,
  about: () => {
    // console.log(this);
    console.log(this.firstName,this.age);
  }
}

user1.about();  // undefined undefined
