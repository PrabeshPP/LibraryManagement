import Cookies from "js-cookie";
import classes from "./main.module.css";
import { FaUserTie } from "react-icons/fa";
import { GrUserAdmin } from "react-icons/gr";
import { NavLink } from "react-router-dom";

const MainPage = () => {
    const onUserBoxClick = () => {
        Cookies.set("preferences", "user")
    }

    const onAdminBoxClick = () => {
        Cookies.set("preferences", "admin")
    }

    return (
        <div className=" h-[100vh] w-[100%] bg-[#fff0e5] flex justify-center flex-col items-center">
            <h1 className=" text-[#10162f] text-3xl mb-10 font-bold">Welcome Back Tiger!</h1>
            <div className=" h-[30%] w-[100%] flex flex-row justify-center items-center">
                <NavLink onClick={onUserBoxClick} to={"/home"} className={classes.box}>
                    <FaUserTie className=" text-[#10162f] text-3xl" />
                    User</NavLink>
                <NavLink onClick={onAdminBoxClick} to={"/admin"} className={classes.box}>
                    <GrUserAdmin className="text-[#10162f] text-3xl" />
                    Admin</NavLink>
            </div>
        </div>
    )
}

export default MainPage;