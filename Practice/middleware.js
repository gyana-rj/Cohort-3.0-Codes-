const express = require("express");
const app = express();

// function isOldEnough(age){
//     if(age > 18){
//         return true;
//     }
//     return false;
// }

function isOldEnoughMiddleware(req, res, next){
    const age = req.query.age;
    if(age > 14){
        next();
    }else{
        res.json({
            msg : "You are not eligible for ride"
        })
    }
}

app.use(isOldEnoughMiddleware);

app.get("/ride1", function(req, res){
    res.json({
        msg : "You are eligible for ride 1"
    })
});

app.get("/ride2", function(resq, res){
    res.json({
        msg : "You are eligible for ride 2"
    })
})

function main(){
    app.listen(3000);
    console.log("Listening on port 3000");
}

main();