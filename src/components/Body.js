import { Outlet } from "react-router-dom";
import MainBody from "./MainBody";
import Sidebar from "./Sidebar";

const Body = ()=>{
    return(
        <div className="flex">
            <Sidebar />
            <Outlet />
             {/* <MainBody /> */}
        </div>
    )
}

export default Body;