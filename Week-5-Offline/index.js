// function sum(a, b){
//     return a + b;
// }

// const sum = (a, b) =>{
//     return a + b;
// }

// const ans = sum(1, 2);
// console.log(ans);

// app.get("/sum", function(req, res){

// })

// app.get("/sum", (req, res) =>{

// })

const input = [1, 2, 3, 4, 5];

// const newArr = [];

// for(let i = 0; i < input.length; i++){
//     newArr.push(input[i] * 2);
// }

// console.log(newArr);


//using map
// slightly a cleaner syntax comparing to thh above syntax

const ans = input.map(function(i){
    return i * 2;
})

console.log(ans);



const arr = [1, 2, 3, 4, 5];

const newArr2 = [];

for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 == 0){
        newArr2.push(arr[i]);
    }
}

console.log(newArr2);


function filterLogic(n){
    if(n % 2 == 0){
        return true;
    }
    else{
        return false;
    }
}

const answer = arr.filter(filterLogic);
console.log(answer);


console.log("john". startsWith("j"));
