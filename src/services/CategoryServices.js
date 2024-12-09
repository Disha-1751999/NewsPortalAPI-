import CategoryModel from "../models/CategoryModel.js";
import SubCategoryModel from "../models/SubCategoryModel.js";
import mongoose from "mongoose";
const ObjectId=mongoose.Types.ObjectId;

export const CreateCategory = async(req,res)=>{
    try {
      const {categoryName}=req.body;
      const CategoryList= await CategoryModel.find({});
       if(CategoryList.length>0){
        let isExist=false;
        for(let i=0; i<CategoryList.length;i++){
          if(CategoryList[i].categoryName.toLowerCase()==categoryName.toLowerCase()){
               isExist=true;
          }}
          if(isExist){
            return { status: "fail","message":"Category already exist"};
          }else{
            CategoryModel.create({categoryName: categoryName});
            return  {status: "success", "message":"Category Created Successfully"};
          } 
        }else{
        CategoryModel.create({categoryName: categoryName});
        return  {status: "success", "message":"Category Created Successfully"};
        }

    } catch (error) {
        return  { status: "fail","message": error.toString()};
    }
   
}
export const CreateSubCategory = async(req,res)=>{
   
   try {
      const {subcategoryName, categoryID }=req.body;
       const categoryId= new ObjectId(categoryID);
        const subCategoryList= await SubCategoryModel.find({});
       if(subCategoryList.length>0){
        let isExist=false;
        for(let i=0; i<subCategoryList.length;i++){
          if(subCategoryList[i].subcategoryName.toLowerCase()==subcategoryName.toLowerCase()){
               isExist=true;
          }}
          if(isExist){
            return { status: "fail","message":"Subcategory already exist"};
          }else{
            SubCategoryModel.create({subcategoryName: subcategoryName, categoryId: categoryId});
            return  {status: "success", "message":"Subcategory Created Successfully"};
          } 
        }else{
          SubCategoryModel.create({subcategoryName: subcategoryName, categoryId: categoryId});
        return  {status: "success", "message":"Subcategory Created Successfully"};
        }

    } catch (error) {
        return  { status: "fail","message": error.toString()};
    }
   
   
}

export const CategoryList = async(req,res)=>{
   
  try {
  
    const CategoryList= await CategoryModel.find({});
    if(CategoryList.length==0){
      return { status: "fail","message":"Category List is Empty"};
    }else{
      return  {status: "success", "CategoryList":CategoryList};
      }

  } catch (error) {
      return  { status: "fail","message": error.toString()};
  }
 
}

export const SubCategoryList = async(req,res)=>{
   
  try {
    const categoryId= req.params.categoryId;
    const SubCategoryList= await SubCategoryModel.find({categoryId});
    if(SubCategoryList.length==0){
      return { status: "fail","message":"Subcategory List is Empty"};
    }else{
      return  {status: "success", "SubcategoryList":SubCategoryList};
      }

  } catch (error) {
      return  { status: "fail","message": error.toString()};
  }
 
}

export const DeleteCategory = async(req,res)=>{
   
  try {
    const categoryId= req.params.categoryId;
    const Category= await CategoryModel.find({_id:categoryId});
    if(Category.length==0){
      return { status: "fail","message":"Category doesn't exist"};
    }else{
      await CategoryModel.deleteOne({_id:categoryId});
      return  {status: "success", "Message":"Category Deleted Successfully..!"};
      }

  } catch (error) {
      return  { status: "fail","message": error.toString()};
  }
 
}

export const DeleteSubCategory = async(req,res)=>{
   
  try {
    const subCategoryId= req.params.subCategoryId;
    const subCategory= await SubCategoryModel.find({_id:subCategoryId});
    if(subCategory.length==0){
      return { status: "fail","message":"SubCategory doesn't exist"};
    }else{
      await SubCategoryModel.deleteOne({_id:subCategoryId});
      return  {status: "success", "Message":"Subcategory Deleted Successfully..!"};
      }

  } catch (error) {
      return  { status: "fail","message": error.toString()};
  }
 
}

