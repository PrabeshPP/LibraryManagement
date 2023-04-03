import React,{useState,useEffect} from 'react'
import {NavLink} from "react-router-dom"
import Cookies from 'js-cookie'
import {ImLibrary} from "react-icons/im"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const NavBar = () => {
    const navigate=useNavigate();
    const authenticatedCookie=Cookies.get("_j1");
    const [isScrolled,setScrolled]=useState(false);

    const changeNavBarColor=()=>{
        if(window.scrollY>=10){
            setScrolled(true);
        }else{
            setScrolled(false);
        }
    }

    const logoutHandler=async()=>{
        try{
            const response=await axios.post("/logout")
            if(response){
                Cookies.remove("_j1");
                navigate("/");
            }
        }catch(err){
            console.log(err);
        }
    }

    useEffect(()=>{

    },[authenticatedCookie,logoutHandler])

    window.addEventListener("scroll",changeNavBarColor);
    //To do add on-scrollable
    // const [isScrolled,setScrolled]=useState(false)
  return (
    <div className={isScrolled?'font-sans h-[10vh] w-[100%] flex flex-row justify-between sticky top-0 z-50 bg-white transition-all':'font-sans h-[10vh] w-[100%] flex flex-row justify-between sticky top-0 z-50 transition-all'}>
        <NavLink to={"/"} className='h-[100%] w-[15%] flex flex-row  items-center cursor-pointer'>
            <div className=' h-[80%] w-[30%] relative curs'>
            {/* <Image src={bookIcon}  alt="Library Icon" fill/> */}
            </div>
            <div className='h-[90%] w-[70%] text-left justify-center flex flex-col items-center'>
                <ImLibrary className='text-[#10162f] text-2xl'/>
                <p className='text-sm text-[#10162f] font-bold font-sans'>My Library</p>
            </div>
        </NavLink>
        
        <div className='h-[100%] w-[60%] flex flex-row justify-around items-center'>
            <NavLink to={"/books"} className='text-[#10162f] '>
                {/* <IoBookSharp/> */}
                <p className=' ml-1 hover:text-[#3a10e5] font-bold cursor-pointer'>Books</p>
                </NavLink>
            <NavLink to={"/borrowed-books"} className='text-[#10162f]'>
                {/* <BsCartFill/> */}
                <p className='ml-1 hover:text-[#3a10e5] font-bold cursor-pointer'>Borrowed Books</p>
                </NavLink>
            {
                authenticatedCookie?<div onClick={logoutHandler} className='text-[white] flex justify-center items-center text-lg font-semibold bg-[#3a10e5] rounded-sm cursor-pointer h-[65%] w-[15%] hover:bg-[#3b10e5ce] hover:text-white'>
                {/* <BsCartFill/> */}
                <p className='ml-1'>Logout</p>
                </div>:<NavLink to={"/signin"} className='text-[white] flex justify-center items-center text-lg font-semibold bg-[#3a10e5] rounded-sm cursor-pointer h-[65%] w-[15%] hover:bg-[#3b10e5ce] hover:text-white'>
                {/* <BiLogIn/> */}
                <p className=' ml-1'>Sign In</p>
                </NavLink>
            }
                
        </div>
    </div>
  )
}

export default NavBar