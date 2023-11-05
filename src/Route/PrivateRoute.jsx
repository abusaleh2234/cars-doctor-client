import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, Navigate, useLocation } from "react-router-dom";





const PrivateRoute = ({children}) => {
    const {user,looding} = useContext(AuthContext)
    const location = useLocation()
    console.log(location);

    if(looding){
        return <progress className="progress w-56"></progress>
    }


    if(user?.email){
        return children
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateRoute;
