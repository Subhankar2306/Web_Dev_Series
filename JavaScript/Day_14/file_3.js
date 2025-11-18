// practice
// extends keyword


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


class Dog extends Animal{};  // Here Dog act like Subclass.

const tommy = new Dog("Tommay", 1);
console.log(tommy);  // Here when we call Dog class , it will check is there are any constructor property , if not available then it will Extends from Animal Class