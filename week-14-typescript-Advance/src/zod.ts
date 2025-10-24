import { z } from 'zod';
import express from "express";
import string = require('zod');
import email = require('zod');
import number = require('zod');

const app = express();

// Define the schema for profile update
const userProfileSchema = z.object({
    name : z.string().min(1, {message : "name can not be empty"}),
    email : z.string().email({message : "Invalid email"}),
    age : z.number().min(18, {message : "You must be atleast 18 years of old"}).optional(),
});

export type FinalUserSchema = z.infer<typeof userProfileSchema>

app.put("/user", (req, res) => {
    const { success } = userProfileSchema.safeParse(req.body);
    const updateBody : FinalUserSchema = req.body; // how to assign a type to updateBody

    if(!success){
        res.status(411).json({
            msg : "Something is off"
        })
        return
    }
    res.json({
        msg : "User updated"
    })

})

app.listen(3000);
