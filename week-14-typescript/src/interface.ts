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
    firstName : string;
    lastName : string;
    age : number;
}

function greet(user : UserType){
    if(user.age > 18){
        return true;
    }
    else{
        return false
    }
}

interface User{
    name : string;
    age : number;
    address ?: {// to make address optional field you have to add ?
        city : string;
        country : string;
        pincode : number;
    }
}

let user1 : User = {
    name : "sharma",
    age : 20,
}

let user : User = {
    name : "tee",
    age : 20,
    address : {
        city: "Dehradun",
        country : "India",
        pincode : 248001
    }
}

function isLegal(user : User) : boolean {
    return user.age > 18;

}

console.log(isLegal(user));