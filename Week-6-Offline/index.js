const jwt = require("jsonwebtoken");
// const secret = "ilovepreeti";

const value ={
    name : "harkirat",
    accoutNumber : 2122333
}

const token = jwt.sign(value, "secret");

console.log(token);

//const decodeToken = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiaGFya2lyYXQiLCJhY2NvdXROdW1iZXIiOjIxMjIzMzMsImlhdCI6MTc0MTk2MzE4Nn0.j0LrRLs1Ag16ry6zDkk8BM9zRbbcZ6AXHzT4WKTLKSA", "secret");

const decodedToken = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiaGFya2lyYXQiLCJhY2NvdXROdW1iZXIiOjIxMjIzMzMsImlhdCI6MTc0MTk2MzQwOH0.vM_IQwbf0DCl-T18nQFtWFD7VoaOtVh6rXcemGtxDFc", "secret");
console.log(decodedToken);