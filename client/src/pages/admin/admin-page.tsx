import { Navigate, Outlet } from "react-router";
import AdminNavBar from "../../components/Navbar/admin/adminNavBar";
import Cookies from "js-cookie";
import AdminSignIn from "../../components/Admin/auth/signin";

const AdminPage=()=>{
    const authToken = Cookies.get('_aj1');
    return(
        <>
        {
            authToken?<div className=" bg-[#fff0e5] w-[100%] flex flex-row">
            <AdminNavBar/>
            <Outlet/> 
        </div>:<Navigate to="/admin/signin" replace/>
        }
        </>
    )
}

export default AdminPage;