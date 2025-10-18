const { Router } = require("express");
const userRouter = Router();
const { userModel, purchaseModel, courseModel } = require("./db");
const bcrypt = require("bcrypt");
const {z} = require("zod");
const jwt = require("jsonwebtoken");
const { JWT_USER_SECRET } = require("../config");
const { middleware } = require("../middleware/admin");

userRouter.post("/signup", async function(req, res){
    const requiredBody = z.object({
        email : z.string().min(7).max(50).email(),
        password : z.string().min(3).max(30),
        firstName : z.string().min(3).max(30),
        lastName : z.string().min(3).max(25)
    })

    const parsedDataWithSuccess = requiredBody.safeParse(req.body);

    if(!parsedDataWithSuccess.success){
        res.json({
            msg : "Invalid input type",
            error : parsedDataWithSuccess.error
        })
        return
    }

    const { email, password, firstName, lastName } = req.body;
    let errorThrown = false;
    try{
        const hashedPassword = await bcrypt.hash(password, 5);
        
        await userModel.create({
        email: email,
        password : hashedPassword,
        firstName : firstName,
        lastName : lastName
      })
    }catch(e){
        res.json({
            msg : "User already exists"
        })
        errorThrown = true;
    }
    
    if(!errorThrown){
        res.json({
        msg : "Signed endpoint"
      })
    }
    
});

userRouter.post("/signin", async function(req, res){
    const { email, password } = req.body;

    const userResponse = await userModel.findOne({
        email : email
    })

    if(!userResponse){
        res.json({
            msg : "user does nto exists in our database"
        })
        return
    }

    const passwordMatched = await bcrypt.compare(password, userResponse.password);

    if(passwordMatched){
        const token = jwt.sign({
            id : userResponse._id.toString()
        }, JWT_USER_SECRET);

        res.json({
            token
        })
    }else{
        res.status(401).json({
            msg : "invalid credentials"
        })
    }
});

userRouter.get("/purchases", middleware(JWT_USER_SECRET), async function(req, res){
    const userId = req.userId;

    const purchases = await purchaseModel.find({
        userId
    })

    const courseData = await courseModel.find({
        _id : { $in : purchases.map(x => x.courseId) }
    })

    res.json({
        purchases,
        courseData
    })
});

module.exports = {
    userRouter : userRouter
}