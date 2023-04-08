import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router'
import { useNavigate } from 'react-router'
import Cookies from "js-cookie"
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

interface Book {
  id: string,
  bookName: string,
  isbn: string,
  summary: string,
  userId: string,
  auhtorId: string,
  coverImage: string,
  isAvailable: boolean,
  author: {
    id: string,
    "firstName": string,
    "lastName": string
  }
}


const UpdateBook = () => {

  const params = useParams()
  const id = params.id
  const [book, setBook] = useState<Book>();

  const notify = async ({ error, message }: { error: boolean, message: string }) => {
    if (error) {
      toast.error(message)
    } else {
      toast.success(message)
    }
  }

  const navigate = useNavigate()
  const authToken = Cookies.get("_aj1")
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // const [coverImageFile, setCoverImageFile] = useState("");


  //checking wheather the required field are inputted correctly or not
  const [BookTitle, setBookTitle] = useState<string>("")
  const [Isbn, setIsbn] = useState<string>("")
  const [AuthorFirstName, setFirstName] = useState<string>("")
  const [AuthorLastName, setLastName] = useState<string>("")
  const [Summary, setSummary] = useState<string>("")







  const onSubmitHandler = async (event: any) => {
    event.preventDefault()

    const bookTitle = event.target.bookTitle.value;
    const bookIsbn = event.target.isbn.value;
    const authorFirstName = event.target.firstName.value;
    const authorLastName = event.target.lastName.value;
    const bookSummary = event.target.summary.value;


    if ((!bookTitle || !bookIsbn) || (!authorFirstName || !authorLastName) || !bookSummary) {

      notify({ error: true, message: "All the fields are required" })

    } else {

      setIsLoading(true);
      const formData = new FormData();
      formData.append("bookName", bookTitle)
      formData.append("summary", bookSummary)
      formData.append("isbn", bookIsbn)
      formData.append("authorFirstName", authorFirstName)
      formData.append("authorLastName", authorLastName)
      const response = await axios.post(`/update/book/:bookId`, formData, {
        headers: {
          Authorization: `Bearer ${authToken}`
        },
        withCredentials: true
      })

      setIsLoading(false);
      notify({ error: false, message: "Successfully added a book!" })
    }





  }



  const getSingleBook = async () => {
    try {
      const response = await axios.get(`/books/${id}`, {
        withCredentials: true
      })
      if (response) {
        setBook(response.data['data']);
        setBookTitle(response.data['data'].bookName)
        setIsbn(response.data['data'].isbn)
        setFirstName(response.data['data'].author.firstName)
        setLastName(response.data['data'].author.lastName)
        setSummary(response.data['data'].summary)
      }
    } catch (err) {
      console.log(err)
    }
  }


  useEffect(() => {
    getSingleBook()
  }, [authToken, notify])

  return (
    <div className='flex-col flex justify-center items-center min-h-[100vh] w-[80%] pb-10 pt-10'>
      {
        book ? <div className='w-full p-6  bg-[white] rounded-md shadow-2xl lg:max-w-xl'>
          <h1 className="text-3xl font-semibold font-serif text-center text-black ">
            Update Book
          </h1>
          <ToastContainer pauseOnFocusLoss={false} closeButton={true} closeOnClick={true} draggable={false} pauseOnHover={false} autoClose={3000} limit={5} />
          <form onSubmit={isLoading ? () => { return false } : onSubmitHandler} className="mt-6">

            <div className="mb-2">
              <label
                className="block text-sm font-semibold text-gray-800"
              >
                Book Title
              </label>
              <input
               
                defaultValue={BookTitle}
                name="bookTitle"
                type="text"
                className={"block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"}
              />
            </div>
            <div className="mb-2">
              <label
                className="block text-sm font-semibold text-gray-800"
              >
                ISBN-NO:
              </label>
              <input
                defaultValue={Isbn}
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
                  defaultValue={AuthorFirstName}
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
                  defaultValue={AuthorLastName}
                 

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
                defaultValue={Summary}
                name="summary"
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              ></textarea>
            </div>


            <div className="mt-6">
              {
                isLoading ? <div className='"w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-red-500 rounded-md  focus:outline-none  cursor-not-allowed"'> Adding....</div> : <button type="submit" className={"w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#3a10e5] rounded-md hover:hover:bg-[#3b10e5ce] focus:outline-none focus:bg-purple-600"}>
                  Add
                </button>
              }

            </div>
          </form>
        </div> : <div>Loading.....</div>
      }

    </div>
  )
}

export default UpdateBook

