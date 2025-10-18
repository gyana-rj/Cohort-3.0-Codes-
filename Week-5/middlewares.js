const express = require("express");

const app = express();

let requestCount = 0;

function requestIncreaser(req, res, next){
    requestCount +=1 ;
    console.log("Total number of requests : " + requestCount);
    req.name = "Mickey";
    next();
}

function realSumHandler(req, res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    console.log(req.name);

    res.json({
        ans : a + b
    })
}

function realMultiplicationHandler(req, res){
    const a = req.query.a;
    const b = req.query.b;

    res.json({
        ans : a * b
    })
}
app.use(requestIncreaser); // its a global middleware

app.get("/sum", realSumHandler);

app.get("/multiply", realMultiplicationHandler);

app.listen(3000);