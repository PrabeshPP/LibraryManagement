const Prisma = require("../utils/prisma");
const {verifyToken}=require("../utils/token");


const checkAdmin=async(req,res,next)=>{
    const currentToken=req.token;
    const result=verifyToken({"token":currentToken});

    //
    if(result){
        const user=await Prisma.admin.findUnique({
            where:{
                email:result.email
            }
        })
        
        if(user){
            const role=user.role;
            if(role==="admin"){
                req.admin=user.id
                next()
            }else{
                res.status(401);
                res.json({"message":"You must be admin to access this Page!"})
            }
        }else{
            res.status(401);
            res.json({"message":"Not Authorized"})
        }
    }

}


module.exports={checkAdmin};