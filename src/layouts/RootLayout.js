import { Outlet } from "react-router-dom";

import Header from "../pages/Header";
import SideBar from "../pages/SideBar";
import MinSideBar from "../pages/MinSideBar";

const RootLayout = () => {
    return (
        <div className="text-sm">
            <Header></Header>
            {/* <SideBar></SideBar> */}
            <MinSideBar></MinSideBar>
            {/* <Outlet></Outlet> */}
        </div>
    );
};

export default RootLayout;
