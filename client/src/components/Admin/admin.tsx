import React, {useState, useEffect} from 'react';
import AdminNavBar from '../Navbar/adminNavBar';

interface Book {
    id: string,
    bookName: string,
    isbn: string,
    summary: string,
    userId: string,
    auhtorId: string,
    coverImage: string,
    isAvailable: boolean
  }


const Admin = () => {
    const [books,setBooks]=useState([]);
    const [bookCount, setBookCount] = useState(0);
    const [isAvailableCount, setIsAvailable] = useState(0);
    async function getData() {
      const response = await fetch("http://localhost:3001/books", {
        method: "GET"
      })
      const data = await response.json()
      if(data){
        console.log(data.books);
        setBooks(data.books);
        setBookCount(data.books.length);
        let count = 0;
        for (var i = 0; i < data.books.length; i++) {
            if(data.books[i].isAvailable == true) {
                count++;
            }
        }
        setIsAvailable(count);
      }
    }  
    useEffect(()=>{
        getData()
    },[])
    useEffect(() => {
        console.log(isAvailableCount)
    }, [isAvailableCount])
    return (
        <div className = "bg-[#fff0e5] h-screen">
            <AdminNavBar />
            <h1 className='text-xl text-center uppercase mt-4 font-bold'>Admin Dashboard</h1>
            <br />
            <div className='p-2 border-2  rounded flex flex-col w-1/4 m-4 bg-white text-center h-40 justify-center'>
                <i className="uil uil-books text-4xl"></i>
                <span className = "text-lg font-bold">Registered Books</span>
                <span className = "text-base">Available Books: {isAvailableCount}</span>
                <span className = "text-base">Borrowed Books: {bookCount - isAvailableCount}</span>
                <span className='text-lg'>{bookCount}</span>
            </div>
            <div className='p-2 border-2  rounded flex flex-col w-1/4 m-4 bg-white text-center h-40 justify-center'>
                <i className="uil uil-books text-4xl"></i>
                <span className = "text-lg font-bold">Registered Users</span>
                <span className='text-lg'>{bookCount}</span>
            </div>
        </div>
    )
}

export default Admin
