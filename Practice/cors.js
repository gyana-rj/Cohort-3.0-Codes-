const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.post("/sum", function(req, res){
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    res.json({
        ans : a + b
    })
})

function main(){
    app.listen(3000);
    console.log("Running on port 3000");
}

main();