// short syntex

// const user1 = {
//   firstName: 'Subha',
//   age: 24,
//   about: () => {
//     // console.log(this);
//     console.log(this.firstName,this.age);
//   }
// }


const user1 = {
  firstName: 'Subha',
  age: 24,
  about(){
    console.log(this.firstName,this.age);
  }
}
user1.about();