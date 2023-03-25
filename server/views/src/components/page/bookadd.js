import React, { useState, useRef, useEffect } from 'react';
import { AiFillCamera, AiOutlineClose } from "react-icons/ai"

function BookAdd() {
    //
    const coverImageRef = useRef(null);
    const [coverImage, setCoverImage] = useState("");
    const [coverImageFile, setCoverImageFile] = useState("");
    //

    function loadCoverImage(event) {
        setCoverImageFile(event.target.files[0]);
        const imageURL = URL.createObjectURL(event.target.files[0]);
        setCoverImage(imageURL);
    }

    const deleteCoverImageInput = () => {
        coverImageRef.current.value = null;
    }


    useEffect(() => {

    }, [])
    const [formData, setFormData] = useState({
        bookName: "",
        isbn: "",
        file: null
    })
    const fileInput = useRef();
    function handleChange(event) {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }
    function handleSubmit(event) {
        onFileUpload();
        event.preventDefault();
    }
    function fileHandler(event) {
        setFormData({
            ...formData,
            file: event.target.files[0]
        })
    }
    function onFileUpload() {
        const fileInfo = new FormData();
        fileInfo.append(
            "myFile",
            formData.file,
            formData.file.name
        );
        console.log(formData.file.name)

        //make request to the backend api to send formData object
    }
    function fileData() {

        if (formData.file) {
            return (
                <div>
                    <h2>Details:</h2>
                    <p>File Name: {fileInput.current.files[0].name}</p>
                    <p>
                        File Type: {fileInput.current.files[0].type}
                    </p>

                </div>
            )
        } else {
            return (
                <div>
                    <br />
                    <h4>Choose file before pressing the submit button</h4>
                </div>
            )
        }
    }
    return (
        <div className="flex-col flex justify-center items-center h-[90vh] w-[100%]">
            <div className="w-full p-6  bg-white rounded-md shadow-2xl lg:max-w-xl">
                <h1 className="text-3xl font-semibold font-serif text-center text-black ">
                    Add a book
                </h1>
                <form className='mt-6'>
                    <div className='mb-2'>
                        <label className='block text-sm font-semibold text-gray-800'>Book Name:
                            <textarea value={formData.bookName} className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" onChange={handleChange} name="bookName" />
                        </label>
                    </div>
                    <div className='mb-2'>
                        <label className="block text-sm font-semibold text-gray-800">ISBN:
                            <input type="text" value={formData.isbn} onChange={handleChange} name="isbn" className='block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40' />
                        </label>
                    </div>
                    <div className='mb-2'>
                        <label className="h-[10vh] mt-5 w-[90%] border-2 border-blue-900 justify-center items-center flex cursor-pointer font-medium text-[#2b2929]">
                            Cover Image<br />
                            <AiFillCamera className='text-2xl ml-3' />
                            <input ref={coverImageRef} onChange={(event) => {
                                loadCoverImage(event)
                            }} accept="image/png, image/jpeg, image/jpg" className=" hidden"
                                name="coverImage" type="file" />
                        </label>
                        <output className={coverImage ? "h-[30vh] w-[90%] flex flex-row items-center mt-5 justify-around" : "hidden"} id="coverImage">
                            {
                                coverImage ? <div className="h-[90%] w-[20%] relative border-2 border-blue-900">
                                    <img className="h-[100%] w-[100%] object-cover absolute" src={coverImage} alt='images' />
                                    <div onClick={() => {
                                        deleteCoverImageInput()
                                        setCoverImage((coverImage) => undefined)
                                    }} className="h-[30px] w-[30px] rounded-full bg-red-500 absolute text-white flex justify-center items-center top-0 z-10 cursor-pointer" id="delete">
                                        <AiOutlineClose className="text-white" />
                                    </div>
                                </div> : <div></div>
                            }
                        </output>
                        {/* <label className='block text-sm font-semibold text-gray-800'>Upload E-book:
                    <input type = "file" ref={fileInput} className ="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" onChange = {fileHandler} name = "file"/>
                    </label> */}
                        {/* <button type = "submit" onClick={onFileUpload}></button> */}
                        {fileData()}
                    </div>
                    <input type="submit" value="Submit" onClick={handleSubmit} className="w-full mt-2 px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600" />
                </form>
            </div>
        </div>
    )
}

export default BookAdd;