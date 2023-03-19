const {verifyToken}=require("../utils/token")

const authMiddleware=(req,res,next)=>{
    const header=req.headers.authorization;
    const token=header.split(" ")[1]
    const result=verifyToken({"token":token})
    if(result!=null){
        next();
    }else{
        res.status(401);
        res.json({"message":"Not Authorized!"})
    }
}

module.exports=authMiddleware;