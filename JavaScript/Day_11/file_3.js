// 

const user1 = {
  firstName: 'Subha',
  age: 24,
  about: function(){
    console.log(this.firstName,this.age);
  }
}

// don't do this mistake

// user1.about();

// const myFunc = user1.about;
// myFunc(); // it will show undefined undefined, because here this refers to window object

// to execute this we need to use bind() method

const myFunc = user1.about.bind(user1);  
myFunc();  // Subha 24



