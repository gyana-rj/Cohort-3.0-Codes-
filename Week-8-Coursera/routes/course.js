const { Router } = require("express");
const { courseModel, purchaseModel } = require("./db");
const { middleware } = require("../middleware/admin");
const { JWT_ADMIN_SECRET, JWT_USER_SECRET } = require("../config");
const courseRouter = Router();

    courseRouter.post("/purchase", middleware(JWT_USER_SECRET), async function(req, res){
        const userId = req.userId;
        const courseId = req.courseId;
        
        await purchaseModel.create({
            userId,
            courseId
        })
        
        res.json({
            msg : "You have sucessfully bought the course"
        })
    });

    courseRouter.get("/preview", async function(req, res){
        const courses = await courseModel.find({});

        res.json({
           courses
        })
    });

module.exports = {
    courseRouter : courseRouter
}
