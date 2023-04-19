import { useState } from "react";
import { Outlet } from "react-router-dom";

import SideBarOverlay from "../pages/SideBarOverlay";
import Header from "../pages/Header";
import SideBar from "../pages/SideBar/SideBar";
import MiniSideBar from "../pages/MiniSideBar";
import SideBarContext from "../utils/contexts/SideBarContext";
import OverlayContext from "../utils/contexts/OverlayContext";
import IsWatchScreenContext from "../utils/contexts/IsWatchScreenContext";

const RootLayout = () => {
    const [showOverlay, setShowOverlay] = useState(false);
    const [showSideBar, setShowSideBar] = useState(true);
    const [isWatchScreen, setIsWatchScreen] = useState(false);

    return (
        <div className="text-sm w-full h-full scrollbar overflow-y-hidden">
            <IsWatchScreenContext.Provider
                value={{
                    isWatchScreen,
                    setIsWatchScreen,
                }}
            >
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
                        <div className={`${isWatchScreen ? "hidden" : ""}`}>
                            {showSideBar && <SideBar></SideBar>}
                        </div>
                        <MiniSideBar></MiniSideBar>
                        <div
                            className={`mt-[var(--header-height)]  overflow-x-hidden ${
                                isWatchScreen
                                    ? "ml-0"
                                    : showSideBar
                                    ? "ml-[var(--sidebar-width)] app-md:ml-[var(--min-sidebar-width)] app-sm:ml-0"
                                    : "ml-[var(--min-sidebar-width)] app-md:ml-[var(--min-sidebar-width)] app-sm:ml-0"
                            } `}
                        >
                            <Outlet></Outlet>
                        </div>
                    </SideBarContext.Provider>
                </OverlayContext.Provider>
            </IsWatchScreenContext.Provider>
        </div>
    );
};

export default RootLayout;
