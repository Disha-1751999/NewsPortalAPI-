import { CreatePost, ReadPost , DeletePost, SearchByKeyword} from "../services/PostServices.js";

export const CreatePostController= async(req,res)=>{
    let result= await CreatePost(req);    
    if(result.status=="fail") {
        res.status(400).json({"message": result.message}); 
    }else if(result.status=="success"){
        res.status(200).json({status: "success","data": result});
    }
    
}
export const ReadPostController= async(req,res)=>{
    let result= await ReadPost(req);    
    if(result.status=="fail") {
        res.status(400).json({"message": result.message}); 
    }else if(result.status=="success"){
        res.status(200).json({status: "success","data": result});
    }
    
}

export const DeletePostController= async(req,res)=>{
    let result= await DeletePost(req);    
    if(result.status=="fail") {
        res.status(400).json({"message": result.message}); 
    }else if(result.status=="success"){
        res.status(200).json({status: "success","data": result});
    }
    
}

export const SearchByKeywordController= async(req,res)=>{
    let result= await SearchByKeyword(req);    
    if(result.status=="fail") {
        res.status(400).json({"message": result.message}); 
    }else if(result.status=="success"){
        res.status(200).json({status: "success","data": result});
    }
    
}

