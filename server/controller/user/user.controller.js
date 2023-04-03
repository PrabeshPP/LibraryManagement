const Prisma=require("../../utils/prisma");

const getAllUser=async(req,res)=>{
    const users=await Prisma.user.findMany();
    res.status(200)
    res.json({"users":users,"message":"Sucessfully Fetched all the users!"})
}

const getSingleUser=async(req,res)=>{
    const userId=req.body.id;
    const requestedUser=await Prisma.user.findUnique({
        where:{
            id:userId
        }
    })

    if(requestedUser){
        res.status(200);
        res.json({"user":requestedUser,"message":"Successfully Fetched the requested User"})
    }else{
        res.status(404)
        res.json({"message":"The requested user is not found"});
    }
}

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


module.exports={getAllUser,getSingleUser,updateUser,deleteUser}