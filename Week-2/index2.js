// class Rectangle{
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
//         console.log("Painting with color " + this.color);
//     }
// }

// const rect = new Rectangle(2, 4, "blue");
// const rect2 = new Rectangle(10, 20, "black");

// rect.paint();
// const area = rect.area();
// console.log(area);

// rect2.paint();
// const area2 = rect2.area();
// console.log(area2);


// const date = new Date();
// console.log(date.getMonth());


// const map = new Map();
// map.set("name", "kirat");
// map.set("age", 27);
// console.log(map.get("name"));


// function logName()
// {
//     console.log("What do you truly desire 🙂‍↕️");
// }

// setTimeout(logName, 5000);


// function waitfor3S(resolve)
// {
//     setTimeout(resolve, 5000);
// }

// function main()
// {
//     console.log("Hello there");
// }

// waitfor3S(main);

// function setTimeoutPromisified(ms)
// {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// function callback()
// {
//     console.log("You have my word.");
// }

// setTimeoutPromisified(5000).then(callback);




// function random(resolve)
// {
//     setTimeout(resolve, 4000);
// }


// const p = new Promise(random);

// function callback()
// {
//     console.log("promise succeded");
// }

// p.then(callback);


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

// function callback(contents){
//     console.log(contents)
// }
// p.then(callback);



// function readFile(resolve) {
//     setTimeout(resolve, 5000);
// }

// function setTimeoutPromisified() {
//     return new Promise(readFile);
// }

// const p = setTimeoutPromisified();

// function callback() {
//     console.log("5 sec passed");
// }

// p.then(callback);




// the real operation that we want to promisify
// function doAsyncOp(resolve)
// {
//     setTimeout(resolve, 3000);
// }


// function setTimeoutPromisified()
// {
//     return new Promise(doAsyncOp);
// }

// const p = setTimeoutPromisified();

// function callback()
// {
//     console.log("3 seconds have passed.")
// }

// p.then(callback);





function promiseFn(resolve)
{
    let c = 0;
    for(let i = 0; i < 1000000; i++)
    {
        c++;
    }
    resolve("Hi kirat, where have you been ?");
}

const p = new Promise(promiseFn);

function callback(str)
{
    console.log(str);
}
p.then(callback);