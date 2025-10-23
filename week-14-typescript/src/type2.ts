//Intersection in Type 
type Employee = {
    name : string;
    startDate : string;
}

type Manager = {
    name : string;
    department : string;
}

type TeamLead = Employee & Manager;

let e : Employee = {
    name : "bartosh",
    startDate : "01-08-2004"
}

let manager : Manager ={
    name : "Noah",
    department : "Operation Desk"
}

let t : TeamLead = {
    name : "Mikkel",
    startDate : "04-06-2003",
    department : "Analysis Wing"
}




