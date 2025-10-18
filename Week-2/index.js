// function sum(a, b)
// {
//     return a + b;
// }

// let ans = sum(3,6);
// console.log(ans);




// function sum(a, b)
// {
//     return parseInt(a) + parseInt(b);  // converting string into a number
// }

// let ans = sum("20", 30);
// console.log(ans);


// sum of numbers 1 to n

// function sumOfNumbers(n)
// {
//     let sum = 0;
//     for(let  i = 0; i <= n; i++)
//     {
//         sum += i;
//     }
//     return sum;
// }

// const ans = sumOfNumbers(5);
// console.log(ans);


//I/O heavy operations
// const fs = require("fs");

// const contents = fs.readFile("/Users/gyanaranjansahoo/Desktop/Cohort 3.0/Web_Dev/Week-2/a.txt", "utf-8"); //asyncronously
// console.log(contents);

// const data = fs.readFileSync("/Users/gyanaranjansahoo/Desktop/Cohort 3.0/Web_Dev/Week-2/b.txt", "utf-8"); //syncronously
// console.log(data);


// Functional arguments
// function sum(a, b)
// {
//     return a + b;
// }
// function multiply(a, b)
// {
//     return a * b;
// }
// function subtract(a, b)
// {
//     return a - b;
// }
// function divide(a, b)
// {
//     return a / b;
// }

// function doOperation(a, b, op)
// {
//     return op(a, b);
// }

// // console.log(sum(1, 2));
// console.log(doOperation(1, 2, sum));


// Very first asyncronous function
// const fs = require("fs");

// function print(err, data)
// {
//     if(err)
//     {
//         console.log("File not found!!");
//     }
//     else
//     {
//         console.log(data);
//     }
// }

// fs.readFile("/Users/gyanaranjansahoo/Desktop/Cohort 3.0/Web_Dev/Week-2/a.txt", "utf-8", print);
// fs.readFile("/Users/gyanaranjansahoo/Desktop/Cohort 3.0/Web_Dev/Week-2/b.txt", "utf-8", print);

// console.log("Done!!");




// function timeout()
// {
//     console.log("Old friend 😄");
// }

// console.log("Hi");

// setTimeout(timeout, 1000);

// console.log("Welcome to New Orleans");







// function timeout()
// {
//     console.log("Old friend 😄");
// }

// console.log("Hi");

// setTimeout(timeout, 1000);

// console.log("Welcome to New Orleans");

// let c = 0;

// for(let i  = 0; i < 1000000000; i++)
// {
//     c += i;
// }

// console.log("pass the glass");


const fs = require("fs");

function cb(err, data)
{
    console.log(typeof err);
}

fs.readFile("a.txt", "utf-8", cb)