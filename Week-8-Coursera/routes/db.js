const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const userSchema = new Schema({
    id : ObjectId,
    email : {type : String, unique : true},
    password : String,
    firstName : String,
    lastName : String
})

const courseSchema = new Schema({
    id : ObjectId,
    title : String,
    description : String,
    price : String,
    imageUrl : String,
    creatorId : ObjectId
})

const adminSchema = new Schema({
    id : ObjectId,
    email : {type : String, unique : true},
    password : String,
    firstName : String,
    lastName : String
})

const purchaseSchema = new Schema({
    id : ObjectId,
    courseId : ObjectId,
    userId : ObjectId
})

const userModel = mongoose.model("user", userSchema);
const courseModel = mongoose.model("course", courseSchema);
const adminModel = mongoose.model("admin", adminSchema);
const purchaseModel = mongoose.model("purchase", purchaseSchema);

module.exports = {
    userModel : userModel,
    courseModel : courseModel,
    adminModel : adminModel,
    purchaseModel : purchaseModel
}