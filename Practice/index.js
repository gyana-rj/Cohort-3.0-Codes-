const express = require("express");
const app = express();

var users = [{
    name : "John",
    kidneys : [{
        healthy : false
    }]
}];
app.use(express.json());
app.get("/", function(req, res){
    const johnKidneys = users[0].kidneys;
    const numberOfKidneys = johnKidneys.length;
    let numberOfHealthyKidenys = 0;
    for(let i = 0; i < johnKidneys.length; i++){
        if(johnKidneys[i].healthy){
            numberOfHealthyKidenys++;
        }
    }
    const numberOfUnhealthyKidenys = numberOfKidneys - numberOfHealthyKidenys;
    res.json({
        numberOfKidneys,
        numberOfHealthyKidenys,
        numberOfUnhealthyKidenys
    })
});

app.post("/", function(req, res){
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy : isHealthy
    })
    res.json({
        msg : "Done"
    })
});

app.put("/", function(req, res){
    for(let i = 0; i < users[0].kidneys.length; i++){
        users[0].kidneys[i].healthy = true;
    }
    res.json({
        msg : "Done"
    })
});

app.delete("/", function(req, res){
   if(isThereAtLeastOneUnhealthyKidney()){
     const newKidenys = [];
    for(let i = 0; i < users[0].kidneys.length; i++){
        if(users[0].kidneys[i].healthy){
            newKidenys.push({
                healthy : true
            })
        }
    }
    users[0].kidneys = newKidenys;
    res.json({
        msg : "Done"
    })
   }
   else{
    res.status(411).json({
        msg : "You have no bad kidneys"
    })
   }

});


function isThereAtLeastOneUnhealthyKidney(){
    let atLeastOneUnhealthyKidney = false;
    for(let i = 0; i < users[0].kidneys.length; i++){
        if(!users[0].kidneys[i].healthy){
            atLeastOneUnhealthyKidney = true;
        }
    }
    return atLeastOneUnhealthyKidney;
}







function main(){
    app.listen(3000);
    console.log("Listening on port 3000");
}

main();