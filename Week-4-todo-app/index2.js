const express = require("express");

function calculateSum(n){
    let sum = 0;
    for(let i = 0; i < n; i++){
        sum += i;
    }
    return sum;

}

const app = express();

app.get("/", function(req, res){
    const n = req.query.n;
    const ans = calculateSum(n);
    //or you can write res.send(ans.toString());
    res.send( "hi your ans is " + ans); // make sure the whatever you send it is a string or it will think it is a status code

})

app.listen(3000);

