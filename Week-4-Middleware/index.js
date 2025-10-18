const express = require("express");

const app = express();

function isOldEnough(age){
    if(age >= 18){
        return true;
    }
    else{
        return false;
    }
}


app.get("/ride1", function(req, res){
    if(isOldEnough(req.query.age)){
        res.json({
            msg : "You are eligible for the ride 1"
        })
    }
    else{
        res.status(411).json({
            msg : "Sorry you are not eligible for the ride 1"
        })
    }
})

app.get("/ride2", function(req, res){
    if(isOldEnough(req.query.age)){
        res.json({
            msg : "You have successfully registred for ride 2"
        })
    }
    else
    {
        res.json({
            msg : "You are not old enough yet"
        })
    }
})

app.listen(3000);