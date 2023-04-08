import { FC } from "react"
import classes from "./Book.admin-UI.module.css"
import { NavLink } from "react-router-dom"
import axios from "axios"
import Cookies from "js-cookie"

interface Book {
    id: string,
    bookName: string,
    isbn: string,
    summary: string,
    userId: string,
    auhtorId: string,
    coverImage: string,
    author:{
        id:string,
        "firstName":string,
        "lastName":string
    }
}

const AdminSingleBookUI = (props: any): JSX.Element => {
    const book: Book = props.Book
    const authToken=Cookies.get("_aj1")
    // const onDeleteHandler=async()=>{
    //     const response=await axios.get(`/delete/book/${book.id}`,{
    //         withCredentials:true,
    //         headers:{
    //             "Authorization":`Bearer ${authToken}`
    //         }
    //     })
    // }

    return (
        <div key={book.id} className={classes.box}>
            <img
                src={book.coverImage}
                className=" h-[90%] w-[20%] object-contain"
                alt={book.bookName}
            />
            <div className=" h-[90%] min-w-[45%] flex flex-col justify-center ml-5">
                <p className='text-[#10162f] flex  text-start text-md font-bold'>{book.bookName}</p>
                <p className="text-[#10162f] flex  text-start text-md font-bold'">ISBN:{book.isbn}</p>
                <p className=" text-[#10162f] flex  text-start text-md font-bold">By: {book.author.firstName} {book.author.lastName}</p>
            </div>
            <div className=" h-[90%] w-[35%] ml-2 flex flex-col justify-around">
                <NavLink to={`/admin/book/update/${book.id}`} className=" rounded-2xl cursor-pointer h-[35%] w-[80%] font-semibold hover:shadow-xl hover:bg-[#FFA500] bg-[#6F42C1] text-white flex justify-center items-center">Update</NavLink>
                <div  className=" rounded-2xl cursor-pointer hover:shadow-xl font-semibold hover:bg-[#dc3546c4] h-[35%] w-[80%] bg-[#DC3545] text-white flex justify-center items-center">Delete</div>
            </div>
        </div>
    )
}

export default AdminSingleBookUI;