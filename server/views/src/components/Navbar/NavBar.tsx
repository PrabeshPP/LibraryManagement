import React from 'react'
import Link from 'next/link'
import Cookies from 'js-cookie'
import {ImLibrary} from "react-icons/im"

const NavBar = () => {
    const authenticatedCookie=Cookies.get("_j1");
  return (
    <div className=' bg-[#fff] border-b-[1px] border-black font-sans h-[10vh] w-[100%] flex flex-row justify-between sticky top-0 z-50'>
        <div className='h-[100%] w-[15%] flex flex-row  items-center cursor-pointer'>
            <div className=' h-[80%] w-[30%] relative curs'>
            {/* <Image src={bookIcon}  alt="Library Icon" fill/> */}
            </div>
            <div className='h-[90%] w-[70%] text-left justify-center flex flex-col items-center'>
                <ImLibrary className='text-[#10162f] text-2xl'/>
                <p className='text-sm text-[#10162f] font-bold font-sans'>My Library</p>
            </div>
        </div>
        <div className='h-[100%] w-[60%] flex flex-row justify-around items-center'>
            <Link href={"/books"} className='text-[#10162f] '>
                {/* <IoBookSharp/> */}
                <p className=' ml-1 hover:text-[#3a10e5] font-bold cursor-pointer'>Books</p>
                </Link>
            <div className='text-[#10162f]'>
                {/* <BsCartFill/> */}
                <p className='ml-1 hover:text-[#3a10e5] font-bold cursor-pointer'>Issued Books</p>
                </div>
            {
                authenticatedCookie?<div className='text-[white] flex justify-center items-center text-lg font-semibold bg-[#3a10e5] rounded-sm cursor-pointer h-[65%] w-[15%] hover:bg-[#3b10e5ce] hover:text-white'>
                {/* <BsCartFill/> */}
                <p className='ml-1'>Logout</p>
                </div>:<Link href={"/signin"} className='text-[white] flex justify-center items-center text-lg font-semibold bg-[#3a10e5] rounded-sm cursor-pointer h-[65%] w-[15%] hover:bg-[#3b10e5ce] hover:text-white'>
                {/* <BiLogIn/> */}
                <p className=' ml-1'>Sign In</p>
                </Link>
            }
                
        </div>
    </div>
  )
}

export default NavBar