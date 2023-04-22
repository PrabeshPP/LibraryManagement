import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../../UI/Home/Book-UI";
import AdminSingleBookUI from "../../UI/Admin/Book-admin-UI";
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

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

    const notify = async ({ error, message }: { error: boolean, message: string }) => {
        if (error) {
            toast.error(message)
        } else {
            toast.success(message)
        }
    }

    const [books, setBooks] = useState([]);
    async function getData() {
        const response = await axios.get("/books")
        const data = response.data
        if (data) {
            setBooks(data.books);
        }
    }

    function updateComponent(success:boolean){
        if(success){
            notify({ error: !success, message: "Successfully removed the book!"})
        }else{
            notify({ error: success, message: "Cannot remove the book!"})
        }
        
    }

    useEffect(() => {
        getData()
    }, [updateComponent])

    return <div className="min-h-[100vh] w-[80%] ">
        <ToastContainer pauseOnFocusLoss={false} closeButton={true} closeOnClick={true} draggable={false} pauseOnHover={false} autoClose={3000} limit={5} />
        <div className="min-h-[100vh] w-[100%] flex flex-col items-center pb-[5%]">
            {books.length === 0 ? <div>Nothing to Show</div> : books.map((book: Book) => {
                return <AdminSingleBookUI onUpdate={updateComponent} key={book.id} Book={book} admin={false} />
            })
            }
        </div>


    </div>
}

export default AdminBookUI;