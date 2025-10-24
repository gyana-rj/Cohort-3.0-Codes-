interface User{
    id : string;
    name : string;
    age : number;
    email :string;
    password : string;
}

type UpdateProfile = Pick<User, 'age' | 'email' |'name'>

// if the user does not want to change all the fields that are present in UpadteProfile
// eg : just the name 
type optinalChanges = Partial<UpdateProfile> 

function updateUser(user : optinalChanges){
    console.log(`Name : ${user.name}  age : ${user.age} Email : ${user.email}`);
}

updateUser({
    name : "djknjkwnc"
})


type Student = {
    name : string;  // for single readonly fields syntax : readonly name : string
    age : number;
}

// if you add Readonly then you can not change the values of user
const user : Readonly<Student> = { // this means Readonly applies both for name and age
    name : "tee",
    age : 21
}

//user.age = 21;



//Record and Map
type Person = {
    id : string;
    username : string;
}

type Persons = {
    [key : string] : Person;
}

// slightly more cleaner to read
type PersonsModified = Record<string, Person> 

const persons : PersonsModified = {
    "radre@1" : {
        id : "radre@1",
        username : "mike"
    },
    "ghost@1" : {
        id : "ghost@1",
        username : "Simon Riley"
    }
}


type Members = {
    name : string;
    age : number;
    email : string;
}

const members = new Map<string , Members>();
members.set("John@11", {name : "John Wick", age : 34, email : "johnwick@gmail.com"});
members.set("MasterCheif@11", {name : "John", age : 36, email: "mastercheif@gmail.com"});

const member = members.get("John@11");
console.log(member);


// Exclude

type EventType = 'click' | 'scroll' | 'mousemove';
type ExcludeEvent = Exclude<EventType, 'scroll'>; // 'click' | 'mousemove'

const handleEvent = (event : ExcludeEvent) => {
    console.log(`Handling event ${event}`);
}

//handleEvent('scroll');  // give you an error as it is excluded from the EventType
handleEvent('click'); // OK
