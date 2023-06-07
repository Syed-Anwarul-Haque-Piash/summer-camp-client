import {createBrowserRouter} from "react-router-dom";
import Main from "../layouts/Main";
import Banner from "../pages/Home/Banner/Banner";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Home from "../pages/Home/Home";
import Instructor from "../pages/Home/Instructor/Instructor";
import DashBoard from "../layouts/dashboard/DashBoard";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path:"/",
            element: <Home></Home>
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/signup",
            element: <SignUp></SignUp>
        },
        
      ]
    },
    {
      path: "/dashboard",
      element: <DashBoard></DashBoard>
    }
  ]);
  export default router;