const express = require("express")
const app = express();

app.use(express.json());

app.post("/sum", function(req, res){
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    res.json({
        ans : a + b
    })
})

function main(){
    app.listen(3000);
    console.log("Listening on port 3000");
}

main();