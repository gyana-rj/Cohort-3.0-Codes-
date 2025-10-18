function greet(firstName : string){
    console.log(`Hello ${ firstName}`);
}

greet('flipper');

const sum = ((a : number, b : number): number => {
    return a + b
})

console.log(`Sum is : ${sum(2, 3)}`);

function isLegal(age : number): boolean{
    if(age > 18)
        return true;
    else{
        return false;
    }
}

console.log(isLegal(19));

function delayedCall(fn : () => void){
    setTimeout(fn, 1000);
}

delayedCall(() =>{
    console.log("hello detective")
})


