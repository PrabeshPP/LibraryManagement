const Prisma = require("../../utils/prisma");
const Prsima=require("../../utils/prisma");

const createBook=async(req,res)=>{
    const bookName=req.body.bookName;
    const isbn=req.body.isbn;
    const summary=req.body.summary
    const coverImage=req.cloudinaryUrl;
    const authorFirstName=req.body.authorFirstName;
    const authorLastName=req.body.authorLastName;

    // console.log(bookName)
    // console.log(isbn)
    // console.log(summary)
    // console.log(coverImage)
    // console.log(authorFirstName)
    // console.log(authorLastName)


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
                },
                user:{
                    connect:{
                        id:req.admin
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
                },
                user:{
                    connect:{
                        id:req.admin
                    }
                }
                
            },
        })

        res.status(200)
        res.json({"message":"successfully created the book!"})
    }
}

//Get all the books
const getAllBooks=async(req,res)=>{
    const list_of_books=await Prisma.book.findMany()
    res.status(200)
    res.json({"books":list_of_books})
}

//Get all the books based on the author
const getAllAuthorBooks=async(req,res)=>{
    const authorId=req.body.id;
    const list_of_books=await Prisma.book.findMany({
        where:{
            authorId:authorId
        }
    })
}

//get a specific Book

const getSingleBook=async(req,res)=>{
    const bookId=req.body.id;
    const book=await Prisma.book.findUnique({
        where:{
            id:bookId
        }
    })
    res.status(200);
    res.json({"data":book});
}


//delete a specific book

const deleteBook=async(req,res)=>{
    const bookId=req.body.id;
    const result=await Prisma.book.delete({
        where:{
            id:bookId
        }
    })
    res.status(200);
    res.json({"message":"Successfully removed the book from our database!"})
}


//update the book
/* To-do Task */

module.exports={createBook,getAllBooks}