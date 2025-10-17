// Practice Questions

// function souma(arre,rengeee)
// {
//   console.log("Hello");
// }
// const arr = [1,2,3,4,5];
// console.log(arr, 20);

// function NameAge(Name, age){
//   return `My Name is ${Name} and My Age is ${age}`;
// }
// const result = NameAge("Pravat", 24);
// console.log(result);
// // console.log(NameAge("Subhankar", 24));

console.log("Welcome to bajar Kolkata");
let SAmount = prompt("Enter Your Amount");
if (SAmount <= 10000 && 9000 <= SAmount) {
  console.log("Your Amount RS:-", SAmount);
  let Dis = (SAmount * 20) / 100;
  console.log("Your Discount RS:", Dis);
  let PAmount = SAmount - Dis;
  console.log("Your Payable Amount Rs :-", PAmount);
} else if (SAmount <= 9000 && 8000 <= SAmount) {
  console.log("Your Amount RS:-", SAmount);
  let Dis = (SAmount * 15) / 100;
  console.log("Your Discount RS:", Dis);
  let PAmount = SAmount - Dis;
  console.log("Your Payable Amount Rs :-", PAmount);
} else if (SAmount < 8000 && 7000 <= SAmount) {
  console.log("Your Amount RS:-", SAmount);
  let Dis = (SAmount * 10) / 100;
  console.log("Your Discount RS:", Dis);
  let PAmount = SAmount - Dis;
  console.log("Your Payable Amount Rs :-", PAmount);
} else {
  console.log("Your Amount RS:-", SAmount);
  console.log("No Discount");
  console.log("Your Payable Amount Rs :-", SAmount);
}
