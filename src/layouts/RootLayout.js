import { useState } from "react";
import { Outlet } from "react-router-dom";

import SideBarOverlay from "../pages/SideBarOverlay";
import Header from "../pages/Header";
import SideBar from "../pages/SideBar/SideBar";
import MiniSideBar from "../pages/MiniSideBar";
import SideBarContext from "../utils/contexts/SideBarContext";
import OverlayContext from "../utils/contexts/OverlayContext";

const RootLayout = () => {
    const [showOverlay, setShowOverlay] = useState(false);
    const [showSideBar, setShowSideBar] = useState(true);

    return (
        <div className="text-sm w-full h-full scrollbar overflow-y-hidden">
            <OverlayContext.Provider
                value={{
                    showOverlay,
                    setShowOverlay,
                }}
            >
                <SideBarContext.Provider
                    value={{
                        showSideBar,
                        setShowSideBar,
                    }}
                >
                    <SideBarOverlay></SideBarOverlay>
                    <Header></Header>
                    {showSideBar && <SideBar></SideBar>}
                    <MiniSideBar></MiniSideBar>
                    <div
                        className={`mt-[var(--header-height)] app-md:ml-[var(--min-sidebar-width)] app-sm:ml-0 ml-[var(--sidebar-width)] w-[calc(100%-var(--sidebar-width))] app-md:w-[calc(100%-var(--min-sidebar-width))] app-sm:w-full overflow-x-hidden ${
                            showSideBar
                                ? "w-[calc(100%-var(--sidebar-width))]"
                                : "ml-[var(--min-sidebar-width)] w-[calc(100%-var(--min-sidebar-width))]"
                        } `}
                    >
                        <Outlet></Outlet>
                    </div>
                </SideBarContext.Provider>
            </OverlayContext.Provider>
        </div>
    );
};

export default RootLayout;
