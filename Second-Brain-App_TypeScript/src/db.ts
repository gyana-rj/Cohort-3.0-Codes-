//create the user models and schemas here
import mongoose, {model, Model, Schema} from "mongoose";

const UserSchema = new Schema({
    username : {type : String, unique : true},
    password : String,
})

const ContentSchema = new Schema({
    title : String,
    link : String,
    tags : [{type : mongoose.Types.ObjectId, ref : 'Tag'}],
    userId : {type : mongoose.Types.ObjectId, ref : 'User', require : true}
})

export const UserModel = model("User", UserSchema);
export const ContentModel = model("Content", ContentSchema);

