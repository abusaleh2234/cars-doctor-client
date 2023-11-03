import { createBrowserRouter } from "react-router-dom";
import Main from "../Loaout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUP from "../Pages/Login/SignUP";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/signup",
          element: <SignUP></SignUP>
        }
      ]
    },
  ]);


export default router;