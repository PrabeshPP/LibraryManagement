const jwt=require("jsonwebtoken");
const Prisma=require("./prisma");

const createAccessToken=(payload)=>{
    const token=jwt.sign({
        email:payload.email
    },process.env.ACCESS_TOKEN_SECRET,
    {expiresIn:'30m'}
    )

    return token;
}

const createRefreshToken=(payload)=>{
    const token=jwt.sign({
        email:payload.email,  
    },process.env.REFRESH_TOKEN_SECRET,
    {expiresIn:'30d'}
    )
     
    return token;
}


const generateAccessTokenFromRefreshToken=(payload)=>{
    
}


const verifyToken=(payload)=>{
    const token=payload.token;
    try{
        var decoded=jwt.verify(token,process.env.ACCESS_TOKEN_SECRET);
        return decoded;
    }catch(err){
        return null;
    }
}



module.exports={createAccessToken,createRefreshToken,verifyToken}