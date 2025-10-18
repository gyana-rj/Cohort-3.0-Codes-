const express = require("express");

const app = express();


function isOldEnoughMiddleware(req, res, next){
    const age = req.query.age;
    if(age >= 18){
        next();
    }
    else{
        res.json({
            msg : "You are not old enough yet"
        })
    }
}

//use of middlewares for each one of your routes below the app.use()
// app.use(isOldEnoughMiddleware);

app.get("/ride1", isOldEnoughMiddleware, function(req, res){
   
     res.json({
        msg : "You have successfully riden ride 1"
    })   
    
    
})

app.get("/ride2", isOldEnoughMiddleware, function(req, res){
    
    res.json({
        msg : "You have successfully riden ride 2"
    })
    
})

app.listen(3000);