import mongoose from "mongoose";

const DataSchema= mongoose.Schema({
    title:{type:String, required: true, trim: true},
    img:{type:String, required: true, trim: true},
    article:{type:String, required: true},
    categoryId:{type:mongoose.Types.ObjectId, required: true},
    subCategoryId:{type:mongoose.Types.ObjectId, required: true}
 },{timestamps:true,versionKey:false}
);

const PostModel= mongoose.model('posts', DataSchema);

export default PostModel;