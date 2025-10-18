// let firstName = "Silverback";
// const age = 30;
// var isStudent = true;

// console.log(firstName);
// console.log(age);
// console.log(isStudent);

// var isStudent = true;
// console.log(isStudent);
// var isStudent = "Harkirat";
// var isStudent = 10;
// console.log(isStudent);

// let firstName = "Harkirat";
// firstName = "SilverBack";
// console.log(firstName);

// it changes the value


// const firstName = "Harkirat";
// firstName = "SilverBack";
// console.log(firstName);

// const secondName = "Silverback";
// console.log("before changing ");
// secondName = 1;
// console.log("after changing");


// let user1 = "harkirat";
// let user2 = "silverback";
// let user3 = "jack";

// console.log(user1);

// let users = ["harkirat", "silverback", "jack"];
// console.log(users[0]);
// console.log(users);

// let sum = 10 + 5;
// console.log(sum);


// let age = 19;
// let canVote = (age > 18);  // it will print true or false
// console.log(canVote);  


// function greet(name)
// {
//     return "Hello, " + name;
// }

// let ans = greet("harkirat");
// let ans1 = greet("raman");
// let ans2 = greet("kirat");

// console.log(ans);
// console.log(ans1);
// console.log(ans2);


// function sum(a, b)
// {
//     let totalSum = a + b;
//     return totalSum;
// }

// let ans53 = sum(1, "kirat");
// let ans42 = sum(3, 4);

// console.log(ans53);
// console.log(ans42);

// function canVote(age){
//     if(age > 18)
//     {
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// let person = canVote(19);
// console.log(person);


// function canVote(age)
// {
//     if(age > 18)
//     {
//         console.log("You are a adult.");
//     }
//     else 
//     {
//         console.log("You are a minor.");
//     }
// }

// canVote(19);
// canVote(16);


// let users = ["hemish", "jack", "randall"];
// for(let i = 0; i < users.length; i++)
// {
//     console.log(users[i]);
// }


// let user1 = {
//     firstName : "elijah",
//     age : 1000,
//     gender : "male"
// }

// console.log(user1.firstName);
// console.log(user1["firstName"]);


//Assignment 3
// function greet(user)
// {
//     console.log("Hi, Mr." + user.firstName + " your age is : " + user.age);
// }

// function canVote(user)
// {
//     if(user.age > 18)
//     {
//         console.log("You are eligible for vote");
//     }
//     else
//     {
//         console.log("No, you are not eligible for vote");
//     }
// }

// let user = {
//     firstName : "Harkirat",
//     age : 20,
//     gender : "male"
// }

// greet(user);
// canVote(user);

// let arr = ["harkirat", 21, {thirdName:"harkirat", age: 21, cities : ["chandigarh", "delhi", "banglore", {country:"japan", city: "tokyo"}]
// }];
// const val1 = arr[2];
// console.log(val1);

// const val2 = {
//     firstName : "kirat",
//     age : 20
// }

// console.log(val2);


//Assignment

function filterUsers(users)
{
    return users.filter(user => user.age > 18 && user.gender === "male")
}

let users = 
[
    {firstName : "harkirat", age: 20, gender : "male"},
    {secondName : "striver", age : 23, gender : "male"},
    {thirdName : "khusboo", age : 24, gender : "female"}
]

const ans = filterUsers(users);
console.log(ans);

