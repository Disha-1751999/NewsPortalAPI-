import {AdminRegisterService, AdminLoginService} from '../services/AdminServices.js';

export const AdminRegisterController= async(req,res)=>{
    let result= await AdminRegisterService(req);
        if(result.status=="fail") {
        res.status(400).json({"message": result.message}); 
    }else if(result.status=="success"){
        res.status(200).json({status: "success","message": "Admin Registered Successfully..!"});
    }
    
}

export const AdminLoginController= async(req,res)=>{
    let result= await AdminLoginService(req);    
    if(result.status=="fail") {
        res.status(400).json({"message": result.message}); 
    }else if(result.status=="success"){
        res.status(200).json({status: "success","data": result});
    }
    
} 