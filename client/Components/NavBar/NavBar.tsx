import React from 'react'
import Image from 'next/image';
import bookIcon from "../../public/book-icon.svg";
import {BsCartFill} from "react-icons/bs"
import {IoBookSharp} from "react-icons/io5";
import {BiLogIn} from "react-icons/bi";


const NavBar = () => {
  return (
    <div className='bg-[#3b78ce] font-mono h-[10vh] w-[100%] flex flex-row justify-between'>
        <div className='h-[100%] w-[15%] flex flex-row  items-center cursor-pointer'>
            <div className=' h-[80%] w-[30%] relative curs'>
            {/* <Image src={bookIcon}  alt="Library Icon" fill/> */}
            </div>
            <div className='h-[90%] w-[70%] text-left flex items-center'>
                <p className='text-2xl text-[white] font-bold'>My Library</p>
            </div>
        </div>
        <div className='h-[100%] w-[60%] flex flex-row justify-around items-center'>
            <div className='text-white '>
                {/* <IoBookSharp/> */}
                <p className=' ml-1'>Books</p>
                </div>
            <div className='text-white'>
                {/* <BsCartFill/> */}
                <p className='ml-1'>Cart</p>
                </div>
            <div className='text-[#3b78ce] flex justify-center items-center text-lg font-semibold bg-[#fcfcfc] rounded-full cursor-pointer h-[65%] w-[20%] hover:bg-[#ebf1f9] hover:text-white'>
                {/* <BiLogIn/> */}
                <p className=' ml-1'>Sign In</p>
                </div>
        </div>
    </div>
  )
}

export default NavBar