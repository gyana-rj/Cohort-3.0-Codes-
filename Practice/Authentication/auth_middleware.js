const express = require("express");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "I am still worthy";
const app = express();
app.use(express.json());

const users = [];

app.get("/", function(req, res){
    res.sendFile(__dirname + "/public/index.html");
})

app.post("/signup", function(req, res){
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username : username,
        password : password
    })

    res.json({
        msg : "Signed up successfully"
    })
})

app.post("/signin", function(req, res){
    const username = req.body.username;
    const password = req.body.password;

    const user = users.find(user => user.username == username && user.password == password);

    if(user){
        const token = jwt.sign({
            username : username
        }, JWT_SECRET);

        res.json({
            token
        })
    }else{
        res.status(401).json({
            msg : "Invalid user"
        })
    }
})

function auth(req, res, next){
    const token = req.headers.token;
    const decodedData = jwt.verify(token, JWT_SECRET);
    if(decodedData.username){
        req.username = decodedData.username
        next();
    }else{
        res.json({
            msg : "You are not logged in"
        })
    }
}

app.get("/me", auth, function(req, res){
    const user = users.find(user => user.username == req.username);

    if(user){
        res.json({
            username : user.username,
            password : user.password
        })
    }else{
        res.status(401).json({
            msg : "Invalid Credentials"
        })
    }
})

function main(){
    app.listen(3000);
    console.log("Listening on port 3000");
}

main();
