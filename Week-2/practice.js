// Assignment 1
// function filterUsers(users){
//     return users.filter(user => user.age > 18 && user.gender === "female")
    
// }


// let users = [
//     {firstName : "Kirat", age : 27, gender : "male" },
//     {secondName : "Striver", age : 25, gender : "male"},
//     {thirdName : "Khusboo", age : 26, gender : "female"}
// ]


// const ans = filterUsers(users);
// console.log(ans);


// for practice 
// qs - user must be above 18 and stack is mern


// function filterFolks(folks)
// {
//     return folks.filter(folks => folks.age > 18 && folks.stack === "mern");
// }


// let folks = [
//     {fName : "Raj", age : 25, gender : "male", stack : "java"},
//     {sName : "kirat", age : 23, gender : "male", stack : "mern"},
//     {tName : "khusboo", age : 24, gender : "female", stack : "docker"}
// ]

// const ansFinal = filterFolks(folks);
// console.log(ansFinal);



// const fs = require("fs");

// const contents = fs.readFileSync("/Users/gyanaranjansahoo/Desktop/Cohort 3.0/Web_Dev/Week-2/a.txt", "utf-8");
// console.log(contents);

// const data = fs.readFileSync("/Users/gyanaranjansahoo/Desktop/Cohort 3.0/Web_Dev/Week-2/b.txt", "utf-8");
// console.log(data);



// very first async function

// const fs = require("fs");

// function print(err, data)
// {
//     console.log(data);
// }
// fs.readFile("/Users/gyanaranjansahoo/Desktop/Cohort 3.0/Web_Dev/Week-2/a.txt", "utf-8", print);
// fs.readFile("/Users/gyanaranjansahoo/Desktop/Cohort 3.0/Web_Dev/Week-2/b.txt", "utf-8", print);

// console.log("Helllo detective");


// const fs = require("fs");

// function typeOfError(err, data)
// {
//     console.log(typeof err);
// }

// fs.readFile("/Users/gyanaranjansahoo/Desktop/Cohort 3.0/Web_Dev/Week-2/bww.txt", "utf-8", typeOfError);



// function timeOut()
// {
//     console.log("Old friend 😎");
// }

// setTimeout(timeOut, 2000);

// console.log("welcome to New Orleans");

// let c = 0;
// for(let i = 0; i < 100000000; i++)
// {
//     c += i;
// }

// console.log("I say when we are done");



// class Rectangel{
//     constructor(width, length, color)
//     {
//         this.width = width;
//         this.length = length;
//         this.color = color;
//     }

//     area()
//     {
//         const area = this.width * this.length;
//         return area;
//     }

//     paint()
//     {
//         console.log("the color of the backgroud is " + this.color);
//     }
// }

// const rect = new Rectangel(2, 3, "blue");
// const ans = rect.area();
// console.log(ans);
// rect.paint();


// const map = new Map();
// map.set("name", "kirat");
// map.set("age", 27);
// console.log(map.get("name"));




// function setTimeoutPromisified(ms)
// {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }


// function callback()
// {
//     console.log("3 seconds have passed");
// }

// setTimeoutPromisified(3000).then(callback);


// const fs = require("fs");

// function readTheFile(resolve)
// {
//     fs.readFile("/Users/gyanaranjansahoo/Desktop/Cohort 3.0/Web_Dev/Week-2/a.txt", "utf-8", function(err, data){
//         resolve(data);
//     })
// }

// function readFile(fileName)
// {
//     return new Promise(readTheFile);
// }


// const p = readFile();

// function callback(contents)
// {
//     console.log(contents);
// }

// p.then(callback);



// function timeOut(resolve)
// {
//     setTimeout(resolve, 3000);
// }


// function setTimeoutPromisified()
// {
//     return new Promise(timeOut);
// }


// const p = setTimeoutPromisified()

// function callback()
// {
//     console.log("3 sec have passed");
// }

// p.then(callback);




function doAsyncOp(resolve)
{
    setTimeout(resolve, 3000);
}


function setTimeoutPromisified()
{
    return new Promise(doAsyncOp);
}

const p = setTimeoutPromisified();

function callback()
{
    console.log("Every beginning is an end, and every ending is a new beginning");
}

p.then(callback);



