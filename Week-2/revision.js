// function sum(a, b)
// {
//     return a + b;
// }

// const ans = sum(3, 5);
// console.log(ans);

// function sum(a, b)
// {
//     return parseInt(a) + parseInt(b);
// }

// const ans = sum("3", 5);
// console.log(ans);


// function sum(n)
// {
//     return n * (n + 1) / 2;
// }

// const ans = sum(5);
// console.log(ans);


// const fs = require("fs"); // fs is a nodejs library
 
// const data = fs.readFileSync("/Users/gyanaranjansahoo/Desktop/Cohort 3.0/Web_Dev/Week-2/a.txt", "utf-8");
// const content = fs.readFileSync("/Users/gyanaranjansahoo/Desktop/Cohort 3.0/Web_Dev/Week-2/b.txt", "utf-8");

// console.log(data);
// console.log(content);


// Async funcions
// fs.readFile("/Users/gyanaranjansahoo/Desktop/Cohort 3.0/Web_Dev/Week-2/a.txt", "utf-8", function(err, contents)
// {
//     console.log(contents);
// });






// class Rectnagle{
//     constructor(width, height, color)
//     {
//         this.width = width;
//         this.height = height;
//         this.color = color;
//     }

//     area()
//     {
//         const area = this.width * this.height;
//         return area;
//     }
//     paint()
//     {
//         console.log("Painting with color : " + this.color );
//     }
    
// }
   
// const rect = new Rectnagle(2, 4, "blue");
// const area = rect.area();
// console.log(area);
// rect.paint();



// const date = new Date();
// console.log(date.getMonth());

// const map = new Map();
// map.set("name", "kirat");
// map.set("age", 30);
// console.log(map.get("name"));
    

// function logName()
// {
//     console.log("kirat");
// }

// setTimeout(logName, 3000);

function setTimeOutPromisified(ms)
{
    return new Promise(resolve => setTimeout(resolve, ms));
}

function callback()
{
    console.log("3 seconds have passed");
}

setTimeOutPromisified(3000).then(callback); // syntactically cleaner

