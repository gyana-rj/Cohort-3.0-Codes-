// function sum(a, b)
// {
//     return a + b;
// }

// console.log(sum(2, 3));


// //"converting string to int"
// function sumConvert(a, b)
// {
//     return parseInt(a) + parseInt(b);
// }

// console.log(sumConvert("2", 3));


// // for the sum of 1 to n

// function sumOfOneToN(a)
// {
//     let value = a * (a + 1) / 2;
//     return value;
// }

// const ans = sumOfOneToN(5);
// console.log(ans);



// const fs = require("fs");

// const contents = fs.readFileSync("/Users/gyanaranjansahoo/Desktop/Cohort 3.0/Web_Dev/Practice/b.txt", "utf-8");
// console.log(contents);

// fs.readFile("/Users/gyanaranjansahoo/Desktop/Cohort 3.0/Web_Dev/Practice/a.txt", "utf-8", function (err, contents){
//  console.log(contents);
// });


// function add(a, b)
// {
//     return a + b;
// }

// function sub(a, b)
// {
//     return a - b;
// }

// function mul(a, b)
// {
//     return a * b;
// }

// function div(a, b)
// {
//     return a / b;
// }

// function doOperation(a, b, op)
// {
//     return op(a, b);
// }

// console.log(doOperation(1, 2, add));






// const fs = require("fs");

// function print(err, data)
// {
//     if(err)
//     {
//         console.log("File not found");
//     }
//     else{
//         console.log(data);
//     }
// }

// fs.readFile("/Users/gyanaranjansahoo/Desktop/Cohort 3.0/Web_Dev/Practice/a.txt", "utf-8", print);

// fs.readFile("/Users/gyanaranjansahoo/Desktop/Cohort 3.0/Web_Dev/Practice/b.txt", "utf-8", print);

// console.log("Done!!");


// function callback()
// {
//     console.log("Set time out is called");
// }


// console.log("Hi there");

// setTimeout(callback, 5000);

// console.log("The party is barely started...");


// class Rectangle{
//     constructor(height, width, color)
//     {
//         this.height = height;
//         this.width = width;
//         this.color = color;
//     }

//     area()
//     {
//         const area = this.height * this.width;
//         return area;
//     }

//     paint()
//     {
//         console.log("Painting with color " + this.color);
//     }


// }


// const rect = new Rectangle(2, 4, "blue");
// console.log(rect.area());
// rect.paint();



// // // // // // // // // const data = new Date();
// // // // // // // // // console.log(data.getDay());
// // // // // // // // // console.log(data.getDate());

// // // // // // // // // const map = new Map();
// // // // // // // // // map.set('name', 'harkirat');
// // // // // // // // // map.set('age', '34');

// // // // // // // // // const firstName = map.get('name');
// // // // // // // // // console.log(firstName);


// // // // // // // // function callback(){
// // // // // // // //     console.log("SetTimeOut is called");
// // // // // // // // }

// // // // // // // // setTimeout(callback, 3000);



// // // // // // // function setTimeoutPromisified(ms)
// // // // // // // {
// // // // // // //     return new Promise(resolve => setTimeout(resolve, ms));
// // // // // // // }



// // // // // // // function callback()
// // // // // // // {
// // // // // // //     console.log("Callback is called");
// // // // // // // }


// // // // // // // setTimeoutPromisified(3000).then(callback);


// // // // // // function waitFor3s(resolve)
// // // // // // {
// // // // // //     setTimeout(resolve, 3000);
// // // // // // }


// // // // // // function setTimeoutPromisified()
// // // // // // {
// // // // // //     return new Promise(waitFor3s);
// // // // // // }

// // // // // // function main()
// // // // // // {
// // // // // //     console.log("The main function is called");
// // // // // // }

// // // // // // setTimeoutPromisified().then(main);



// // // // // function random(resolve){
// // // // //     setTimeout(resolve, 3000);
// // // // // }

// // // // // const p = new Promise(random);

// // // // // function callback(){
// // // // //     console.log("Promise succeded");
// // // // // }

// // // // // p.then(callback);


// // // const fs = require("fs");

// // // function readFile(resolve)
// // // {
// // //     // resolve();
// // //     setTimeout(resolve, 3000);
// // // }


// // // const p = new Promise(readFile);

// // // function callback()
// // // {
// // //     fs.readFile("/Users/gyanaranjansahoo/Desktop/Cohort 3.0/Web_Dev/Practice/a.txt", "utf-8", function (err, data){
// // //         console.log(data);
// // //     });
// // // }

// // // p.then(callback);


// // const fs = require("fs");

// // function readTheFile(sendTheFinalValueHere){
// //     fs.readFile("/Users/gyanaranjansahoo/Desktop/Cohort 3.0/Web_Dev/Practice/a.txt", "utf-8", function(err, data){
// //         sendTheFinalValueHere(data);
// //     });
// // }

// // function readFile()
// // {
// //     return new Promise(readTheFile);
// // }



// // const p = readFile();

// // function callback(contents)
// // {
// //     console.log(contents);
// // }

// // p.then(callback);





// function doAsynOps(resolve){
//     setTimeout(resolve, 3000);
// }

// const p = new Promise(doAsynOps);

// function callback(){
//     console.log("Callback is called");
// }

// p.then(callback);



// function setTimeOutPromisified(time){
//     return new Promise(function(resolve){
//         setTimeout(resolve, time);
//     })
// }


// const p = setTimeOutPromisified(5000);

// function callback(){
//     console.log("The end is the begining and the begining is the end");
// }
// p.then(callback);


// function setTimeOutPromisified(duration){
//     return new Promise(function (resolve){
//         setTimeout(resolve, duration);
//     });
// }

// function callback(){
//     console.log("SetTimeOut has passed");
// }

// setTimeOutPromisified(3000).then(callback);


// setTimeout(function (){
//     console.log("hi");
//     setTimeout(function (){
//         console.log("hello");
//     setTimeout(function(){
//         console.log("hello there");
//     }, 4000);
//     }, 3000);
// }, 1000);



// function step3Done(){
//     console.log("hi there ");
// }


// function step2Done(){
//     console.log("hello");
//     setTimeout(step3Done, 4000);
// }


// function step1Done(){
//     console.log("hi");
//     setTimeout(step2Done, 3000);
// }


// setTimeout(step1Done, 1000);


// function setTimeOutPromisified(duration){
//     return new Promise(function (resolve){
//         setTimeout(resolve, duration);
//     });
// }


// setTimeOutPromisified(1000).then(function(){
//     console.log("hi");
//     setTimeOutPromisified(3000).then(function(){
//         console.log("Hello");
//         setTimeOutPromisified(4000).then(function(){
//             console.log("hello there");
//         });
//     });
// });



function setTimeOutPromisified(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}


async function solve(){
    await setTimeOutPromisified(1000);
    console.log("hi");

    await setTimeOutPromisified(3000);
    console.log("hello");

    await setTimeOutPromisified(5000);
    console.log("hello there");
}

solve();
