import { Outlet } from "react-router";
import NavBar from "../../components/Navbar/NavBar";

const UserInterface=()=>{
    return <div className=" bg-[#fff0e5] min-h-[100vh] w-[100%]">
       <NavBar/>
       <Outlet/> 
    </div>
}

export default UserInterface;