import Cookies from "js-cookie";
import { Route, Routes } from "react-router";
import NavBar from "./components/navBar";
import Login from "./components/page/login";
import NormalPage from "./components/page/normalPage";
import PrivateRoutes from "./components/page/protectedRoutes";
import SecretPage from "./components/page/secretPage";
import Signup from "./components/page/signup";
import { setAuthToken } from "./useAuthToken";

function App() {
  const token=Cookies.get("_j1");
  if(token){
    setAuthToken(token);
  }
  return (
    <div className=" min-h-[100vh] w-[100%]">
        <NavBar/>
       <Routes>
          <Route path="/" element={<NormalPage/>}/>
          <Route path="/secret" element={<PrivateRoutes/>}>
            <Route path="/secret" element={<SecretPage/>}/>
          </Route>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element= {<Signup/>} />
       </Routes>
    </div>
  );
}

export default App;
