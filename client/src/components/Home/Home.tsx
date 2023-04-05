import React,{useState,useEffect} from 'react'
import Card from '../../UI/Home/Book-UI';
import axios from 'axios';

interface Book {
    id: string,
    bookName: string,
    isbn: string,
    summary: string,
    userId: string,
    auhtorId: string,
    coverImage: string
}

const Home = () => {
    const [books,setBooks]=useState([]);
    async function getData() {
      const response = await axios.get("/books",{
        withCredentials:true
      })
      const data = response.data
      if(data){
        setBooks(data.books);
      }
    }  
    useEffect(()=>{
        getData()
    },[])
  
   
    return (
      <div className="w-[100%] min-h-[90vh] pb-4">
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

export default Home



