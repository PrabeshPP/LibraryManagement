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
    const userId=req.body.id;
    const firstName=req.body.firstName
    const lastName=req.body.lastName
    const email=req.body.email
    const password=req.body.password
    const updatedUser=await Prisma.user.update({
        where:{
            id:userId
        },
        data:{
            firstName:firstName,
            lastName:lastName,
            email:email,
            password:password,
        }
    })

    res.status(200)
    res.json({"message":"Successfully Update the User!"})

}