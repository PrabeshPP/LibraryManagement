'use client'

import React from 'react'
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

        <div key={book.id} className="min-h-[40vh] w-[20%] font-sans rounded-lg bg-[#ececf8] m-2 relative flex flex-col  items-center">
            <img
                src={book.coverImage}
                className=" h-[30vh] w-[60%] object-fill mt-2 "
                alt={book.bookName}

            />
            <div className="w-[100%] min-h-[30vh]">
                <h4 className="text-xl ml-2 mt-2 text-[#3b78ce]">{book.bookName}</h4>
                <span className="text-xs ml-2">ISBN: {book.isbn}</span>
                <p className="text-base ml-2">{book.summary}</p>
                <button className="rounded-lg bg-[#3b78ce] items-center text-white p-2 m-2 font-mono hover:shadow-xl hover:shadow-[#00000084]">Place Hold</button>
            </div>

        </div>
    )

}

export default HomePage