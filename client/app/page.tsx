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
      <div className=" min-h-[90vh] w-[100%] flex flex-wrap justify-around">
       {
        data.length===0?<div>Loading......</div>:data.map((book)=> {
          return <div className="h-1/4 w-1/4 font-sans rounded-lg bg-[#f8f8f9] m-2">
            <Image
            src = {book.coverImage}
            className=""
            width={300}
            alt ="ksdjnfs"
            height= {100}
            />
            <h4 className="text-xl">{book.bookName}</h4>
            <span className="text-sm">{book.isbn}</span>
            <p className="text-base">{book.summary}</p>
          </div>
        })
       }
      </div>
    </main>
  )
}
