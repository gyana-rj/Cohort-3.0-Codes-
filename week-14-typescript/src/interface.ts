// function greet(user : {
//     name : string,
//     age : number
// }){
//     console.log(`Hello ${user.name}`)
// }

// greet({
//     name : "flipper",
//     age : 21
// })

interface UserType {
    firstName : string,
    lastName : string,
    age : number
}

function greet(user : UserType){
    if(user.age > 18){
        return true;
    }
    else{
        return false
    }
}