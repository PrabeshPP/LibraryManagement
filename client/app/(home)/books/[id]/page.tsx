
import axios from 'axios'
import React from 'react'
import Image from 'next/image';

interface Book {
  id: string,
  bookName: string,
  isbn: string,
  summary: string,
  userId: string,
  auhtorId: string,
  coverImage: string
}


async function getSingleBook(id: string) {
  const response = await axios.get(`http://localhost:3001/books/${id}`, {
    withCredentials: true
  })
  // const authorResponse=await axios.get()
  return response.data.data;
}

const BookDetail = async ({ params }: {
  params: { id: string }
}) => {
  const book: Book = await getSingleBook(params.id)
  return (
    <div className=' h-[90vh] w-[100%] flex flex-row bg-[#fff0e5] font-serif '>
      <div className=' h-[100%] w-[20%] flex justify-center items-center ml-[20%]'>
        <div className=' h-[60%] w-[100%] relative'>
          <Image src={book.coverImage} alt={book.bookName} fill />
        </div>
      </div>
      <div className=' h-[100%] w-[40%] flex items-center ml-[5%]'>
        <div className=' bg-[white] min-h-[50%] w-[100%] pl-5 rounded-sm'>
          <p className=' text-2xl font-bold mt-5'>{book.bookName}</p>
          <p className=' text-md font-semibold mt-2'>ISBN: {book.isbn}</p>
          <p className=' mt-2'>Author: Prabesh Bista</p>
          <p className=' mt-5'>{book.summary}</p>
          <button className='mt-5 text-[white] flex justify-center items-center text-mdfont-semibold bg-[#3a10e5] rounded-sm cursor-pointer h-[6vh] hover:shadow-lg hover:shadow-black w-[40%] hover:bg-[#3b10e5ce] hover:text-white'>Borrow Book</button>
        </div>
      </div>
    </div>
  )
}

export default BookDetail