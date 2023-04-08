import React, {useState, useEffect} from 'react';
import AdminNavBar from '../Navbar/admin/adminNavBar';
import axios from 'axios';
import Cookies from 'js-cookie';

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


const AdminDashBoard = () => {
    const adminAuthCokkie=Cookies.get("_aj1")
    const [books,setBooks]=useState([]);
    const [bookCount, setBookCount] = useState(0);
    const [userCount,setUserCount]=useState(0); 
    const [isAvailableCount, setIsAvailable] = useState(0);
    const [display, setDisplay] = useState(false)
    async function getData() {
      const response = await axios.get("/books",{
        headers:{
            Authorization:`Bearer ${adminAuthCokkie}`
        },
        withCredentials:true
      })

      const data = response.data
      if(data){
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

      const response1=await axios.get("/get-all-users",{
        headers:{
            Authorization:`Bearer ${adminAuthCokkie}`
        },
        withCredentials:true
      });
      setUserCount(response1.data.users.length)
      
    }  
    useEffect(()=>{
        getData()
    },[])
    useEffect(() => {
    }, [isAvailableCount])
    function containerDisplayHandler() {
        setDisplay(!display);
    }
    return (
        <div className = "bg-[#fff0e5] h-screen">
            <h1 className='text-xl text-center uppercase mt-4 font-bold'>Admin Dashboard</h1>
            <br />
            <div  className=' cursor-pointer p-2 border-2 rounded-[20px] flex flex-col w-1/4 m-4 bg-white text-center h-40 justify-center relative' onClick={containerDisplayHandler} >
                <i className="uil uil-books text-4xl"></i>
                <i className='uil uil-angle-right-b absolute right-2'></i>
                <span className = "text-lg font-bold">Registered Books</span>
                {display ? <div className='absolute left-[400px] flex flex-col bg-white rounded-[20px] w-[100%]'>
                    <a className = "text-base pb-2 border-b-2 pt-4 hover:bg-blue-200 hover:rounded-t-[20px] hover:text-white">Available Books: {isAvailableCount}</a>
                    <a className = "text-base pt-2 pb-4 hover:bg-blue-200 hover:rounded-b-[20px] hover:text-white">Borrowed Books: {bookCount - isAvailableCount}</a>
                </div> : null}
                
                <span className='text-lg'>{bookCount}</span>
            </div>
            <div className='p-2 border-2  rounded-[20px] flex flex-col w-1/4 m-4 bg-white text-center h-40 justify-center'>
                <i className="uil uil-books text-4xl"></i>
                <span className = "text-lg font-bold">Registered Users</span>
                <span className='text-lg'>{userCount}</span>
            </div>
        </div>
    )
}

export default AdminDashBoard
