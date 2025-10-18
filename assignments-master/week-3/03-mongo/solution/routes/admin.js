const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course } = require("../db/index")

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const { username, password } = req.body;

    await Admin.create({
        username,
        password
    })

    res.json({
        msg : "Admin Created successfully"
    })
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const { title, description, imageUrl, price } = req.body;

    const newCourse = await Course.create({
        title,
        description,
        imageUrl,
        price
    })

    res.json({
        msg : "Course created successfully",
        courseId : newCourse._id
    })
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const response = await Course.find({});

    res.json({
        courses : response
    })
});

module.exports = router;