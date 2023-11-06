import { createBrowserRouter } from "react-router-dom";
import Main from "../Loaout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUP from "../Pages/Login/SignUP";
import CheckOut from "../Pages/Home/CheckOut/CheckOut";
import Bookings from "../Pages/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute";

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
        },
        {
          path: "/checkOut/:id",
          element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
          loader: ({ params }) => fetch(`https://cars-doctor-server-2nd.vercel.app/checkout/${params.id}`)
        },
        {
          path: "/booking",
          element: <PrivateRoute><Bookings></Bookings></PrivateRoute>
        }
      ]
    },
  ]);


export default router;