import Head from "next/head";
import Image from "next/image";
interface Book{
  id:string,
  bookName:string,
  isbn:string,
  summary:string,
  userId:string,
  auhtorId:string,
  coverImage:string
}

async function getData(){
  const response=await fetch("http://localhost:3001/books",{
    next:{revalidate:30},
    method:"GET"
  })
  const data=await response.json()
  return data.books;
}

export default async function Home() {
  let data:Array<Book>=[];
  data=await getData();
  console.log(data)
  return (
    <main className="w-[100%] min-h-[90vh]">
      <div className=" min-h-[90vh] w-[100%] flex flex-wrap justify-around mt-6">
       {
        data.length===0?<div>Loading......</div>:data.map((book)=> {
          return <div className="h-1/4 w-1/4 font-sans rounded-lg bg-[#f8f8f9] m-2 ">
            <Image
            src = {book.coverImage}
            className="mx-auto my-auto"
            width={200}
            height= {144}
            alt ="ksdjnfs"
            />
            <h4 className="text-xl ml-2 mt-2 text-[#3b78ce]">{book.bookName}</h4>
            <span className="text-xs ml-2">ISBN: {book.isbn}</span>
            <p className="text-base ml-2">{book.summary}</p>
            <button className="rounded-lg bg-[#3b78ce] items-center text-white p-2 m-2 font-mono">Reserve</button>
          </div>
        })
       }
      </div>
    </main>
  )
}
