const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const JWT_SECRET = "TheBloodOfTheDragonRunsThick";
const app = express();

mongoose.connect("mongodb+srv://gyanaranjansahoo174:3pdv1JZAJlt5V2qW@cluster0.cwufgad.mongodb.net/todo-app-database");

const {UserModel, TodoModel} = require("./db");

app.use(express.json());

function auth(req, res, next){
    const token = req.headers.token;
    const decodedData = jwt.verify(token, JWT_SECRET);

    if(decodedData){
        req.userId = decodedData.id;
        next();
    }else{
        res.status(403).json({
            msg : "invalid credentials"
        })
    }
}

app.post("/signup", async function(req, res){
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    let errorThrown = false;

   try{
    const hashedPassword = await bcrypt.hash(password, 5);
    console.log(hashedPassword);

    await UserModel.create({
        email : email,
        password : hashedPassword,
        name : name
    })
   }catch(e){
    res.json({
        msg : "User already exits"
    })
    errorThrown = true
  }

  if(!errorThrown){
      res.json({
        msg : "You are signed up"
    })
  }

});

app.post("/signin", async function(req, res){
    const email = req.body.email;
    const password = req.body.password;

    const response = await UserModel.findOne({
        email : email
    })

    if(!response){
        res.json({
            msg : "User does not exits in our database"
        });
        return
    }

    const passwordMatched = await bcrypt.compare(password, response.password);

    if(passwordMatched){
        const token = jwt.sign({
            id : response._id.toString()
        }, JWT_SECRET);

        res.json({
            token
        })
    }else{
        res.status(403).json({
            msg : "invalid credentials"
        })
    }


});

app.post("/todo", auth, function(req, res){
    const description = req.body.description;
    const done = req.body.done;
    const userId = req.userId;

    TodoModel.create({
        description : description,
        done : done,
        userId : userId
    })

    res.json({
        msg : "Todo created"
    })

});

app.get("/todos", auth, async function(req, res){
    const userId = req.userId;

    const todos = await TodoModel.find({
        userId
    })

    res.json({
        todos
    })
});

function main(){
    app.listen(3000);
    console.log("Listening on port 3000");
}

main();