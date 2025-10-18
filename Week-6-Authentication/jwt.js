const express = require("express");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "randomrandilovemorraine";
const app = express();
app.use(express.json());

const users = [];

app.post("/signup", function(req, res){
    const username = req.body.username;
    const password = req.body.password;

    if(users.find(u => u.username == username)){
        return;
    }

    users.push({
        username : username,
        password : password
    })

    res.json({
        messsage : "You are signed up"
    })

    console.log(users);
})

app.post("/signin", function(req, res){
    const username = req.body.username;
    const password = req.body.password;

    const user = users.find(function(u){
       
        if(u.username == username && u.password == password){
            return true;
        }
        else{
            return false;
        }    
    })

    if(user){
        const token = jwt.sign({  // converts the username to a jwt 
            username : username
        }, JWT_SECRET);

        // user.token = token;
        res.send({
            token
        })
    }
    else{
        res.status(403).send({
            messsage : "Invalid username or password"
        })
    }
    console.log(user);
})

app.get("/me", function(req, res){
    const token = req.headers.token;
    const decodedInformation = jwt.verify(token, JWT_SECRET); // decoded the jwt to the username {user : harkirat@gmail.com}
    const username = decodedInformation.username;
    
    let foundUser = null;

    for(let i = 0; i < users.length; i++){
        if(users[i].username == username){
            foundUser = users[i];
        }
    }

    if(foundUser){
        res.json({
            username : foundUser.username,
            password : foundUser.password
        })
    }
    else{
        res.json({
            messsage : "Invalid token"
        })
    }
})

app.listen(3000);
