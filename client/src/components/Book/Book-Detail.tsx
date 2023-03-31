import React,{useCallback,useEffect,useState} from 'react';
import { useParams } from 'react-router';
import axios from "axios";
import classes from "./Book-Detail.module.css";

interface Book {
    id: string,
    bookName: string,
    isbn: string,
    summary: string,
    userId: string,
    auhtorId: string,
    coverImage: string
  }

const BookDetail = () => {
    const params=useParams()
    const id=params.id
    const [book,setBook]=useState<Book>();
    const getSingleBook=useCallback(async ()=>{
        try{
            const response = await axios.get(`http://localhost:3001/books/${id}`, {
            withCredentials: true
          })
          if(response){
            setBook(response.data['data']);
          }
        }catch(err){
            console.log(err)
        }
        
        
    },[])

    useEffect(()=>{
        getSingleBook();
    },[])
  return (
   <div className='h-[90vh] w-[100%]'>
     {
        book?<div className='h-[100%] w-[100%]  flex font-serif items-center justify-center'>
        <div className={classes["desc-container"]}>
            <img src={book.coverImage} alt={book.bookName} className=' h-[40%] w-[20%] mt-5 object-contain' />
          <div className=' h-[60%] w-[90%] flex flex-col pl-5'>
            <p className=' text-2xl font-bold mt-5'>{book.bookName}</p>
            <p className=' text-md font-semibold mt-2'>ISBN: {book.isbn}</p>
            <p className=' mt-2'>Author: Prabesh Bista</p>
            <p className=' mt-5'>{book.summary}</p>
            <button className='mt-5 text-[white] flex justify-center items-center text-mdfont-semibold bg-[#3a10e5] rounded-sm cursor-pointer h-[6vh] hover:shadow-lg hover:shadow-black w-[40%] hover:bg-[#3b10e5ce] hover:text-white'>Borrow Book</button>
          </div>
        </div>
      </div>:<div>Loading.....</div>
     }
   </div>
  )
}

export default BookDetail