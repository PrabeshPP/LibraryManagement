import React,{useState,useEffect} from 'react'
import Card from '../../UI/Home/Book-UI';

interface Book {
  id: string,
  bookName: string,
  isbn: string,
  summary: string,
  userId: string,
  auhtorId: string,
  coverImage: string
}

const Books = () => {
  const [books,setBooks]=useState([]);
  async function getData() {
    const response = await fetch("http://localhost:3001/books", {
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
            return <Card key={book.id} Book={book}/>
          })
        }
      </div>
    </div>
  )
}

export default Books