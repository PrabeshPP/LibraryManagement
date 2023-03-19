const jwt=require("jsonwebtoken");


const createAccessToken=(payload)=>{
    const token=jwt.sign({
        email:payload.email
    },process.env.ACCESS_TOKEN,
    {expiresIn:'30s'}
    )

    return token;
}

const createRefreshToken=(payload)=>{
    const token=jwt.sign({
        email:payload.email,  
    },process.env.REFRESH_TOKEN,
    {expiresIn:'30d'}
    )
     
    return token;
}



const verifyToken=(payload)=>{
    const token=payload.token;
    try{
        var decoded=jwt.verify(token,process.env.ACCESS_TOKEN);
        return decoded;
    }catch(err){
        return null;
    }
}

const verifyRefreshToken=(payload)=>{
    const token=payload.token;
    try{
        var decoded=jwt.verify(token,process.env.REFRESH_TOKEN)
        return decoded;
    }catch(err){
        return null;
    }
}



module.exports={createAccessToken,createRefreshToken,verifyToken,verifyRefreshToken}