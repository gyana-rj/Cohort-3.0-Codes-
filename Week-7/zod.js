const express = require("express");
const bcrypt = require("bcrypt");
const { z } = require("zod");
const {UserModel, TodoModel} = require("./db");
const jwt = require("jsonwebtoken");
const mongoose  = require("mongoose");
const JWT_SECRET = "ilovep";
const app = express();
app.use(express.json());

mongoose.connect("mongodb+srv://silverback:P4oUPzhIWBb5CPVM@cluster0.lq97f.mongodb.net/todo-app-week7-2");

app.post("/signup", async function(req, res) {

    const requiredBody = z.object({
        email : z.string().min(3).max(100).email(),
        name : z.string().min(3).max(30),
        password : z.string().min(3).max(100)
    })

    const parsedDataWithSuccess = requiredBody.safeParse(req.body);

    if(!parsedDataWithSuccess.success){
        res.json({
            msg : "Incorrect format",
            error : parsedDataWithSuccess.error
        })
        return
    }
    
        const email = req.body.email;
        const password = req.body.password;
        const name = req.body.name;
    
        const hasedPassword = await bcrypt.hash(password, 10);
    
        await UserModel.create({
            email: email,
            password: hasedPassword,
            name: name
        });
        
        res.json({
            message: "You are signed up"
        })
   
        res.status(500).json({
            message: "Error while signing up"            
        })
   
});

app.post("/signin", async function(req, res){
    const email = req.body.email;
    const password = req.body.password;

    const response = await UserModel.findOne({
        email : email
    })

    if(!response){
        res.status(403).json({
            msg : "User does not exists in our database"
        })
        return
    }

    const passwordMatch = await bcrypt.compare(password, response.password);

    if(passwordMatch){
        const token = jwt.sign({
            id : response._id.toString()
        }, JWT_SECRET);
        res.json({
            token : token
        })

    }
    else{
        res.status(403).json({
            message : "Incorrect Credentials"
        })
    }

})

app.post("/todo", auth, async function(req, res){
    const userId = req.userId;
    const title = req.body.title;
    const done = req.body.done;

    await TodoModel.create({
        userId,
        title,
        done
    })

    res.json({
        userId : userId
    })

})

app.get("/todos", auth, function(req, res){
    const userId = req.userId;
    const todos = TodoModel.findOneAndReplace({
        userId 
    })

    res.json({
        todos
    })

})

function auth(req, res, next){
    const token = req.headers.token;
    const decodedData = jwt.verify(token, JWT_SECRET);

    if(decodedData){
        req.userId = decodedData.id;
        next();
    }
    else{
        res.statusCode(403).json({
            msg : "Incorrect Credentials"
        })
    }
}

app.listen(3000);