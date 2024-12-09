import mongoose from "mongoose";

const DataSchema= mongoose.Schema({
    categoryName:{type:String, required: true, trim: true,unique: true},
    },{timestamps:true,versionKey:false}
);

const CategoryModel= mongoose.model('categories', DataSchema);

export default CategoryModel;