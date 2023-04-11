import { Outlet } from "react-router-dom";

import Header from "../pages/Header";
import SideBar from "../pages/SideBar/SideBar";
import MiniSideBar from "../pages/MiniSideBar";

const RootLayout = () => {
    return (
        <div className="text-sm">
            <Header></Header>
            <SideBar></SideBar>
            <MiniSideBar></MiniSideBar>
            {/* <Outlet></Outlet> */}
        </div>
    );
};

export default RootLayout;
