const bcrypt=require("bcrypt")

const hashPassword=async(plainPassword)=>{
        const hashedPassword=await bcrypt.hash(plainPassword,14)
        return hashedPassword;
}

const comparePassword=async(plainPassword,hashedPassword)=>{
    const result=await bcrypt.compare(plainPassword,hashedPassword);
    return result;
}

module.exports={hashPassword,comparePassword}