import axios from "axios";
import { useEffect, useState } from "react";


const NormalPage = () => {
    const [books, setBooks] = useState([]);
    const fetchData = async () => {
        try {
            const response = await axios.get("/books");
            if (response) {
                const arrData = await response.data.books
                const arr=[]
                arrData.map((book) => {
                    arr.push(book)
                    // setBooks((prevData) => {
                    //     return [...prevData, book]
                    // })
                })
                setBooks(arr);

            } else {
                setBooks([]);
            }
        } catch (err) {

        }
    }
    useEffect(() => {
        fetchData()
    }, [])
    return <div className=" h-[90vh] w-[100%] flex justify-center items-center">
        {books.length!==0?<div className="h-[100%] w-[100%] flex flex-wrap p-2">
            {
                books.map((book)=>{
                    return <div className="h-[45vh] w-[15%] bg-gray-400 flex flex-col items-center ml-2">

                    <img src={book.coverImage} alt={book.bookName} className=" object-contain mt-2 h-[60%] w-[100%]"/>
                    <div className=" h-[20%] w-[100%] flex object-center items-center justify-center">
                        <p>{book.bookName}</p>
                    </div>
                    <div className=" h-[10%] w-[80%] bg-purple-600 text-white font-semibold flex justify-center items-center ">
                        View More
                    </div>
                    </div>
                })
            }
        </div>:<div className=" animate-spin h-[40px] w-[40px] rounded-full border-t-2 border-t-bla
         border-r-2 border-r-black border-b-2 border-b-black"></div>}
    </div>
}

export default NormalPage;