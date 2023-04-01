import {NavLink} from "react-router-dom"
import {ImLibrary} from "react-icons/im"


const AdminNavBar = () => {
    // const navigate=useNavigate();
    // const authenticatedCookie=Cookies.get("_j1");
    // const [isScrolled,setScrolled]=useState(false);
    // const changeNavBarColor=()=>{
    //     if(window.scrollY>=10){
    //         setScrolled(true);
    //     }else{
    //         setScrolled(false);
    //     }
    // }

    // const logoutHandler=async()=>{
    //     try{
    //         const response=await axios.post("/logout")
    //         if(response){
    //             Cookies.remove("_j1");
    //             navigate("/");
    //         }
    //     }catch(err){
    //         console.log(err);
    //     }
    // }

    // useEffect(()=>{

    // },[authenticatedCookie])

    // window.addEventListener("scroll",changeNavBarColor);
    // //To do add on-scrollable
    // // const [isScrolled,setScrolled]=useState(false)
  return (
    <div className="font-sans h-[10vh] w-[100%] flex flex-row justify-between sticky top-0 z-50 transition-all border-b border-solid border-b-4 border-blue-900 shadow-lg bg=[#f4f4f4]">
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
            <NavLink to={"/admin"} className='text-[#10162f] '>
                {/* <IoBookSharp/> */}
                <p className=' ml-1 hover:text-[#3a10e5] hover:bg-white py-6 px-3 font-bold cursor-pointer'>Dashboard</p>
                </NavLink>
                <NavLink to ={"/"}> <div className='text-[#10162f]'>
                {/* <BsCartFill/> */}
                <p className='hover:text-[#3a10e5] font-bold cursor-pointer hover:bg-white py-6 px-3'>User POV</p>
                </div>
                </NavLink>
                <NavLink to={""}> <div className='text-[#10162f] hover:bg-white hover:text-[#3a10e5]'>
                {/* <BsCartFill/> */}
                <div className="flex items-center">
                <p className='hover:text-[#3a10e5] font-bold cursor-pointer hover:bg-white py-6 px-3'>Books</p>
                <i className="uil uil-angle-down text-xl"></i>
                </div></div>
                </NavLink>        
                <NavLink to={""}> <div className='text-[#10162f] hover:bg-white hover:text-[#3a10e5]'>
                {/* <BsCartFill/> */}
                <div className="flex items-center">
                <p className='hover:text-[#3a10e5] font-bold cursor-pointer hover:bg-white py-6 px-3'>Users</p>
                <i className="uil uil-angle-down text-xl"></i>
                </div></div>
                </NavLink>                     
        </div>
    </div>
  )
}

export default AdminNavBar