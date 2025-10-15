// .Object Inside Array 
const users = [
    {userId : 1, firstName : "Subha", gender : "male"},
    {userId : 2, firstName : "Sankha", gender : "male"},
    {userId : 3, firstName : "Nilesh", gender : "male"},
] 
// console.log(users);
// console.log(users[1].firstName, users[1].gender);
// for(let user of users){
//     console.log(user.firstName, user.gender);
// } 


//  Nested Destructuring
const [{firstName : user1FirstName, userId}, , {firstName : user3FirstName}] = users;
console.log(user1FirstName, userId, user3FirstName);