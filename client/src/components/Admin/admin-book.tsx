import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../../UI/Home/Book-UI";
import AdminSingleBookUI from "../../UI/Admin/Book-admin-UI";

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
    const [books, setBooks] = useState([]);
    async function getData() {
        const response = await axios.get("/books")
        const data = response.data
        if (data) {
            setBooks(data.books);
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return <div className="min-h-[100vh] w-[80%] ">
        {/* <div className=" h-[10vh] w-[80%] sticky top-[2%] justify-around flex items-center  ml-[10%] backdrop-filter backdrop-blur-sm bg-opacity-40 bg-gray-500 rounded-xl">
            <div className=" h-[70%] w-[20%] border-[2px] border-[#333333] text-[#333333] font-bold   cursor-pointer rounded-2xl flex justify-center items-center">All Books</div>
            <div className=" h-[70%] w-[20%] border-[2px] border-[#333333] text-[#333333] font-bold   cursor-pointer rounded-2xl flex justify-center items-center">Add Book</div>
            <div className=" h-[70%] w-[20%] border-[2px] border-[#333333] text-[#333333] font-bold   cursor-pointer rounded-2xl flex justify-center items-center">Update Book</div>
            <div className=" h-[70%] w-[20%] border-[2px] border-[#333333] text-[#333333] font-bold   cursor-pointer rounded-2xl flex justify-center items-center">Delete Book</div>
        </div> */}
        <div className="min-h-[100vh] w-[100%] flex flex-col items-center pb-[5%]">
            {books.length === 0 ? <div>Loading......</div> : books.map((book: Book) => {
                return <AdminSingleBookUI key={book.id} Book={book} admin={false} />
            })
            }
        </div>


    </div>
}

export default AdminBookUI;