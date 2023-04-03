import React, { useEffect, useRef, useState } from 'react'
import { AiFillCamera, AiOutlineClose } from "react-icons/ai"
import { BiError } from "react-icons/bi"
import axios from 'axios'

const CreateBook = () => {
    const coverImageRef: any = useRef(null);
    const [coverImageFile, setCoverImageFile] = useState("");
    const [coverImage, setCoverImage] = useState("");

    function loadCoverImage(event: any) {
        setCoverImageFile(event.target.files[0]);
        const imageURL = URL.createObjectURL(event.target.files[0]);
        setCoverImage(imageURL);
    }


    const deleteCoverImageInput = () => {
        if (coverImageRef.current != null) {
            coverImageRef.current.value = null;
        }

    }


    return (
        <div className='flex-col flex justify-center items-center min-h-[90vh] w-[100%] pb-10 pt-10'>
            <div className='w-full p-6  bg-[white] rounded-md shadow-2xl lg:max-w-xl'>
                <h1 className="text-3xl font-semibold font-serif text-center text-black ">
                    Add Book
                </h1>

                <form className="mt-6">

                    <div className="mb-2">
                        <label
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Book Title
                        </label>
                        <input
                            name="bookTitle"
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            className="block text-sm font-semibold text-gray-800"
                        >
                            ISBN-NO:
                        </label>
                        <input
                            name="isbn"
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className=" h-[12vh] w-[100%] flex flex-row justify-between">
                        <div className="h-[90%] w-[40%]">
                            <label
                                className="block text-sm font-semibold text-gray-800"
                            >Author FirstName
                            </label>
                            <input
                                name="firstName"
                                type="text"
                                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>

                        {/* Author First Name and Last Name */}

                        <div className="h-[90%] w-[40%]">
                            <label
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Author LastName
                            </label>
                            <input
                                name="lastName"
                                type="text"
                                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>

                    </div>

                    <div className="mb-2">
                        <label
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Summary
                        </label>
                        <textarea
                            name="summary"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        ></textarea>
                    </div>

                    <label className="h-[10vh] mt-5 w-[100%] border-2  justify-center items-center flex cursor-pointer font-medium text-[#2b2929]">
                        Cover Image<br />
                        <AiFillCamera className='text-2xl ml-3' />
                        <input ref={coverImageRef} onChange={(event) => {
                            loadCoverImage(event)
                        }} accept="image/png, image/jpeg, image/jpg" className=" hidden"
                            name="coverImage" type="file" />
                    </label>
                    <output className={coverImage ? "h-[30vh] w-[100%] flex flex-row items-center mt-5 justify-around" : "hidden"} id="coverImage">
                        {
                            coverImage ? <div className="h-[90%] w-[60%] relative border-2 border-blue-900">
                                <img className="h-[100%] w-[100%] object-contain absolute" src={coverImage} alt='images' />
                                <div onClick={() => {
                                    deleteCoverImageInput()
                                    //@ts-ignore
                                    setCoverImage((coverImage) => undefined)
                                }} className="h-[30px] w-[30px] rounded-full bg-red-400 absolute text-white flex justify-center items-center top-[-10px] right-[-10px] z-10 cursor-pointer hover:bg-red-600" id="delete">
                                    <AiOutlineClose className="text-white" />
                                </div>
                            </div> : <div></div>
                        }
                    </output>

                    <div className="mt-6">
                        <button type="submit" className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#3a10e5] rounded-md hover:hover:bg-[#3b10e5ce] focus:outline-none focus:bg-purple-600">
                            Add
                        </button>
                    </div>
                </form>
            </div>

        </div>

    )
}

export default CreateBook;