import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import axios from "axios";
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
  const [books, setBooks] = useState<Book[]>([]);

  async function getData() {
    const response = await axios.get("/books", {
      withCredentials: true
    })
    const data = response.data
    if (data) {
      setBooks(data.books);
    }
  }
  useEffect(() => {
    getData()
  }, [])

  return <div className="w-[100%] h-[90vh] flex flex-row justify-between">

    <aside className=" h-[90vh] w-[10%] hover:w-[20%] transition-all cursor-pointer duration-150 bg-slate-800 fixed left-0 top-[10vh]">

    </aside>
    <div className="min-h-[90vh] w-[80%] ml-[20%] bg-green-500">

    </div>


  </div>
}

export default AdminBookUI;