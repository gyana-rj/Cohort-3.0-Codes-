const express = require ("express");
const cors = require("cors");
const app = express();

// Middleware to parse the request body as JSON
app.use(express.json());
//Middleware to enable CORS
app.use(cors());

// when we are not using cors()
// app.get("/", function(req,res){
//     res.sendFile(__dirname + "/public/cors.html");
// })

app.post("/sum", function(req, res){
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    res.json({
        ans : a + b
    })
})

app.listen(3000);
