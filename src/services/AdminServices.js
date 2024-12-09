import AdminModel from "../models/AdminModel.js"
import bcrypt from "bcrypt";
import { TokenEncode } from "../utilities/tokenUtility.js";

export const AdminRegisterService= async(req,res)=>{
    const {firstName, lastName, email, username, password, contact, role}=req.body;
    const user= await AdminModel.find({email: email});
    if(user.length>0){
        return { status: "fail","message":"User already exist"};
    }else{
        const hash_password = await bcrypt.hash(password, 10);
        const response= await AdminModel.create({
            firstName,
            lastName,
            email,
            username,
            hash_password,
            contact,
            role
        });
       
        if (response==null){
            return { status: "fail","message":"Something went wrong"};
        }
        else{
           return  {status: "success", "message":"Admin Registered Successfully"};
        }
     }
}


export const AdminLoginService= async(req,res)=>{

    try {
        const { username, password}=req.body;        
        const user= await AdminModel.find({username: username});       
        if(user.length==0){
            return { status: "fail","message":"User doesn't exist" };
        }else{
            const istrue=  await bcrypt.compare(password, user[0].hash_password)           
            if (istrue==true){
                let  token=TokenEncode(username,password);
                return {status: "success", "message":"Admin login Successfully" ,"Token" : token};
            }
            else{
            return  { status: "fail","message":"Wrong Password"};
         }          
         }
    } catch (error) {
        return  { status: "fail","message": error.toString()};
    }
   
}

