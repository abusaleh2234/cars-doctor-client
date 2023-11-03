import { Outlet } from "react-router-dom";
import Navber from "../Pages/Shered/Navbar/Navber";
import Footer from "../Pages/Shered/Footer/Footer";


const Main = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;