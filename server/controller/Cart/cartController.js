const { verifyToken } = require("../../utils/token");
const Prisma = require("../../utils/prisma");

const addToCart = async (req, res) => {
    const bookId = req.body.id;
    const token = req.token;
    const user = verifyToken({ "token": token });
    const userEmail = user.email

    const currUser = await Prisma.user.findFirst({
        where: {
            email: userEmail
        },
        include: {
            cart: true
        }
    })

    if (currUser.cart) {
        const cartItem = await Prisma.cartItem.create({
            data: {
                cart: {
                    connect: {
                        id: currUser.cart.id
                    }
                },
                book: {
                    connect: {
                        id: bookId
                    }
                }
            }
        })

        const updatedBook = await Prisma.book.update({
            where: {
                id: bookId
            },
            data: {
                isAvailable: false
            }
        })

        res.status(200)
        res.json({ "message": "Successfully added to the Cart!" })

    } else {
        const cart = await Prisma.cart.create({
            data: {
                user: {
                    connect: {
                        id: currUser.id
                    }
                }
            },
        })

        const cartItem = await Prisma.cartItem.create({
            data: {
                cart: {
                    connect: {
                        id: cart.id
                    }
                },
                book: {
                    connect: {
                        id: bookId
                    }
                }
            }
        })

        const updatedBook = await Prisma.book.update({
            where: {
                id: bookId
            },
            data: {
                isAvailable: false
            }
        })

        res.status(200)
        res.json({ "message": "Successfully added to the Cart!" })


    }

}

const removeFromCart = async (req, res) => {
        const cartItemId=req.params.id;
        const currentCartItem=await Prisma.cartItem.findUnique({
            where:{
                id:cartItemId
            }
        })
        const updatedBook=await Prisma.book.update({
            where:{
                id:currentCartItem.bookId
            },
            data:{
                isAvailable:true
            }
        })
        const removedCartItem=await Prisma.cartItem.delete({
            where:{
                id:cartItemId
            }
        })
        if(removedCartItem){
            res.status(200)
            res.json({"message":"Successfully removed the Item from the Cart"})
        }else{
            res.status(500)
            res.json({"message":"Could't find the Item"})
        }
}

const getAllItemFromCart = async (req, res) => {
    const token = req.token;
    const user = verifyToken({ "token": token })
    const userEmail = user.email

    const currUser = await Prisma.user.findFirst({
        where: {
            email: userEmail
        }
    })


    const currCart = await Prisma.cart.findFirst({
        where: {
            userId: currUser.id
        }
    })

    const currData = await Prisma.cartItem.findMany({
        where: {
            cartId: currCart.id
        },
        include: {
            book: true
        }
    })


    res.status(200)
    res.json({ "message": currData })
}


module.exports = { addToCart, getAllItemFromCart,removeFromCart }

