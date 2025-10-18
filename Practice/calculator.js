const express = require("express");
const app = express();

let requestCount = 0;

function loggerMiddleware(req, res, next){
    console.log("Method is " + req.method);
    console.log("Host is " + req.hostname);
    console.log("Route is : " + req.url);
    console.log(new Date());
    next();
}

app.use(loggerMiddleware);

function requestCounter(req, res, next){
    requestCount++;
    console.log(requestCount);
    next();
}

app.use(requestCounter);

app.get("/sum",function(req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a + b
    })
});

app.get("/multiply", function(req, res) {
    const a = req.query.a;
    const b = req.query.b;
    res.json({
        ans: a * b
    })
});

app.get("/divide", function(req, res) {
    const a = req.query.a;
    const b = req.query.b;
    res.json({
        ans: a / b
    })

});

app.get("/subtract", function(req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.json({
        ans: a - b
    })
});


function main(){
    app.listen(3000);
    console.log("Listening on port 3000");
}

main();