// practice

class Animal{
  constructor(name, age){
    this.name = name;
    this.age = age;
  }

  eat(){
    return `${this.name} is eating`;
  }

  isSuperCute(){
    return this.age <= 1;
  }

  isCute(){
    return true;
  }

}

// const animal1 = new Animal ('Cat', 3);
// console.log(animal1);
// console.log(animal1.name);
// console.log(animal1.age);
// console.log(animal1.eat());
// console.log(animal1.isSuperCute());



// dog class

class Dog{
  constructor(name, age){
    this.name = name;
    this.age = age;
  }

  eat(){
    return `${this.name} is eating`;
  }

  isSuperCute(){
    return this.age <= 1;
  }

  isCute(){
    return true;
  }

}

const tommy = new Dog("Tommay", 1);
console.log(tommy);