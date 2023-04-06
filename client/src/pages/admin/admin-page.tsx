import { Navigate, Outlet } from "react-router";
import AdminNavBar from "../../components/Navbar/adminNavBar";
import Cookies from "js-cookie";
import AdminSignIn from "../../components/Admin/auth/signin";

const AdminPage=()=>{
    const authToken = Cookies.get('_aj1');
    return(
        <>
        {
            authToken?<div className=" bg-[#fff0e5] min-h-[100vh] w-[100%]">
            <AdminNavBar/>
            <Outlet/> 
        </div>:<Navigate to="/admin/signin" replace/>
        }
        </>
    )
}

export default AdminPage;