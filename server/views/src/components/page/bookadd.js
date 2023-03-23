import React, {useState} from 'react';

function BookAdd() {
    const [formData, setFormData] = useState({
        bookName: "",
        isbn: ""
    })

    function handleChange(event) {
        setFormData({...formData, [event.target.name] : event.target.value})
    }
    function handleSubmit(event) {
        console.log(formData.bookName);
        event.preventDefault();
    }
    return(
        <div className="flex-col flex justify-center items-center h-[90vh] w-[100%]">
        <div className="w-full p-6  bg-white rounded-md shadow-2xl lg:max-w-xl">
            <h1 className="text-3xl font-semibold font-serif text-center text-black ">
                Add a book
            </h1>
            <form className='mt-6'>
                <div className='mb-2'>
                    <label className='block text-sm font-semibold text-gray-800'>Book Name:
                    <textarea value = {formData.bookName} className ="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" onChange = {handleChange} name = "bookName"/>
                    </label>
                </div>
                <div className='mb-2'>
                    <label className="block text-sm font-semibold text-gray-800">ISBN:
                    <input type = "text" value = {formData.isbn} onChange = {handleChange} name = "isbn" className='block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40'/>
                    </label>
                    <input type ="submit" value = "Submit" onClick={handleSubmit} className="w-full mt-2 px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"/>
                </div>
            </form>
        </div>
        </div>
    )
}

export default BookAdd;