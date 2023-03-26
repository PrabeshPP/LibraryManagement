import React from 'react'
import Image from 'next/image';
import bookIcon from "../../public/book-icon.svg";
import {BsCartFill} from "react-icons/bs"
import {IoBookSharp} from "react-icons/io5";
import {BiLogIn} from "react-icons/bi";


const NavBar = () => {
  return (
    <div className=' h-[10vh] w-[100%] flex flex-row justify-between'>
        <div className='h-[100%] w-[15%] flex flex-row  items-center cursor-pointer'>
            <div className=' h-[80%] w-[30%] relative curs'>
            <Image src={bookIcon}  alt="Library Icon" fill/>
            </div>
            <div className='h-[90%] w-[70%] text-left flex items-center'>
                <p className='text-2xl text-[#8892b0] font-bold'>My Library</p>
            </div>
        </div>
        <div className='h-[100%] w-[60%] flex flex-row justify-around items-center'>
            <div className='text-[#64ffda] flex justify-center items-center text-lg font-semibold rounded-lg cursor-pointer h-[65%] w-[20%] border-[#64ffda] border-[1px] hover:bg-[#337d6c7a]'>
                <IoBookSharp/>
                <p className=' ml-1'>Books</p>
                </div>
            <div className='text-[#64ffda] flex justify-center items-center text-lg font-semibold rounded-lg cursor-pointer h-[65%] w-[20%] border-[#64ffda] border-[1px] hover:    bg-[#337d6c7a]'>
                <BsCartFill/>
                <p className=' ml-1'>Cart</p>
                </div>
            <div className='text-[#64ffda] flex justify-center items-center text-lg font-semibold rounded-lg cursor-pointer h-[65%] w-[20%] border-[#64ffda] border-[1px] hover:bg-[#337d6c7a]'>
                <BiLogIn/>
                <p className=' ml-1'>Sign In</p>
                </div>
        </div>
    </div>
  )
}

export default NavBar