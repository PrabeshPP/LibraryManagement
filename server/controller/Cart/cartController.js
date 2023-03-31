const {getCurrentUser}=require("../../middleware/getUser.middleware");
const { verifyToken } = require("../../utils/token");
const Prisma=require("../../utils/prisma");

const addToCart=async(req,res)=>{
    const bookId=req.body.id;
    const token=req.token;
    const user=verifyToken({"token":token});
    const userEmail=user.email

    const currUser=await Prisma.user.findFirst({
        where:{
            email:userEmail
        }
    })

    const cart=await Prisma.cart.create({
        data:{
            user:{
                connect:{
                    id:currUser.id
                }
            }
        },
    })

    const cartItem=await Prisma.cartItem.create({
        data:{
            cart:{
                connect:{
                    id:cart.id
                }
            },
            book:{
                connect:{
                    id:bookId
                }
            }
        }
    })

    const updatedBook=await Prisma.book.update({
        where:{
            id:bookId
        },
        data:{
            isAvailable:false
        }
    })

    res.status(200)
    res.json({"message":"Successfully added to the Cart!"})


}

const removeFromCart=async(req,res)=>{

}

const getAllItemFromCart=async(req,res)=>{

}


module.exports={addToCart}

