

import HomePage from "@/Components/HomePage/HomePage";

interface Book {
  id: string,
  bookName: string,
  isbn: string,
  summary: string,
  userId: string,
  auhtorId: string,
  coverImage: string
}

async function getData() {
  const response = await fetch("http://localhost:3001/books", {
    next: { revalidate: 30 },
    method: "GET"
  })
  const data = await response.json()
  return data.books;
}

export default async function Home() {
  let data: Array<Book> = [];
  data = await getData();
  return (
    <div className="w-[100%] min-h-[90vh]">
      <div className=" min-h-[90vh] w-[100%] flex flex-wrap justify-around mt-6">
        {
          data.length === 0 ? <div>Loading......</div> : data.map((book) => {
            return <HomePage key={book.id} Book={book}/>
          })
        }
      </div>
    </div>
  )
}
