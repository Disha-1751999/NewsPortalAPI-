import mongoose from "mongoose";

const DataSchema= mongoose.Schema({
    subcategoryName:{type:String, required: true, trim: true},
    categoryId:{type:mongoose.Types.ObjectId, required: true},

    },{timestamps:true,versionKey:false}
);

const SubCategoryModel= mongoose.model('subcategories', DataSchema);

export default SubCategoryModel;