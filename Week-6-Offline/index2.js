const jwt = require("jsonwebtoken");


const content = {
    name : "harkirat",
    accoutNumber : 2122333
}

const newToken = jwt.sign(content, "hshdjjd");
console.log(newToken);


