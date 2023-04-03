import { NavLink } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const AdminSignUp=()=>{
    const navigate=useNavigate();
    const onSubmitForm=async(event:any)=>{
        event.preventDefault()
        // const email=event.target.email.value;
        // const password=event.target.password.value;
        // const data={
        //     "email":email,
        //     "password":password
        // }

        // // This is where I will send request to the backend to authenticate
        // const response=await axios.post("/api/user/login",data,{
        //     withCredentials:true
        // })


        // navigate("/")      
    }

    return(
        <div className="flex-col flex justify-center items-center bg-[#fff0e5] h-[100vh] w-[100%]">
        <div className="w-full p-6  bg-white rounded-md shadow-2xl lg:max-w-xl">
            <h1 className="text-3xl font-semibold font-serif text-center text-black ">
                Sign in
            </h1>
            <form onSubmit={onSubmitForm} className="mt-6">
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

                <div className="mt-6">
                    <button type="submit" className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#3a10e5] rounded-md hover:hover:bg-[#3b10e5ce] focus:outline-none focus:bg-purple-600">
                        Login
                    </button>
                </div>
            </form>

            <p className="mt-8 text-xs font-light text-center text-gray-700">
                {" "}
                Don't have an account?{" "}
                <NavLink
                    to={"/signup"}
                    className="font-medium text-purple-600 hover:underline"
                >
                    Sign up
                </NavLink>
            </p>
        </div>
    </div>
    )
}

export default AdminSignUp;