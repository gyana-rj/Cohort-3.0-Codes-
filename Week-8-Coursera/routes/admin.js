const { Router } = require("express");
const adminRouter = Router();
const {adminModel, courseModel} = require("./db");
const { z } = require("zod");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");
const { JWT_ADMIN_SECRET } = require("../config");
const { middleware } = require("../middleware/admin");

adminRouter.post("/signup", async function(req, res){
    const requiredBody = z.object({
        email : z.string().min(3).max(30).email(),
        password : z.string().min(3).max(30),
        firstName : z.string().min(3).max(30),
        lastName : z.string().min(3).max(30)
    })   

    const parsedDataWithSuccess = requiredBody.safeParse(req.body);

    if(!parsedDataWithSuccess.success){
        res.json({
            msg : "Invalid input type"
        })
        return
    }

    const { email, password, firstName, lastName } = req.body;
    
    let errorThrown = false;

    try{
        const hashedPassword = await bcrypt.hash(password, 5);

        await adminModel.create({
            email : email,
            password : hashedPassword,
            firstName : firstName,
            lastName : lastName
        })
    }catch(e){
        res.json({
            msg : "user already exists"
        })
        errorThrown = true
    }

    if(!errorThrown){
        res.json({
            msg : "You are signup up as admin"
        })
    }


});

adminRouter.post("/signin", async function(req, res){
    const { email, password } = req.body;

    const adminResponse = await adminModel.findOne({
        email : email
    })

    if(!adminResponse){
        res.json({
            msg : "User does not exists in pur database"
        })
    }

    const passwordMatched = await bcrypt.compare(password, adminResponse.password);

    if(passwordMatched){
        const token = jwt.sign({
            id : adminResponse._id.toString()

        }, JWT_ADMIN_SECRET);

        res.json({
            token
        })
    }else{
        res.status(401).json({
            msg : "Invalid credentials"
        })
    }
});

adminRouter.post("/course", middleware(JWT_ADMIN_SECRET), async function(req, res){
    const adminId = req.userId;

    const { title, description, imageUrl, price } = req.body;

    const course = await courseModel.create({
        title : title,
        description : description,
        imageUrl : imageUrl,
        price : price,
        creatorId : adminId
    })

    res.json({
        msg : "Course created",
        courseId : course._id
    })

});

adminRouter.put("/course", middleware(JWT_ADMIN_SECRET), async function(req, res){
    const adminId = req.userId;

    const { title, description, imageUrl, price, courseId } = req.body;

    const course = await courseModel.updateOne({ _id : courseId, creatorId : adminId }, {
        title : title,
        description : description,
        imageUrl : imageUrl,
        price : price
    })

    res.json({
        msg : "Course updated",
        courseId : course._id
    })
});

adminRouter.get("/course/bulk", middleware(JWT_ADMIN_SECRET), async function(req, res){
   const adminId = req.userId;

    const courses = await courseModel.find({
        creatorId : adminId
    })

    if(courses){
        res.json({
            msg : "Your courses are ",
            courses
        })
    }
});

module.exports ={
    adminRouter : adminRouter
}