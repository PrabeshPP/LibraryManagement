import {Link} from "react-router-dom"

const AdminBookUI = () => {
    return <div className=" h-[90vh] w-[100%] flex justify-center items-center">
        <div className=" h-[80%] w-[60%] flex flex-wrap justify-center items-center flex-row">
            <div className=" hover:bg-[#e5e5e5] h-[40%] w-[40%] m-2 flex justify-center items-center bg-[white] text-lg font-bold cursor-pointer p-2 border-2 rounded-[20px]">All Books</div>
            <div className=" hover:bg-[#e5e5e5] h-[40%] w-[40%] m-2 flex justify-center items-center bg-[white] text-lg font-bold cursor-pointer p-2 border-2 rounded-[20px]">Update Book</div>
            <div className=" hover:bg-[#e5e5e5] h-[40%] w-[40%] m-2 flex justify-center items-center bg-[white] text-lg font-bold cursor-pointer p-2 border-2 rounded-[20px]">Delete Book</div>
            <Link to = {"/admin/books/create"} className="hover:bg-[#e5e5e5] h-[40%] w-[40%] m-2 flex justify-center items-center bg-[white] text-lg font-bold cursor-pointer p-2 border-2 rounded-[20px]">
            Create Book
            </Link>
        </div>
    </div>
}

export default AdminBookUI;