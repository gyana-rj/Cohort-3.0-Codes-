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

interface Address {
    city : string;
    pincode : number;
    country : string;
    houseNumber : number;
}

interface User{
    name : string;
    age : number;
    address ?: Address // to make address optional field you have to add ?

}

interface Office {
    address : Address
}


let user1 : User = {
    name : "sharma",
    age : 20,
}

let user : User = {
    name : "tee",
    age : 20,
    address :{
        city: "Dehradun",
        country : "India",
        pincode : 248001,
        houseNumber : 72
    }
}

function isLegal(user : User) : boolean {
    return user.age > 18;
}

console.log(isLegal(user));


function wmsg(name : string){
    return `Hello ${name}`
}
wmsg("Jonas")

interface People{
    name : string;
    age : number;
    greet : () => string;
}

let person : People = {
    name : "jonas kahnwald",
    age : 21,
    greet: () => {
        return "hey";
    }
}

//console.log(person.greet());

