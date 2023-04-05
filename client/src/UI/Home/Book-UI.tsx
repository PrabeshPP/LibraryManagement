import React from 'react'
import {NavLink} from "react-router-dom"
import classes from "./Book-UI.module.css";

interface Book {
    id: string,
    bookName: string,
    isbn: string,
    summary: string,
    userId: string,
    auhtorId: string,
    coverImage: string
}

const Card = (props: any):JSX.Element => {
    const book: Book = props.Book

    return (
        <NavLink to={`/home/books/${book.id}`} key={book.id} className={classes.box}>
            <img
                src={book.coverImage}
                className=" h-[30vh] w-[60%] object-contain mt-2"
                alt={book.bookName}
            />
            <p className='text-[#10162f] w-[90%]  text-md font-bold'>{book.bookName}</p>
        </NavLink>
    )
}

export default Card