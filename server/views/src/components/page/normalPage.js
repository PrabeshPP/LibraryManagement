import axios from "axios";
import { useEffect, useState } from "react";


const NormalPage = () => {
    const [books, setBooks] = useState([]);
    const fetchData = async () => {
        try {
            const response = await axios.get("/books");
            if (response) {
                const arrData = await response.data.books
                arrData.map((book) => {
                    setBooks((prevData) => {
                        return [...prevData, book]
                    })
                })
            } else {
                setBooks([]);
            }
        } catch (err) {

        }
    }
    useEffect(() => {
        fetchData()
    }, [])
    return <div className=" h-[90vh] w-[100%] text-3xl font-bold flex justify-center items-center">
        {books.length!=0?<div className="h-[100%] w-[100%]">
            {
                books.map((book)=>{
                    return <div className="h-[20vh] w-[30%] bg-red-500">
                        <p>{book.bookName}</p>
                    </div>
                })
            }
        </div>:<div className=" animate-spin h-[40px] w-[40px] rounded-full border-t-2 border-t-bla
         border-r-2 border-r-black border-b-2 border-b-black"></div>}
    </div>
}

export default NormalPage;