const Prisma = require("../../utils/prisma");
const Prsima=require("../../utils/prisma");

const createBook=async(req,res)=>{
    const bookName=req.body.bookName;
    const isbn=req.body.isbn;
    const summary=req.body.summary
    const coverImage=req.body.coverImage;
    const authorFirstName=req.body.authorFirstName;
    const authorLastName=req.body.authorLastName;

   

    //find author with that Name
    const atuhorExist=await Prisma.author.findFirst({
        where:{
            firstName:authorFirstName,
            lastName:authorLastName
        }
    })
    if(atuhorExist){
        const createdBook=await Prisma.book.create({
            data:{
                bookName:bookName,
                isbn:isbn,
                summary:summary,
                coverImage:coverImage,
                author:{
                    connect:{
                        id:atuhorExist.id
                    }
                }
            },
        })
        res.status(200)
        res.json({"message":"successfully created the book!"})
    }else{
        const createdAuthor=await Prisma.author.create({
            data:{
                firstName:authorFirstName,
                lastName:authorLastName
            }
        })

        const createdBook=await Prisma.book.create({
            data:{
                bookName:bookName,
                isbn:isbn,
                summary:summary,
                coverImage:coverImage,
                author:{
                    connect:{
                        id:createdAuthor.id
                    }
                }
            },
        })

        res.status(200)
        res.json({"message":"successfully created the book!"})
    }
}


module.exports={createBook}