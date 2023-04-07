import { FC } from "react"
import classes from "./Book.admin-UI.module.css"
import { NavLink } from "react-router-dom"

interface Book {
    id: string,
    bookName: string,
    isbn: string,
    summary: string,
    userId: string,
    auhtorId: string,
    coverImage: string
}

const AdminSingleBookUI=(props: any):JSX.Element=>{
    const book: Book =props.Book

    return (
        <div key={book.id} className={classes.box}>
            <img
                src={book.coverImage}
                className=" h-[30vh] w-[60%] object-contain mt-2"
                alt={book.bookName}
            />
            <p className='text-[#10162f] w-[90%]  text-md font-bold'>{book.bookName}</p>
        </div>
    )
}

export default AdminSingleBookUI;