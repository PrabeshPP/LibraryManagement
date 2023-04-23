const Prisma = require("../../utils/prisma");
const Prsima=require("../../utils/prisma");
const cloudinary=require("cloudinary").v2;

cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.API_KEY,
    api_secret:process.env.API_SECRET
});

const createBook=async(req,res)=>{
    const bookName=req.body.bookName;
    const isbn=req.body.isbn;
    const summary=req.body.summary
    const coverImage=req.cloudinaryUrl;
    const coverImagePublicId=req.publicId
    const authorFirstName=req.body.authorFirstName;
    const authorLastName=req.body.authorLastName;

   

    // console.log(bookName)
    // console.log(isbn)
    // console.log(summary)
    // console.log(coverImage)
    // console.log(authorFirstName)
    // console.log(authorLastName)


    // //find author with that Name
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
                coverImagePublicId:coverImagePublicId,
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
                coverImagePublicId:coverImagePublicId,
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
    const list_of_books=await Prisma.book.findMany({
        include:{
            author:true
        }
    })
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
    const bookId=req.params.bookId;
    const book=await Prisma.book.findUnique({
        where:{
            id:bookId
        },
        include:{
            author:true
        }
    })
    res.status(200);
    res.json({"data":book});
}


//delete a specific book

const deleteBook=async(req,res)=>{
    const bookId=req.params.id;
    const result=await Prisma.book.delete({
        where:{
            id:bookId
        }
    })
    const authorId=result.authorId;
    const author=await Prisma.author.findUnique({
        where:{
            id:authorId
        },
        include:{
            Book:true
        }
    })

    if(author.Book.length===0){
        const deletedAuthor=await Prisma.author.delete({
            where:{
                id:authorId
            }
        })
    }
    //This will dynamically delete the image in the cloud 
    cloudinary.uploader.destroy(result.coverImagePublicId,function(result){
    })

    res.status(200);
    res.json({"message":"Successfully removed the book from our database!"})
}


//update the book
/* To-do Task */

const updateBook=async(req,res)=>{
    const bookId=req.params.id;
    const bookTitle=req.body.bookName;
    const bookIsbn=req.body.isbn;
    const bookSummary=req.body.summary;


    
    const updatedBook=await Prisma.book.update({
        where:{
            id:bookId
        },
        data:{
            bookName:bookTitle,
            isbn:bookIsbn,
            summary:bookSummary,
        }
    })

    res.status(200)
    res.json({"message":"Successfully Updated the Book"})
}

module.exports={createBook,getAllBooks,getSingleBook,updateBook,deleteBook}