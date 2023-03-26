const Prisma=require("../../utils/prisma");
//delete the user
const deleteUser=async(req,res)=>{
    const userId=req.body.id;
    const deletedRefreshToken=await Prisma.refreshToken.deleteMany({
        where:{
            userId:userId
        }
    })
    const deletedUser=await Prisma.user.delete({
        where:{
            id:userId
        }
    })
    res.status(200)
    res.json({"message":"Successfully Deleted the User"})
}


//update the user

const updateUser=async(req,res)=>{
    
}