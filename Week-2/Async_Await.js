// function setTimeOutPromisified(duration)
// {
//     return new Promise(function (resolve){
//         setTimeout(resolve, duration);
//     });
// }

// function callback()
// {
//     console.log("5 seconds have passed");
// }

// setTimeOutPromisified(5000).then(callback);


// Callback Hell
// setTimeout(function(){
//     console.log("Love");
//     setTimeout(function(){
//     console.log("You");
//     setTimeout(function (){
//         console.log("3000");
//     }, 5000)
//     }, 3000)
// }, 1000);


// function setTimeOutPromisified(duration)
// {
//     return new Promise(function (resolve){
//         setTimeout(resolve, duration);
//     });
// }

// setTimeOutPromisified(1000).then(function(){
//     console.log("hi");

//     setTimeOutPromisified(3000).then(function(){
//         console.log("hello");

//         setTimeOutPromisified(5000).then(function(){
//             console.log("Hello There ");
//         })
//     })
// })



// Promise Chaining
// setTimeOutPromisified(1000).then(function(){
//     console.log("Love");
//     return setTimeOutPromisified(3000);
// }).then(function(){
//     console.log("You");
//     return setTimeOutPromisified(5000);
// }).then(function(){
//     console.log("3000");
// })


// Async Await

function setTimeOutPromisified(ms)
{
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function solve() {
    await setTimeOutPromisified(1000);
    console.log("hi");
    await setTimeOutPromisified(3000);
    console.log("hello");
    await setTimeOutPromisified(5000);
    console.log("hello there");
}

solve();

console.log("It is a async await example");