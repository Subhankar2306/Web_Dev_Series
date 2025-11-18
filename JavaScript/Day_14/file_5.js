// same method in subclass

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

class Dog extends Animal{
  constructor(name, age, speed){
    super(name, age);
    this.speed = speed;
  }


  // Lets change in Dog eat 

  eat(){
    return `Modified food: ${this.name} is eating`
  }
  // make run method
  run(){
    return `${this.name} is running at ${this.speed} kmph speed`
  }
};  

// Object
const tommy = new Dog("Tommay", 1, 48);
console.log(tommy);

console.log(tommy.run());
console.log(tommy.eat());