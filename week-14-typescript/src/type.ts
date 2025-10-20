type UserType ={
    firstName : string;
    lastName : string;
    age : number;
}

function mf(user : UserType){
    if(user.age > 20){
        console.log(`Mfs who watch sopranos`)
    }else{
        console.log(`Kids who watch saiyaara`);
    }
}

const user1: UserType = {
  firstName: "Dexter",
  lastName: "Morgan",
  age: 25
};

mf(user1);



type SumInput = number | string;
function sum ( a : SumInput, b : SumInput){
    return `${a}${b}` // if you always want to string concatination
}

type Employee = {
    name : string;
    startDate : Date;
}

type Manager = {
    name : string;
    department : string;
}

type TeamLead = Employee & Manager;

const teamLead : TeamLead = {
    name : "kirat",
    startDate : new Date(),
    department : "Tech Support"
}



