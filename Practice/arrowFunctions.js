// const sum = (a, b) => {
//     return a + b;
// }

// app.get("/sum", (req, res) => {

// })

const arr = [1, 2, 3, 4, 5, 6];

function transform(i){
    return i * 2;
}

const ans = arr.map(transform);
console.log(ans);

// function filterLogic(n){
//     if(n % 2 == 0){
//         return true;
//     }else{
//         return false;
//     }
// }

const result = arr.filter((n) => {
    if(n % 2 == 0){
        return true;
    }else{
        return false;
    }
});
console.log(result);


