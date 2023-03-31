'use client'

import HomePage from "@/Components/HomePage/HomePage";
import { useEffect, useState } from "react";

interface Book {
  id: string,
  bookName: string,
  isbn: string,
  summary: string,
  userId: string,
  auhtorId: string,
  coverImage: string
}



export default  function Home() {

  const [books,setBooks]=useState([]);
  async function getData() {
    const response = await fetch("http://localhost:3001/books", {
      next: { revalidate: 30 },
      method: "GET"
    })
    const data = await response.json()
    if(data){
      setBooks(data.books);
    }
  }



  useEffect(()=>{
      getData()
  },[])

 
  return (
    <div className="w-[100%] min-h-[90vh]">
      <div className=" min-h-[90vh] w-[100%] flex flex-wrap justify-around mt-6">
        {
          books.length === 0 ? <div>Loading......</div> : books.map((book:Book) => {
            return <HomePage key={book.id} Book={book}/>
          })
        }
      </div>
    </div>
  )
}
