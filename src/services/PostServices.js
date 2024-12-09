import PostModel from "../models/PostModel.js";
import mongoose from "mongoose";
const ObjectId=mongoose.Types.ObjectId;

export const CreatePost = async(req,res)=>{
    try {
      const {title,img,article,categoryID,subCategoryID}=req.body;
      let categoryId= new ObjectId(categoryID);
      let subCategoryId= new ObjectId(subCategoryID);
      await PostModel.create({title,img,article,categoryId,subCategoryId});
      return {status: "success","message": "Post Created Successfully..!"}
    } catch (error) {
        return  { status: "fail","message": error.toString()};
    }
   
}

export const ReadPost = async(req,res)=>{
    try {
      let PostID=req.params.PostId;
      let PostId= new ObjectId(PostID);
      let response=await PostModel.aggregate([
        {$match:{_id:PostId}},  
        {$lookup:{from:'categories', localField: 'categoryId', foreignField:'_id' , as: 'category_details' }} ,
        {$lookup:{from:'subcategories', localField: 'subCategoryId', foreignField:'_id' , as: 'sub_category_details' }} , 
        {$project:{"_id": 1,"title":1,"img":1,"article":1,
            "createdAt":1,
            "updatedAt":1,
            "category_details.categoryName":1,"category_details._id":1,
        "sub_category_details.subcategoryName":1,"sub_category_details._id":1}}      
      ]);
      return {status: "success","message": "Post Read Successfully..!", "data": response}
    } catch (error) {
        return  { status: "fail","message": error.toString()};
    }
   
}
export const DeletePost = async(req,res)=>{
    try {
      let PostID=req.params.PostId;
      let PostId= new ObjectId(PostID);
      await PostModel.deleteOne({_id:PostId});
      return {status: "success","message": "Post Deleted Successfully..!"}
    } catch (error) {
        return  { status: "fail","message": error.toString()};
    }
   
}

export const SearchByKeyword = async(req,res)=>{
    try {
      let keyword=req.params.keyword;
      let response=await PostModel.aggregate([
        {$match:{'title':{"$regex":keyword, "$options":"i"}}},
        {$lookup:{from:'categories', localField: 'categoryId', foreignField:'_id' , as: 'category_details' }} ,
        {$lookup:{from:'subcategories', localField: 'subCategoryId', foreignField:'_id' , as: 'sub_category_details' }} ,
        {$unwind: '$category_details' } ,
        {$unwind: '$sub_category_details' } ,
        {$project:{"_id": 1,"title":1,"img":1,"article":1,
            "createdAt":1,
            "updatedAt":1,
            "category_details.categoryName":1,"category_details._id":1,
        "sub_category_details.subcategoryName":1,"sub_category_details._id":1}}  

      ]);
      if(response.length==0){
        return {status: "fail","message": "No Post Found..!"};
      }else{
        return {status: "success","message": "Post Found..!", "posts":response};
      }
      
    } catch (error) {
      return  { status: "fail","message": error.toString()};
    }
   
}