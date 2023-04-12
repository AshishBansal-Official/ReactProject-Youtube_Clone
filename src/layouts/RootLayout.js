import { Outlet } from "react-router-dom";

import Header from "../pages/Header";
import SideBar from "../pages/SideBar/SideBar";
import MiniSideBar from "../pages/MiniSideBar";

const RootLayout = () => {
    return (
        <div className="text-sm scrollbar">
            <Header></Header>
            <SideBar></SideBar>
            <MiniSideBar></MiniSideBar>
            <div className="mt-[var(--header-height)] ml-[var(--sidebar-width)] w-[calc(100%-var(--sidebar-width))] overflow-x-hidden">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default RootLayout;
