import Cookies from 'js-cookie'
import React, { useCallback, useEffect, useState } from 'react'
import loginImg from "../../Assets/login-cart.svg";
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import classes from "./Cart.module.css";

const CartPage = () => {
  const authToken = Cookies.get('_j1')
  const [data, setData] = useState([]);
    const fetchCartItem = useCallback(async () => {
     if(authToken){
      try {
        const response = await axios.get("/cart-items");
        if (response) {
          setData(response.data.message);
        }
      } catch (err) {
        console.log(err);
      }
     }
    }, [])
  
    useEffect(()=>{
      fetchCartItem()
    },[])

  return (
    <>
      {authToken ? <div className=' min-h-[90vh] bg-[#fff0e5] pb-5 w-[100%] flex justify-center flex-col items-center'>
       {
        !data?<div>Loading...</div>:data.map((item:any)=>{
          return <div className={classes.box}>
              <img src={item.book.coverImage} alt={item.book.bookName} className=' h-[90%] w-[30%] object-contain'/>
              <div className=' h-[90%] w-[60%] flex flex-col'>
                    <h1 className=' text-xl font-bold'>{item.book.bookName}</h1>
                    <p className=' text-sm text-gray-800 mt-2'><span className='font-bold'>ISBN:</span> {item.book.isbn}</p>
                    <p className='text-sm text-gray-800 mt-2  w-[100%] line-clamp-2 overflow-hidden text-clip'><span className='font-bold'>Summary:</span> {item.book.summary}</p>
                    <button className=' mt-5 border-none h-[20%] w-[40%] bg-[#3a10e5] text-[white] hover:bg-[#3b10e5ce] flex justify-center items-center font-bold'>Return </button>
              </div>
          </div>
        })
       }

      </div> : <div className=' h-[90vh] w-[100%] flex justify-center flex-col items-center'>
        <div className='h-[40%] w-[30%]'>
          <img className=' h-[100%] w-[100%] object-contain' src={loginImg} alt="Login Image" />
        </div>
        <NavLink to={"/signin"} className='h-[10%] w-[20%] bg-[#3a10e5] mt-5 text-white flex justify-center items-center text-lg font-semibold hover:bg-[#3b10e5ce] hover:text-white cursor-pointer'>SignIn</NavLink>
      </div>}
    </>
  )
}

export default CartPage