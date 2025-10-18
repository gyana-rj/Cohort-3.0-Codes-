// function sum(a, b){
//     return a + b;
// }

// let ans =  sum(2, 3);
// //console.log(ans);


// function naturalNumSum(n){
//     let ans = n * (n - 1) / 2;
//     return ans;
// }

// let result = naturalNumSum(100);
// //console.log(result);




// const fs = require("fs"); // importing the fs library

// // const contents = fs.readFile("/Users/gyanaranjansahoo/Desktop/Cohort /Web_Dev/Practice/a.txt", "utf-8");
// // console.log(contents);

// fs.readFile("/Users/gyanaranjansahoo/Desktop/Cohort /Web_Dev/Practice/b.txt", "utf-8", function(err, contents){
//     console.log(contents);
// });



// const fs = require("fs");

// function print(err, data){
//     if(err){
//         console.log("File not found");
//     }
//     console.log(data);
// }

// fs.readFile("/Users/gyanaranjansahoo/Desktop/Cohort /Web_Dev/Practice/a.txt", "utf-8", print);
// fs.readFile("/Users/gyanaranjansahoo/Desktop/Cohort /Web_Dev/Practice/b.txt", "utf-8", print);

// console.log("Done!");



// function timeout(){
//     console.log("Click the button");
// }

// console.log("Hi");

// setTimeout(timeout, 1000);

// console.log("Welcome to loupe");

// let c = 0;
// for(let i = 0; i < 1000000000; i++){
//     c += i;
// }

// console.log("Expensive operation done");


// class Rectangle{
//     constructor(width, height, color){
//         this.width = width;
//         this.height = height;
//         this.color= color
//     }

//     area(){
//         return this.width * this.height;
//     }

//     paint(){
//         console.log("The color of the house is : " + this.color);
//     }

// }

// const rect = new Rectangle(2, 4, "red");
// console.log(rect.area());
// rect.paint();


// const now = new Date();
// console.log(now.getDay());

// const map = new Map();
// map.set("name", "Alice");
// map.set("age", 30);
// console.log(map.get("name"));

// function waitFor3s(resolve){
//     setTimeout(resolve, 3000);
// }

// function main(){
//     console.log("Main is called");
// }

// waitFor3s(main);

// function setTimeoutPromosified(ms){
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// function callback(){
//     console.log("3 seconds have passed");
// }

// setTimeoutPromosified(3000).then(callback);



// const fs = require("fs");
// const { resolve } = require("path");

// function readTheFile(sendTheFinalValueHere){
//     fs.readFile("/Users/gyanaranjansahoo/Desktop/Cohort /Web_Dev/Practice/a.txt", "utf-8", function(err, data){
//         sendTheFinalValueHere(data);
//     })
// }

// function readFile(){
//     return new Promise(readTheFile);
// }

// function callback(contents){
//     console.log(contents);
// }

// readFile().then(callback);




// Async Await 
// function setTimeoutPromosified(ms){
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// async function solve() {
//     await setTimeoutPromosified(1000);
//     console.log("1 sec has passed");

//     await setTimeoutPromosified(2000);
//     console.log("2 sec have passed");

//     await setTimeoutPromosified(3000);
//     console.log("3 sec have passed");
// }

// solve();

// const path = require("path");
// console.log(__dirname);

// console.log(path.join(__dirname), "index.mjs");


// Assignment 1 create a cli of your won that counts the number of words and return it
const fs = require("fs");
const { Command } = require("commander"); 
const program = new Command();

program
  .name("File Related CLI")
  .description("CLI to do file based tasks")
  .version("0.8.0");

program.command("count")
  .description("count the number of words in a file")
  .argument("<file>", "file to count")
  .action((file) => {
    fs.readFile(file, "utf-8", (err, data) => {
      if (err) {
        console.error(err.message);
      } else {
        const lines = data.split("\n").length;
        console.log("Number of lines: " + lines);
      }
    });
  });

program.parse();