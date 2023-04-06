import {useState, useEffect} from 'react';
import {Link} from "react-router-dom"
import Card from '../../UI/Home/Book-UI'
import axios from 'axios';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
interface Book {
    id: string,
    bookName: string,
    isbn: string,
    summary: string,
    userId: string,
    auhtorId: string,
    coverImage: string
}
const AdminBookUI = () => {     
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
              return <Card key={book.id} Book={book} admin = {true} />
            })
          }
        </div>
      </div>
    )
    
    // <div className=" h-[90vh] w-[100%] flex justify-center items-center">
    //     <div className=" h-[80%] w-[60%] flex flex-wrap justify-center items-center flex-row">
    //         <div className=" hover:bg-[#e5e5e5] h-[40%] w-[40%] m-2 flex justify-center items-center bg-[white] text-lg font-bold cursor-pointer p-2 border-2 rounded-[20px]">All Books</div>
    //         <div className=" hover:bg-[#e5e5e5] h-[40%] w-[40%] m-2 flex justify-center items-center bg-[white] text-lg font-bold cursor-pointer p-2 border-2 rounded-[20px]">Update Book</div>
    //         <div className=" hover:bg-[#e5e5e5] h-[40%] w-[40%] m-2 flex justify-center items-center bg-[white] text-lg font-bold cursor-pointer p-2 border-2 rounded-[20px]">Delete Book</div>
    //         <Link to = {"/admin/books/create"} className="hover:bg-[#e5e5e5] h-[40%] w-[40%] m-2 flex justify-center items-center bg-[white] text-lg font-bold cursor-pointer p-2 border-2 rounded-[20px]">
    //         Create Book
    //         </Link>
    //     </div>
    // </div>
}

export default AdminBookUI;