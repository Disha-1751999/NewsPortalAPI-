import mongoose from "mongoose";

const DataSchema= mongoose.Schema({
    firstName:{type:String, required: true, trim: true},
    lastName:{type:String, required: true, trim: true},
    email:{type:String, required: true, trim: true,unique: true},
    username:{type:String, required: true, trim: true, index: true,unique: true, lowercase: true},
    hash_password: {type:String, required: true, trim: true},
    contact: {type:String, required: true, trim: true},
    role:{type: String, default:"Admin"}
 },{timestamps:true,versionKey:false}
);

const AdminModel= mongoose.model('admin', DataSchema);

export default AdminModel;