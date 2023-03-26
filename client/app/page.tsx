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
      <div className=" min-h-[90vh] w-[100%] flex flex-wrap ">
       {
        data.length===0?<div>Loading......</div>:data.map((book)=> {
          return <div className=" h-[20vh] w-[20%] bg-red-600">
            <Image
            src = {book.coverImage}
            width = {144}
            alt ="ksdjnfs"
            height = {144}
            />
            <h1>{book.bookName}</h1>
          </div>
        })
       }
      </div>
    </main>
  )
}
