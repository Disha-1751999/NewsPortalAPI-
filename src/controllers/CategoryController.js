import {CreateCategory, CreateSubCategory, CategoryList , SubCategoryList, DeleteCategory, DeleteSubCategory} from '../services/CategoryServices.js';

export const CreateCategoryController= async(req,res)=>{
    let result= await CreateCategory(req);    
    if(result.status=="fail") {
        res.status(400).json({"message": result.message}); 
    }else if(result.status=="success"){
        res.status(200).json({status: "success","data": result});
    }
    
}

export const CreateSubCategoryController= async(req,res)=>{
    let result= await CreateSubCategory(req);    
    if(result.status=="fail") {
        res.status(400).json({"message": result.message}); 
    }else if(result.status=="success"){
        res.status(200).json({status: "success","data": result});
    }
    
}
export const CategoryListController= async(req,res)=>{
    let result= await CategoryList();    
    if(result.status=="fail") {
        res.status(400).json({"message": result.message}); 
    }else if(result.status=="success"){
        res.status(200).json({status: "success","data": result});
    }
    
}

export const SubCategoryListController= async(req,res)=>{
    let result= await SubCategoryList(req);    
    if(result.status=="fail") {
        res.status(400).json({"message": result.message}); 
    }else if(result.status=="success"){
        res.status(200).json({status: "success","data": result});
    }
    
}

export const DeleteCategoryController= async(req,res)=>{
    let result= await DeleteCategory(req);    
    if(result.status=="fail") {
        res.status(400).json({"message": result.message}); 
    }else if(result.status=="success"){
        res.status(200).json({status: "success","data": result});
    }
    
}

export const DeleteSubCategoryController= async(req,res)=>{
    let result= await DeleteSubCategory(req);    
    if(result.status=="fail") {
        res.status(400).json({"message": result.message}); 
    }else if(result.status=="success"){
        res.status(200).json({status: "success","data": result});
    }
    
}