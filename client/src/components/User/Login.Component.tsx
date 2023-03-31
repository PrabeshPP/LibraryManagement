import React,{useState} from 'react'
import { useNavigate } from 'react-router';
import axios from 'axios';
import loginImg from "../../Assets/login.png";
import libraryImg from "../../Assets/library.svg";

const LoginComponent = () => {
    const navigate=useNavigate();
    const [showPassword,setShowPassword]=useState(false);

    const onShowPasswordClickListener=()=>{
        setShowPassword((showPassword)=>!showPassword)
    }   

    const onSubmitHandler=async(event:any)=>{
        event.preventDefault();
        const email=event.target.email.value;
        const password=event.target.password.value;
        const formData=new FormData();
        formData.append("email",email);
        formData.append("password",password);
       
        try{
            const response=await axios.post("/login",formData,{
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials:true
            })
            navigate("/")        
        }catch(err){
            console.log(err);
        }
    }
  return (
    <div className='h-[100vh] w-[100%] flex md:flex-row'>
            <div className='h-[100%] w-[50%]'>
                <img src={loginImg} alt={"Login Image"} className=" object-contain h-[100%] w-[100%]" />
            </div>
            <div className='h-[100%] w-[50%] flex justify-center items-center'>
                <div className='h-[95%] w-[80%] rounded-tr-3xl rounded-bl-3xl bg-[#b4ccbf] shadow-2xl shadow-[#32303054] flex flex-col items-center'>
                    <div className='h-[20%] w-[100%] flex flex-col items-center'>
                        <img src={libraryImg} alt={"Library Icon"} className="object-contain h-[60%] w-[40%] mt-4" />
                        <div className=' font-bold font-sans text-xl text-[#0c2340]'>My Library</div>
                    </div>
                    <div className='h-[10%]  w-[100%] flex justify-center items-center text-[#0c2340] text-2xl font-sans font-bold'>
                        Hello! Welcome Back
                    </div>
                    <div className='h-[70%] w-[100%] rounded-bl-3xl'>
                        <form onSubmit={(event)=>{
                            onSubmitHandler(event)
                        }} className='h-[100%] w-[100%] flex flex-col items-center'>
                            <div className='w-[90%] flex flex-col'>
                                <label className=' text-[#0c2340] font-bold'>Email:</label>
                                <input name='email' type={"text"} placeholder="example@gmail.com" className=' h-[6vh] rounded-xl pl-2 mt-1'/>
                            </div>
                            <div className='w-[90%] flex flex-col mt-4'>
                                <label className=' font-bold text-[#0c2340]'>Password:</label>
                                <input name='password' type={showPassword?"text":"password"} placeholder="password" className='h-[6vh] rounded-xl pl-2 mt-1'/>
                            </div>
                            <div className=' h-[10%] w-[80%] items-center flex flex-row'>
                                <input className=' cursor-pointer h-[80%] flex justify-center items-center' onClick={onShowPasswordClickListener} type="checkbox"/>
                                <p className='ml-2 h-[80%] text-sm mt-[-2px] text-[#0c2340] font-bold flex justify-center items-center'>Show Password</p>
                            </div>
                            <button className=' h-[7vh] w-[40%] text-white hover:bg-[#0c2340d2] text-md hover:shadow-md hover:shadow-black font-bold mt-5 bg-[#0c2340] rounded-xl' type='submit'>Login</button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
  )
}

export default LoginComponent