const { verifyToken } = require("../utils/token");

const getCurrentUser=(req,res,next)=>{
    const header=req.headers.authorization;
    const token=header.split(" ")[1];
    const result=verifyToken({"token":token});
    return result;
}

module.exports={getCurrentUser}