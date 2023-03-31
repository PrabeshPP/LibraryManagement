'use client'

import React from 'react'
import classes from "./HomePage.module.css";
import Link from 'next/link';
interface Book {
    id: string,
    bookName: string,
    isbn: string,
    summary: string,
    userId: string,
    auhtorId: string,
    coverImage: string
}


const HomePage = (props: any): JSX.Element => {
    const book: Book = props.Book

    return (

        <Link href={`/books/${book.id}`} key={book.id} className={classes.box}>
            <img
                src={book.coverImage}
                className=" h-[30vh] w-[60%] object-contain mt-2"
                alt={book.bookName}
            />
            <p className='text-[#10162f] w-[90%]  text-md font-bold'>{book.bookName}</p>

        </Link>
    )

}

export default HomePage