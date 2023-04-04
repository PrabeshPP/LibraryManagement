import { NavLink } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { setAuthToken } from "../../../utils/setHeaders";

const AdminSignUp=()=>{
    const navigate=useNavigate();

    const onSubmitForm=async(event:any)=>{
        event.preventDefault()
        const email=event.target.email.value;
        const password=event.target.password.value;
        const firstName=event.target.firstName.value;
        const lastName=event.target.lastName.value;
        // const confirmPassword=event.target.confirmPassword;
    
        const data={
            "email":email,
            "password":password,
            firstName:firstName,
            lastName:lastName
        }

        // // This is where I will send request to the backend to authenticate
        const response=await axios.post("/admin/signup",data,{
            withCredentials:true
        })
        const token=Cookies.get("_j1")
        setAuthToken(token)
        navigate("/admin")      
    }

    return(
        <div className="flex-col flex justify-center items-center bg-[#fff0e5] h-[100vh] w-[100%]">
        <div className="w-full p-6  bg-white rounded-md shadow-2xl lg:max-w-xl">
            <h1 className="text-3xl font-semibold font-serif text-center text-black ">
                Sign Up
            </h1>
            <form onSubmit={onSubmitForm} className="mt-6">
                <div className=" h-[12vh] w-[100%] flex flex-row justify-between">
                <div className="h-[90%] w-[40%]">
                    <label
                        className="block text-sm font-semibold text-gray-800"
                    >
                        First Name
                    </label>
                    <input
                        name="firstName"
                        type="text"
                        className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                </div>
                <div className="h-[90%] w-[40%]">
                    <label
                        className="block text-sm font-semibold text-gray-800"
                    >
                        Last Name
                    </label>
                    <input
                        name="lastName"
                        type="text"
                        className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                </div>

                </div>
                <div className="mb-2">
                    <label
                        className="block text-sm font-semibold text-gray-800"
                    >
                        Email
                    </label>
                    <input
                        name="email"
                        type="email"
                        className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                </div>
                <div className="mb-2">
                    <label
                        className="block text-sm font-semibold text-gray-800"
                    >
                        Password
                    </label>
                    <input
                        name="password"
                        type="password"
                        className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                </div>

                {/* <div className="mb-2">
                    <label
                        className="block text-sm font-semibold text-gray-800"
                    >
                        Confirm Password
                    </label>
                    <input
                        name="confirmPassword"
                        type="password"
                        className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                </div> */}

                <div className="mt-6">
                    <button type="submit" className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#3a10e5] rounded-md hover:hover:bg-[#3b10e5ce] focus:outline-none focus:bg-purple-600">
                        Sign Up
                    </button>
                </div>
            </form>

            <p className="mt-8 text-xs font-light text-center text-gray-700">
                {" "}
                Already have an account?{" "}
                <NavLink
                    to={"/admin/signin"}
                    className="font-medium text-purple-600 hover:underline"
                >
                    Sign In
                </NavLink>
            </p>
        </div>
    </div>
    )
}

export default AdminSignUp;