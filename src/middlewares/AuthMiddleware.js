import { TokenDecode } from "../utilities/tokenUtility.js";

export const AuthMiddleware=async (req, res, next) => {
    if (req.headers['key'] == process.env.SECRET_KEY){
        next();
    }
    else {
        res.status(401).send({status:"fail",message:"Unauthorized"})
        }
}
export const AuthTokenMiddleware=async (req, res, next) => {       
            // Receive Token
         let token=req.headers['token'];
         let decoded=TokenDecode(token);
        
          if(decoded===null){
              return res.status(401).json({status:"fail", message:"Unauthorized"})
          }
          else {
            let username=decoded['username'];
            req.headers.username=username;
            next();
          }
      
}

