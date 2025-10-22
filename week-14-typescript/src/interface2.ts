interface People{
    name : string;
    age : number;
    //greet : () => string;
    isLegal: () => boolean;
}

// you do not need to repeat the logic of name and age types in class just add public in the constructor and 
// it will add this.name & this.age logic also
class Manager implements People{
    // name : string;
    // age : number;
    // you can add extra fields in this that is not present in the interface 

    constructor(public name : string, public age : number){ 
        // this.name = name;
        // this.age = age;
    }
    isLegal(){
        return this.age > 18;
    }
}

let user = new Manager("tee sharma", 20);
console.log(user.age);
console.log(user.isLegal());